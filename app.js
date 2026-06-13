const listings = [
  {
    title: "Charvel Fusion Special MIJ 1990",
    category: "Guitarras",
    brand: "Charvel",
    price: 22000,
    state: "Nuevo León",
    location: "Monterrey, Nuevo León",
    condition: "Demo / No disponible",
    image: "https://picsum.photos/600/400?1",
    description: "Anuncio demo para probar cómo se vería una guitarra publicada en Gear México.",
    facebook: "https://facebook.com",
    marketplace: "https://facebook.com/marketplace"
  },
  {
    title: "Ibanez RG550 Genesis",
    category: "Guitarras",
    brand: "Ibanez",
    price: 18500,
    state: "Jalisco",
    location: "Guadalajara, Jalisco",
    condition: "Demo / No disponible",
    image: "https://picsum.photos/600/400?2",
    description: "Anuncio demo para probar fotos, descripción y contacto.",
    facebook: "https://facebook.com",
    marketplace: "https://facebook.com/marketplace"
  },
  {
    title: "Marshall JCM2000",
    category: "Amplificadores",
    brand: "Marshall",
    price: 16000,
    state: "CDMX",
    location: "CDMX",
    condition: "Demo / No disponible",
    image: "https://picsum.photos/600/400?3",
    description: "Anuncio demo de amplificador.",
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
    image: "https://picsum.photos/600/400?4",
    description: "Anuncio demo de pedal.",
    facebook: "https://facebook.com",
    marketplace: "https://facebook.com/marketplace"
  }
];

const listingsGrid = document.getElementById("listingsGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const stateFilter = document.getElementById("stateFilter");
const resultsCount = document.getElementById("resultsCount");
const singleListing = document.getElementById("singleListing");

function renderListings(data) {
  if (!listingsGrid) return;

  listingsGrid.innerHTML = "";

  if (resultsCount) {
    resultsCount.textContent =
      data.length === 1
        ? "1 anuncio encontrado"
        : `${data.length} anuncios encontrados`;
  }

  if (data.length === 0) {
    listingsGrid.innerHTML = `
      <div class="empty">No se encontraron anuncios.</div>
    `;
    return;
  }

  data.forEach(item => {
    const originalIndex = listings.indexOf(item);

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}">

      <div class="card-content">
        <h3>${item.title}</h3>
        <p class="price">$${item.price.toLocaleString()} MXN</p>
        <p>${item.location}</p>
        <p>${item.condition}</p>

        <a href="anuncio.html?id=${originalIndex}">
          Ver anuncio
        </a>
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
    `.toLowerCase();

    const matchesSearch =
      searchText === "" || searchableText.includes(searchText);

    const matchesCategory =
      selectedCategory === "" || item.category === selectedCategory;

    const matchesState =
      selectedState === "" || item.state === selectedState;

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
    singleListing.innerHTML = `
      <div class="empty">No se encontró este anuncio.</div>
    `;
    return;
  }

  singleListing.innerHTML = `
    <div class="card single-card">
      <img src="${item.image}" alt="${item.title}">

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

        <a href="${item.facebook}" target="_blank">
          Contactar en Facebook
        </a>

        <a href="${item.marketplace}" target="_blank">
          Ver publicación original
        </a>
      </div>
    </div>
  `;
}

let searchTimer;

if (searchInput) {
  searchInput.addEventListener("input", function () {
    clearTimeout(searchTimer);

    searchTimer = setTimeout(function () {
      filterListings();
    }, 250);
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

renderListings(listings);
renderSingleListing();
