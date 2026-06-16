// Demo listings (fallback)
const demoListings = [
  {
    id: "demo-0",
    title: "Charvel Fusion Special MIJ 1990",
    category: "Guitarras",
    brand: "Charvel",
    price: 22000,
    state: "Nuevo León",
    location: "Monterrey, Nuevo León",
    condition: "Demo / No disponible",
    image: "images/charvel-fusion-red.png",
    description: "Charvel Fusion estilo noventero, configuración shred, tremolo tipo Floyd y look rojo clásico. Anuncio demo para probar la plataforma.",
    facebook: "https://facebook.com",
    marketplace: "https://facebook.com/marketplace",
    gallery: []
  },
  {
    id: "demo-1",
    title: "Ibanez RG550 Verde Neon",
    category: "Guitarras",
    brand: "Ibanez",
    price: 18500,
    state: "Jalisco",
    location: "Guadalajara, Jalisco",
    condition: "Demo / No disponible",
    image: "images/ibanez-rg550-green.png",
    description: "Ibanez RG estilo shred, color verde llamativo, perfecta para probar cómo se vería una publicación de guitarra.",
    facebook: "https://facebook.com",
    marketplace: "https://facebook.com/marketplace",
    gallery: []
  },
  {
    id: "demo-2",
    title: "Jackson Soloist Azul Metálica",
    category: "Guitarras",
    brand: "Jackson",
    price: 19500,
    state: "CDMX",
    location: "CDMX",
    condition: "Demo / No disponible",
    image: "images/jackson-soloist-blue.png",
    description: "Jackson Soloist demo con acabado azul metálico, estilo metal moderno.",
    facebook: "https://facebook.com",
    marketplace: "https://facebook.com/marketplace",
    gallery: []
  },
  {
    id: "demo-3",
    title: "ESP LTD MH Morada",
    category: "Guitarras",
    brand: "ESP",
    price: 17500,
    state: "Querétaro",
    location: "Querétaro, Querétaro",
    condition: "Demo / No disponible",
    image: "images/esp-mh-purple.png",
    description: "ESP LTD estilo superstrat, acabado morado. Anuncio demo para probar imagen, precio y contacto.",
    facebook: "https://facebook.com",
    marketplace: "https://facebook.com/marketplace",
    gallery: []
  },
  {
    id: "demo-4",
    title: "Charvel San Dimas Bubblegum Pink",
    category: "Guitarras",
    brand: "Charvel",
    price: 24000,
    state: "Nuevo León",
    location: "San Pedro Garza García, Nuevo León",
    condition: "Demo / No disponible",
    image: "images/charvel-san-dimas-pink.png",
    description: "Charvel San Dimas estilo ochentero en rosa bubblegum. Demo visual para Gear México.",
    facebook: "https://facebook.com",
    marketplace: "https://facebook.com/marketplace",
    gallery: []
  },
  {
    id: "demo-5",
    title: "Marshall JCM2000 DSL",
    category: "Amplificadores",
    brand: "Marshall",
    price: 16000,
    state: "CDMX",
    location: "CDMX",
    condition: "Demo / No disponible",
    image: "images/marshall-jcm2000.png",
    description: "Cabezal Marshall JCM2000 demo. Ideal para probar publicaciones de amplificadores.",
    facebook: "https://facebook.com",
    marketplace: "https://facebook.com/marketplace",
    gallery: []
  },
  {
    id: "demo-6",
    title: "Mesa Boogie Dual Rectifier",
    category: "Amplificadores",
    brand: "Mesa Boogie",
    price: 42000,
    state: "Baja California",
    location: "Tijuana, Baja California",
    condition: "Demo / No disponible",
    image: "images/mesa-dual-rectifier.png",
    description: "Dual Rectifier demo para sonidos high gain. Publicación de prueba.",
    facebook: "https://facebook.com",
    marketplace: "https://facebook.com/marketplace",
    gallery: []
  },
  {
    id: "demo-7",
    title: "EVH 5150 III",
    category: "Amplificadores",
    brand: "EVH",
    price: 28500,
    state: "Sonora",
    location: "Hermosillo, Sonora",
    condition: "Demo / No disponible",
    image: "images/5150-iii.png",
    description: "EVH 5150 III demo para sección de amplificadores high gain.",
    facebook: "https://facebook.com",
    marketplace: "https://facebook.com/marketplace",
    gallery: []
  },
  {
    id: "demo-8",
    title: "Orange Rockerverb",
    category: "Amplificadores",
    brand: "Orange",
    price: 35000,
    state: "Puebla",
    location: "Puebla, Puebla",
    condition: "Demo / No disponible",
    image: "images/orange-rockerverb.png",
    description: "Orange Rockerverb demo. Prueba de publicación para amplificador boutique.",
    facebook: "https://facebook.com",
    marketplace: "https://facebook.com/marketplace",
    gallery: []
  },
  {
    id: "demo-9",
    title: "Boss SD-1 Super OverDrive",
    category: "Pedales",
    brand: "Boss",
    price: 1200,
    state: "Coahuila",
    location: "Saltillo, Coahuila",
    condition: "Demo / No disponible",
    image: "images/boss-sd1.png",
    description: "Boss SD-1 demo para probar publicaciones de pedales.",
    facebook: "https://facebook.com",
    marketplace: "https://facebook.com/marketplace",
    gallery: []
  },
  {
    id: "demo-10",
    title: "Ibanez Tube Screamer",
    category: "Pedales",
    brand: "Ibanez",
    price: 2300,
    state: "Guanajuato",
    location: "León, Guanajuato",
    condition: "Demo / No disponible",
    image: "images/tube-screamer.png",
    description: "Tube Screamer demo, pedal clásico para overdrive.",
    facebook: "https://facebook.com",
    marketplace: "https://facebook.com/marketplace",
    gallery: []
  },
  {
    id: "demo-11",
    title: "Boss Chorus Ensemble",
    category: "Pedales",
    brand: "Boss",
    price: 1800,
    state: "Yucatán",
    location: "Mérida, Yucatán",
    condition: "Demo / No disponible",
    image: "images/boss-chorus.png",
    description: "Boss Chorus demo para sección de efectos.",
    facebook: "https://facebook.com",
    marketplace: "https://facebook.com/marketplace",
    gallery: []
  },
  {
    id: "demo-12",
    title: "MXR Phase 90",
    category: "Pedales",
    brand: "MXR",
    price: 1600,
    state: "Veracruz",
    location: "Veracruz, Veracruz",
    condition: "Demo / No disponible",
    image: "images/mxr-phase90.png",
    description: "MXR Phase 90 demo para probar anuncios de pedales compactos.",
    facebook: "https://facebook.com",
    marketplace: "https://facebook.com/marketplace",
    gallery: []
  },
  {
    id: "demo-13",
    title: "ProCo RAT Distortion",
    category: "Pedales",
    brand: "ProCo",
    price: 2100,
    state: "Sinaloa",
    location: "Culiacán, Sinaloa",
    condition: "Demo / No disponible",
    image: "images/proco-rat.png",
    description: "ProCo RAT demo para sonidos distorsionados clásicos.",
    facebook: "https://facebook.com",
    marketplace: "https://facebook.com/marketplace",
    gallery: []
  },
  {
    id: "demo-14",
    title: "Floyd Rose Gold",
    category: "Partes",
    brand: "Floyd Rose",
    price: 4500,
    state: "Nuevo León",
    location: "Monterrey, Nuevo León",
    condition: "Demo / No disponible",
    image: "images/floyd-rose-gold.png",
    description: "Puente estilo Floyd Rose dorado. Demo para probar sección de partes.",
    facebook: "https://facebook.com",
    marketplace: "https://facebook.com/marketplace",
    gallery: []
  },
  {
    id: "demo-15",
    title: "Seymour Duncan JB",
    category: "Partes",
    brand: "Seymour Duncan",
    price: 1900,
    state: "Jalisco",
    location: "Zapopan, Jalisco",
    condition: "Demo / No disponible",
    image: "images/seymour-duncan-jb.png",
    description: "Pickup Seymour Duncan JB demo para categoría de partes.",
    facebook: "https://facebook.com",
    marketplace: "https://facebook.com/marketplace",
    gallery: []
  },
  {
    id: "demo-16",
    title: "DiMarzio Super Distortion",
    category: "Partes",
    brand: "DiMarzio",
    price: 1700,
    state: "CDMX",
    location: "CDMX",
    condition: "Demo / No disponible",
    image: "images/dimarzio-super-distortion.png",
    description: "Pickup DiMarzio Super Distortion demo.",
    facebook: "https://facebook.com",
    marketplace: "https://facebook.com/marketplace",
    gallery: []
  },
  {
    id: "demo-17",
    title: "EVH D-Tuna",
    category: "Partes",
    brand: "EVH",
    price: 950,
    state: "Chihuahua",
    location: "Chihuahua, Chihuahua",
    condition: "Demo / No disponible",
    image: "images/evh-d-tuna.png",
    description: "EVH D-Tuna demo para accesorios y partes.",
    facebook: "https://facebook.com",
    marketplace: "https://facebook.com/marketplace",
    gallery: []
  },
  {
    id: "demo-18",
    title: "Music Man StingRay",
    category: "Bajos",
    brand: "Music Man",
    price: 32000,
    state: "Michoacán",
    location: "Morelia, Michoacán",
    condition: "Demo / No disponible",
    image: "images/musicman-stingray.png",
    description: "Music Man StingRay demo para categoría de bajos.",
    facebook: "https://facebook.com",
    marketplace: "https://facebook.com/marketplace",
    gallery: []
  },
  {
    id: "demo-19",
    title: "Fender Jazz Bass",
    category: "Bajos",
    brand: "Fender",
    price: 26000,
    state: "Tamaulipas",
    location: "Tampico, Tamaulipas",
    condition: "Demo / No disponible",
    image: "images/fender-jazz-bass.png",
    description: "Fender Jazz Bass demo para probar anuncios de bajos.",
    facebook: "https://facebook.com",
    marketplace: "https://facebook.com/marketplace",
    gallery: []
  }
];

