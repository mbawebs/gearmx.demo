const listings = [
  {
    title: "Charvel Fusion Special MIJ 1990",
    category: "Guitarras",
    brand: "Charvel",
    price: 22000,
    state: "Nuevo León",
    location: "Monterrey, Nuevo León",
    condition: "Demo / No disponible",
    images: [
      "images/charvel-fusion-red-1.png",
      "images/charvel-fusion-red-2.png",
      "images/charvel-fusion-red-3.png",
      "images/charvel-fusion-red-4.png"
    ],
    description: "Charvel Fusion estilo noventero, configuración shred, tremolo tipo Floyd y look rojo clásico. Anuncio demo para probar la plataforma.",
    facebook: "https://facebook.com",
    marketplace: "https://facebook.com/marketplace"
  },
  {
    title: "Ibanez RG550 Verde Neon",
    category: "Guitarras",
    brand: "Ibanez",
    price: 18500,
    state: "Jalisco",
    location: "Guadalajara, Jalisco",
    condition: "Demo / No disponible",
    images: [
      "images/ibanez-rg550-green-1.png",
      "images/ibanez-rg550-green-2.png",
      "images/ibanez-rg550-green-3.png"
    ],
    description: "Ibanez RG estilo shred, color verde llamativo, perfecta para probar cómo se vería una publicación de guitarra.",
    facebook: "https://facebook.com",
    marketplace: "https://facebook.com/marketplace"
  },
  {
    title: "Jackson Soloist Azul Metálica",
    category: "Guitarras",
    brand: "Jackson",
    price: 19500,
    state: "CDMX",
    location: "CDMX",
    condition: "Demo / No disponible",
    images: ["images/jackson-soloist-blue-1.png"],
    description: "Jackson Soloist demo con acabado azul metálico, estilo metal moderno.",
    facebook: "https://facebook.com",
    marketplace: "https://facebook.com/marketplace"
  }
];

const listingsGrid = document.getElementById("listingsGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const stateFilter = document.getElementById("stateFilter");
const sortFilter = document.getElementById("sortFilter");
const resultsCount = document.getElementById("resultsCount");
const singleListing = document.getElementById("singleListing");

function getCoverImage(item) {
  return item.images && item.images.length > 0 ? item.images[0] : item.image;
}

function openImageModal(src) {
  let modal = document.getElementById("imageModal");

  if (!modal) {
    modal = document.createElement("div");
    modal.id = "imageModal";
    modal.className = "image-modal";
    modal.innerHTML = `
      <button class="close-modal" type="button">×</button>
      <img src="" alt="Imagen ampliada">
    `;
    document.body.appendChild(modal);

    modal.querySelector(".close-modal").addEventListener("click", function () {
      modal.classList.remove("open");
    });

    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.classList.remove("open");
      }
    });
  }

  modal.querySelector("img").src = src;
  modal.classList.add("open");
}

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
    return;
  }

  finalData.forEach(item => {
    const originalIndex = listings.indexOf(item);
    const coverImage = getCoverImage(item);

    const card = document.createElement("div");
    card.className = "card clickable-card";
    card.onclick = function () {
      window.location.href = `anuncio.html?id=${originalIndex}`;
    };

    card.innerHTML = `
      <div class="card-accent"></div>
      <img src="${coverImage}" alt="${item.title}">
      <div class="card-content">
        <h3>${item.title}</h3>
        <p class="price">$${item.price.toLocaleString()} MXN</p>
        <p>${item.location}</p>
        <p>${item.condition}</p>
      </div>
    `;

    listingsGrid.appendChild(card);
  });
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
  const id = parseInt(params.get("id"));
  const item = listings[id];

  if (!item) {
    singleListing.innerHTML = `<div class="empty">No se encontró este anuncio.</div>`;
    return;
  }

  const galleryImages = item.images && item.images.length > 0 ? item.images : [item.image];
  const mainImage = galleryImages[0];

  singleListing.innerHTML = `
    <div class="card single-card">
      <div class="listing-gallery">
        <img class="main-listing-image" src="${mainImage}" alt="${item.title}">

        <div class="thumbnail-row">
          ${galleryImages.map((img, index) => `
            <button class="thumbnail-btn ${index === 0 ? "active" : ""}" type="button" data-image="${img}">
              <img src="${img}" alt="${item.title} foto ${index + 1}">
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

        <a href="${item.facebook}" target="_blank">Contactar en Facebook</a>
        <a href="${item.marketplace}" target="_blank">Ver publicación original</a>
      </div>
    </div>
  `;

  const mainImageElement = singleListing.querySelector(".main-listing-image");
  const thumbnails = singleListing.querySelectorAll(".thumbnail-btn");

  thumbnails.forEach(button => {
    button.addEventListener("click", function () {
      const newImage = button.dataset.image;

      mainImageElement.src = newImage;

      thumbnails.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });

  mainImageElement.addEventListener("click", function () {
    openImageModal(mainImageElement.src);
  });
}

let searchTimer;

if (searchInput) {
  searchInput.addEventListener("input", function () {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(filterListings, 250);
  });

  searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      filterListings();
    }
  });
}

if (categoryFilter) categoryFilter.addEventListener("change", filterListings);
if (stateFilter) stateFilter.addEventListener("change", filterListings);
if (sortFilter) sortFilter.addEventListener("change", filterListings);

renderListings(listings);
renderSingleListing();
