let listings = [];

const listingsGrid = document.getElementById("listingsGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const stateFilter = document.getElementById("stateFilter");
const sortFilter = document.getElementById("sortFilter");
const resultsCount = document.getElementById("resultsCount");
const singleListing = document.getElementById("singleListing");

let currentPage = 1;
const itemsPerPage = 8;

let modalGalleryImages = [];
let modalCurrentIndex = 0;
let touchStartX = 0;
let touchEndX = 0;

const SUPABASE_URL = "https://rznofcaveoneeixyulxy.supabase.co";
const SUPABASE_KEY = "sb_publishable_Qdj2WyKAkw-pDOQUwHTCbQ_tNwwWPVC";
let supabaseClient = null;

async function initializeApp() {
  if (typeof supabase === "undefined") {
    console.error("Supabase no cargó.");
    listings = [];
    renderListings(listings);
    renderSingleListing();
    return;
  }

  supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
  await loadListingsFromSupabase();

  renderListings(listings);
  renderSingleListing();
}

async function loadListingsFromSupabase() {
  try {
    const { data, error } = await supabaseClient
      .from("listings")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    const visibleData = (data || []).filter(item => item.status !== "hidden");

    listings = visibleData.map(item => {
      const galleryImages = [];

      if (item.image_1) galleryImages.push(item.image_1);
      if (item.image_2) galleryImages.push(item.image_2);
      if (item.image_3) galleryImages.push(item.image_3);
      if (item.image_4) galleryImages.push(item.image_4);
      if (item.image_5) galleryImages.push(item.image_5);

      return {
        id: item.id.toString(),
        title: item.title || "Sin título",
        category: item.category || "",
        brand: item.title ? item.title.split(" ")[0] : "",
        price: item.price || 0,
        state: item.city ? item.city.split(",").pop().trim() : "Desconocido",
        location: item.city || "",
        condition: item.status === "sold" ? "Vendido" : "Disponible",
        status: item.status || "active",
        image: item.image_1 || "",
        description: item.description || "",
        facebook: item.contact_link || "",
        marketplace: item.contact_link || "",
        contact_name: item.contact_name || "Vendedor",
        gallery: galleryImages
      };
    });

  } catch (error) {
    console.error("Error cargando anuncios:", error);
    listings = [];
  }
}

function showModalImage() {
  const modal = document.getElementById("imageModal");
  if (!modal) return;

  const modalImage = modal.querySelector(".modal-main-image");
  modalImage.src = modalGalleryImages[modalCurrentIndex];
}

function showNextModalImage() {
  if (modalGalleryImages.length <= 1) return;
  modalCurrentIndex = (modalCurrentIndex + 1) % modalGalleryImages.length;
  showModalImage();
}

function showPrevModalImage() {
  if (modalGalleryImages.length <= 1) return;
  modalCurrentIndex = (modalCurrentIndex - 1 + modalGalleryImages.length) % modalGalleryImages.length;
  showModalImage();
}

function openImageModal(images, startIndex) {
  modalGalleryImages = Array.isArray(images) ? images : [images];
  modalCurrentIndex = startIndex || 0;

  let modal = document.getElementById("imageModal");

  if (!modal) {
    modal = document.createElement("div");
    modal.id = "imageModal";
    modal.className = "image-modal";
    modal.innerHTML = `
      <button class="close-modal" type="button">×</button>
      <button class="modal-arrow modal-prev" type="button">‹</button>
      <img class="modal-main-image" src="" alt="Imagen ampliada">
      <button class="modal-arrow modal-next" type="button">›</button>
    `;
    document.body.appendChild(modal);

    modal.querySelector(".close-modal").addEventListener("click", function () {
      modal.classList.remove("open");
    });

    modal.querySelector(".modal-next").addEventListener("click", function (event) {
      event.stopPropagation();
      showNextModalImage();
    });

    modal.querySelector(".modal-prev").addEventListener("click", function (event) {
      event.stopPropagation();
      showPrevModalImage();
    });

    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.classList.remove("open");
      }
    });

    modal.addEventListener("touchstart", function (event) {
      touchStartX = event.changedTouches[0].screenX;
    });

    modal.addEventListener("touchend", function (event) {
      touchEndX = event.changedTouches[0].screenX;
      const swipeDistance = touchEndX - touchStartX;

      if (swipeDistance > 60) showPrevModalImage();
      if (swipeDistance < -60) showNextModalImage();
    });
  }

  showModalImage();
  modal.classList.add("open");
}