// Runtime listings array (will be populated from Supabase or fallback to demo)
let listings = [];

const listingsGrid = document.getElementById("listingsGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const stateFilter = document.getElementById("stateFilter");
const sortFilter = document.getElementById("sortFilter");
const resultsCount = document.getElementById("resultsCount");
const singleListing = document.getElementById("singleListing");

// Pagination variables
let currentPage = 1;
const itemsPerPage = 8;
let filteredListings = [];

let modalGalleryImages = [];
let modalCurrentIndex = 0;
let touchStartX = 0;
let touchEndX = 0;

// Supabase configuration
const SUPABASE_URL = "https://rznofcaveoneeixyulxy.supabase.co";
const SUPABASE_KEY = "sb_publishable_Qdj2WyKAkw-pDOQUwHTCbQ_tNwwWPVC";
let supabaseClient = null;

// Initialize Supabase and load listings
async function initializeApp() {
  try {
    // Load Supabase library dynamically
    if (typeof supabase === 'undefined') {
      console.warn('Supabase library not loaded, using demo listings');
      listings = demoListings;
    } else {
      supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
      await loadListingsFromSupabase();
    }
  } catch (error) {
    console.warn('Error initializing Supabase, falling back to demo listings:', error);
    listings = demoListings;
  }

  // Render initial listings and single listing if needed
  renderListings(listings);
  renderSingleListing();
}

// Load listings from Supabase
async function loadListingsFromSupabase() {
  try {
    if (!supabaseClient) return;

    const { data, error } = await supabaseClient
      .from("listings")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.warn('Supabase fetch error:', error);
      throw error;
    }

    if (!data || data.length === 0) {
      console.warn('No listings found in Supabase, using demo listings');
      listings = demoListings;
      return;
    }

    // Transform Supabase data to app format
    listings = data.map(item => {
      // Collect gallery images from image_1 through image_5
      const galleryImages = [];
      if (item.image_1) galleryImages.push(item.image_1);
      if (item.image_2) galleryImages.push(item.image_2);
      if (item.image_3) galleryImages.push(item.image_3);
      if (item.image_4) galleryImages.push(item.image_4);
      if (item.image_5) galleryImages.push(item.image_5);

      return {
        id: item.id.toString(),
        title: item.title,
        category: item.category,
        brand: item.title.split(' ')[0], // Extract first word as brand approximation
        price: item.price,
        state: item.city ? item.city.split(',').pop().trim() : "Desconocido",
        location: item.city,
        condition: "Disponible",
        image: item.image_1 || "",
        description: item.description,
        facebook: item.contact_link || "",
        marketplace: item.contact_link || "",
        contact_name: item.contact_name,
        gallery: galleryImages
      };
    });

    console.log('Loaded', listings.length, 'listings from Supabase');
  } catch (error) {
    console.warn('Error loading listings from Supabase, falling back to demo:', error);
    listings = demoListings;
  }
}

