const listings = [
  {
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
    image: "images/ibanez-rg550-green.png",
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
    image: "images/jackson-soloist-blue.png",
    description: "Jackson Soloist demo con acabado azul metálico, estilo metal moderno.",
    facebook: "https://facebook.com",
    marketplace: "https://facebook.com/marketplace"
  },
  {
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
    marketplace: "https://facebook.com/marketplace"
  },
  {
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
    marketplace: "https://facebook.com/marketplace"
  },
  {
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
    marketplace: "https://facebook.com/marketplace"
  },
  {
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
    marketplace: "https://facebook.com/marketplace"
  },
  {
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
    marketplace: "https://facebook.com/marketplace"
  },
  {
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
    marketplace: "https://facebook.com/marketplace"
  },
  {
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
    marketplace: "https://facebook.com/marketplace"
  },
  {
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
    marketplace: "https://facebook.com/marketplace"
  },
  {
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
    marketplace: "https://facebook.com/marketplace"
  },
  {
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
    marketplace: "https://facebook.com/marketplace"
  },
  {
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
    marketplace: "https://facebook.com/marketplace"
  },
  {
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
    marketplace: "https://facebook.com/marketplace"
  },
  {
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
    marketplace: "https://facebook.com/marketplace"
  },
  {
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
    marketplace: "https://facebook.com/marketplace"
  },
  {
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
    marketplace: "https://facebook.com/marketplace"
  },
  {
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
    marketplace: "https://facebook.com/marketplace"
  },
  {
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

  if (sortValue === "az") {
    sorted.sort((a, b) => a.title.localeCompare(b.title));
  }

  if (sortValue === "za") {
    sorted.sort((a, b) => b.title.localeCompare(a.title));
  }

  if (sortValue === "high") {
    sorted.sort((a, b) => b.price - a.price);
  }

  if (sortValue === "low") {
    sorted.sort((a, b) => a.price - b.price);
  }

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

    const card = document.createElement("div");
    card.className = "card clickable-card";
    card.onclick = function () {
      window.location.href = `anuncio.html?id=${originalIndex}`;
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
}

function filterListings() {
  const searchText = searchInput.value.toLowerCase().trim();
  const selectedCategory = categoryFilter.value;
  const selectedState = stateFilter.value;

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

    const matchesSearch = searchText === "" || searchableText.includes(searchText);
    const matchesCategory = selectedCategory === "" || item.category === selectedCategory;
    const matchesState = selectedState === "" || item.state === selectedState;

    return matchesSearch && matchesCategory && matchesState;
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

  singleListing.innerHTML = `
    <div class="card single-card">
      <img class="main-listing-image" src="${item.image}" alt="${item.title}">

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

  const mainImage = singleListing.querySelector(".main-listing-image");

  mainImage.addEventListener("click", function () {
    openImageModal(item.image);
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

if (categoryFilter) {
  categoryFilter.addEventListener("change", filterListings);
}

if (stateFilter) {
  stateFilter.addEventListener("change", filterListings);
}

if (sortFilter) {
  sortFilter.addEventListener("change", filterListings);
}

renderListings(listings);
renderSingleListing();