document.addEventListener("keydown", function (event) {
  const modal = document.getElementById("imageModal");
  if (!modal || !modal.classList.contains("open")) return;

  if (event.key === "ArrowRight") showNextModalImage();
  if (event.key === "ArrowLeft") showPrevModalImage();
  if (event.key === "Escape") modal.classList.remove("open");
});

function sortListings(data) {
  if (!sortFilter) return data;

  const sortValue = sortFilter.value;
  const sorted = [...data];

  if (sortValue === "az") sorted.sort((a, b) => a.title.localeCompare(b.title));
  if (sortValue === "za") sorted.sort((a, b) => b.title.localeCompare(a.title));
  if (sortValue === "high") sorted.sort((a, b) => b.price - a.price);
  if (sortValue === "low") sorted.sort((a, b) => a.price - b.price);

  return sorted;
}

function renderPagination(totalItems) {
  const existingPagination = document.querySelector(".pagination");
  if (existingPagination) existingPagination.remove();

  if (totalItems === 0) return;

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  if (totalPages <= 1) return;

  const paginationDiv = document.createElement("div");
  paginationDiv.className = "pagination";

  if (currentPage > 1) {
    const prevBtn = document.createElement("button");
    prevBtn.className = "page-btn prev-btn";
    prevBtn.textContent = "← Anterior";
    prevBtn.onclick = () => {
      currentPage--;
      filterListings();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    paginationDiv.appendChild(prevBtn);
  }

  for (let i = 1; i <= totalPages; i++) {
    const pageBtn = document.createElement("button");
    pageBtn.className = "page-btn number-btn";
    pageBtn.textContent = i;

    if (i === currentPage) {
      pageBtn.classList.add("active");
      pageBtn.disabled = true;
    }

    pageBtn.onclick = () => {
      currentPage = i;
      filterListings();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    paginationDiv.appendChild(pageBtn);
  }

  if (currentPage < totalPages) {
    const nextBtn = document.createElement("button");
    nextBtn.className = "page-btn next-btn";
    nextBtn.textContent = "Siguiente →";
    nextBtn.onclick = () => {
      currentPage++;
      filterListings();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    paginationDiv.appendChild(nextBtn);
  }

  listingsGrid.parentNode.insertBefore(paginationDiv, listingsGrid.nextSibling);
}

function renderListings(data) {
  if (!listingsGrid) return;

  listingsGrid.innerHTML = "";
  const finalData = sortListings(data);

  if (resultsCount) {
    resultsCount.textContent =
      finalData.length === 1
        ? "1 anuncio encontrado"
        : `${finalData.length} anuncios encontrados`;
  }

  if (finalData.length === 0) {
    listingsGrid.innerHTML = `<div class="empty">No se encontraron anuncios.</div>`;
    renderPagination(0);
    return;
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, finalData.length);
  const pageItems = finalData.slice(startIndex, endIndex);

  pageItems.forEach(item => {
    const card = document.createElement("div");
    card.className = "card clickable-card";
    card.onclick = function () {
      window.location.href = `anuncio.html?id=${item.id}`;
    };

    const soldBadge = item.status === "sold"
      ? `<div class="sold-badge">VENDIDO</div>`
      : "";

    card.innerHTML = `
      <div class="card-accent"></div>
      <div class="card-image-wrap">
        ${soldBadge}
        <img src="${item.image}" alt="${item.title}">
      </div>
      <div class="card-content">
        <h3>${item.title}</h3>
        <p class="price">$${item.price.toLocaleString()} MXN</p>
        <p>${item.location}</p>
        <p>${item.condition}</p>
      </div>
    `;

    listingsGrid.appendChild(card);
  });

  renderPagination(finalData.length);
}

function filterListings() {
  const searchText = searchInput ? searchInput.value.toLowerCase().trim() : "";
  const selectedCategory = categoryFilter ? categoryFilter.value : "";
  const selectedState = stateFilter ? stateFilter.value : "";

  const filtered = listings.filter(item => {
    const searchableText = `
      ${item.title}
      ${item.category}
      ${item.brand}
      ${item.state}
      ${item.location}
      ${item.condition}
      ${item.description}
    `.toLowerCase();

    return (
      (searchText === "" || searchableText.includes(searchText)) &&
      (selectedCategory === "" || item.category === selectedCategory) &&
      (selectedState === "" || item.state === selectedState)
    );
  });

  renderListings(filtered);
}

function renderSingleListing() {
  if (!singleListing) return;

  const params = new URLSearchParams(window.location.search);
  const requestedId = params.get("id");
  const item = listings.find(listing => listing.id === requestedId);

  if (!item) {
    singleListing.innerHTML = `<div class="empty">No se encontró este anuncio.</div>`;
    return;
  }

  const soldText = item.status === "sold"
    ? `<div class="sold-banner">VENDIDO</div>`
    : "";

  const galleryImages = item.gallery && item.gallery.length > 0 ? item.gallery : [item.image];

  singleListing.innerHTML = `
    <div class="card single-card">
      ${soldText}

      <div class="listing-gallery">
        <img class="main-listing-image" src="${item.image}" alt="${item.title}" data-current-image="${item.image}">

        <div class="thumbnail-row">
          ${galleryImages.map((img, index) => `
            <button class="thumbnail-btn ${index === 0 ? "active" : ""}" type="button" data-image="${img}">
              <img src="${img}" alt="${item.title} foto ${index + 1}" onerror="this.closest('.thumbnail-btn').remove()">
            </button>
          `).join("")}
        </div>
      </div>

      <div class="card-content">
        <h1>${item.title}</h1>
        <p class="price">$${item.price.toLocaleString()} MXN</p>

        <p><strong>Ubicación:</strong> ${item.location}</p>
        <p><strong>Categoría:</strong> ${item.category}</p>
        <p><strong>Marca:</strong> ${item.brand}</p>
        <p><strong>Condición:</strong> ${item.condition}</p>

        <br>

        <p>${item.description}</p>

        <br>

        <a href="${item.facebook}" target="_blank">Contactar: ${item.contact_name || "Vendedor"}</a>
      </div>
    </div>
  `;

  const mainImage = singleListing.querySelector(".main-listing-image");

  function getVisibleGalleryImages() {
    return Array.from(singleListing.querySelectorAll(".thumbnail-btn"))
      .map(button => button.dataset.image);
  }

  singleListing.querySelectorAll(".thumbnail-btn").forEach(button => {
    button.addEventListener("click", function () {
      const newImage = button.dataset.image;

      mainImage.src = newImage;
      mainImage.dataset.currentImage = newImage;

      singleListing.querySelectorAll(".thumbnail-btn").forEach(btn => {
        btn.classList.remove("active");
      });

      button.classList.add("active");
    });
  });

  mainImage.addEventListener("click", function () {
    const visibleImages = getVisibleGalleryImages();
    const currentImage = mainImage.dataset.currentImage || item.image;
    const currentIndex = Math.max(0, visibleImages.indexOf(currentImage));

    openImageModal(visibleImages, currentIndex);
  });
}

let searchTimer;

if (searchInput) {
  searchInput.addEventListener("input", function () {
    clearTimeout(searchTimer);
    currentPage = 1;
    searchTimer = setTimeout(filterListings, 250);
  });

  searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      currentPage = 1;
      filterListings();
    }
  });
}

if (categoryFilter) {
  categoryFilter.addEventListener("change", function () {
    currentPage = 1;
    filterListings();
  });
}

if (stateFilter) {
  stateFilter.addEventListener("change", function () {
    currentPage = 1;
    filterListings();
  });
}

if (sortFilter) {
  sortFilter.addEventListener("change", function () {
    currentPage = 1;
    filterListings();
  });
}

initializeApp();