function getExtraImages(baseImage) {
  const dotIndex = baseImage.lastIndexOf(".");
  const name = baseImage.substring(0, dotIndex);
  const ext = baseImage.substring(dotIndex);

  return [
    baseImage,
    `${name}-1${ext}`,
    `${name}-2${ext}`,
    `${name}-3${ext}`,
    `${name}-4${ext}`
  ];
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
  modalCurrentIndex =
    (modalCurrentIndex - 1 + modalGalleryImages.length) % modalGalleryImages.length;
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

      if (swipeDistance > 60) {
        showPrevModalImage();
      }

      if (swipeDistance < -60) {
        showNextModalImage();
      }
    });
  }

  showModalImage();
  modal.classList.add("open");
}

document.addEventListener("keydown", function (event) {
  const modal = document.getElementById("imageModal");
  if (!modal || !modal.classList.contains("open")) return;

  if (event.key === "ArrowRight") {
    showNextModalImage();
  }

  if (event.key === "ArrowLeft") {
    showPrevModalImage();
  }

  if (event.key === "Escape") {
    modal.classList.remove("open");
  }
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
  // Remove existing pagination if present
  const existingPagination = document.querySelector(".pagination");
  if (existingPagination) {
    existingPagination.remove();
  }

  if (totalItems === 0) return;

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  if (totalPages <= 1) return;

  const paginationDiv = document.createElement("div");
  paginationDiv.className = "pagination";

  // Previous button
  if (currentPage > 1) {
    const prevBtn = document.createElement("button");
    prevBtn.className = "page-btn prev-btn";
    prevBtn.textContent = "← Anterior";
    prevBtn.onclick = () => {
      if (currentPage > 1) {
        currentPage--;
        filterListings();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
    paginationDiv.appendChild(prevBtn);
  }

  // Page numbers
  for (let i = 1; i <= totalPages; i++) {
    const pageBtn = document.createElement("button");
    pageBtn.className = "page-btn number-btn";
    if (i === currentPage) {
      pageBtn.classList.add("active");
      pageBtn.disabled = true;
    }
    pageBtn.textContent = i;
    pageBtn.onclick = () => {
      currentPage = i;
      filterListings();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    paginationDiv.appendChild(pageBtn);
  }

  // Next button
  if (currentPage < totalPages) {
    const nextBtn = document.createElement("button");
    nextBtn.className = "page-btn next-btn";
    nextBtn.textContent = "Siguiente →";
    nextBtn.onclick = () => {
      if (currentPage < totalPages) {
        currentPage++;
        filterListings();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
    paginationDiv.appendChild(nextBtn);
  }

  if (listingsGrid) {
    listingsGrid.parentNode.insertBefore(paginationDiv, listingsGrid.nextSibling);
  }
}

function renderListings(data) {
  if (!listingsGrid) return;

  listingsGrid.innerHTML = "";
  const finalData = sortListings(data);
  filteredListings = finalData;

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

  // Calculate pagination
  const totalPages = Math.ceil(finalData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, finalData.length);
  const pageItems = finalData.slice(startIndex, endIndex);

  // Render items for current page
  pageItems.forEach((item, pageIndex) => {
    const card = document.createElement("div");
    card.className = "card clickable-card";
    card.onclick = function () {
      window.location.href = `anuncio.html?id=${item.id}`;
    };

    card.innerHTML = `
      <div class="card-accent"></div>
      <img src="${item.image}" alt="${item.title}">
      <div class="card-content">
        <h3>${item.title}</h3>
        <p class="price">$${item.price.toLocaleString()} MXN</p>
        <p>${item.location}</p>
        <p>${item.condition}</p>
      </div>
    `;

    listingsGrid.appendChild(card);
  });

  // Render pagination controls
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

  // Use gallery from Supabase or generate from base image
  const galleryImages = item.gallery && item.gallery.length > 0 
    ? item.gallery 
    : getExtraImages(item.image);

  singleListing.innerHTML = `
    <div class="card single-card">
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

        <a href="${item.facebook}" target="_blank">Contactar: ${item.contact_name || 'Vendedor'}</a>
        <a href="${item.marketplace}" target="_blank">Ver publicación original</a>
      </div>
    </div>
  `;

  const mainImage = singleListing.querySelector(".main-listing-image");

  function getVisibleGalleryImages() {
    return Array.from(singleListing.querySelectorAll(".thumbnail-btn"))
      .map(button => button.dataset.image);
  }

  function refreshThumbnailEvents() {
    const thumbnails = singleListing.querySelectorAll(".thumbnail-btn");

    thumbnails.forEach(button => {
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
  }

  refreshThumbnailEvents();

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
    filterListings();
  });
}

// Initialize the app
initializeApp();
