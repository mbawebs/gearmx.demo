const listings = [
  {
    title: "Charvel Fusion Special MIJ 1990",
    category: "Guitarras",
    brand: "Charvel",
    price: 22000,
    state: "Nuevo León",
    location: "Monterrey, Nuevo León",
    condition: "Usada",
    image: "https://picsum.photos/600/400?1"
  },
  {
    title: "Ibanez RG550 Genesis",
    category: "Guitarras",
    brand: "Ibanez",
    price: 18500,
    state: "Jalisco",
    location: "Guadalajara, Jalisco",
    condition: "Usada",
    image: "https://picsum.photos/600/400?2"
  },
  {
    title: "Marshall JCM2000",
    category: "Amplificadores",
    brand: "Marshall",
    price: 16000,
    state: "CDMX",
    location: "CDMX",
    condition: "Usado",
    image: "https://picsum.photos/600/400?3"
  },
  {
    title: "Boss SD-1 Super OverDrive",
    category: "Pedales",
    brand: "Boss",
    price: 1200,
    state: "Coahuila",
    location: "Saltillo, Coahuila",
    condition: "Usado",
    image: "https://picsum.photos/600/400?4"
  },
  {
    title: "Jackson Dinky DK2M",
    category: "Guitarras",
    brand: "Jackson",
    price: 14500,
    state: "Estado de México",
    location: "Toluca, Estado de México",
    condition: "Usada",
    image: "https://picsum.photos/600/400?5"
  },
  {
    title: "ESP LTD EC-1000",
    category: "Guitarras",
    brand: "ESP",
    price: 17500,
    state: "Querétaro",
    location: "Querétaro, Querétaro",
    condition: "Usada",
    image: "https://picsum.photos/600/400?6"
  }
];

const listingsGrid = document.getElementById("listingsGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const stateFilter = document.getElementById("stateFilter");
const resultsCount = document.getElementById("resultsCount");

function renderListings(data) {
  listingsGrid.innerHTML = "";

  resultsCount.textContent =
    data.length === 1
      ? "1 anuncio encontrado"
      : `${data.length} anuncios encontrados`;

  if (data.length === 0) {
    listingsGrid.innerHTML = `
      <div class="empty">
        No se encontraron anuncios.
      </div>
    `;
    return;
  }

  data.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}">

      <div class="card-content">
        <h3>${item.title}</h3>

        <p class="price">$${item.price.toLocaleString()} MXN</p>

        <p>${item.location}</p>

        <p>${item.condition}</p>

        <a href="#">Ver anuncio</a>
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

let searchTimer;

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

categoryFilter.addEventListener("change", filterListings);
stateFilter.addEventListener("change", filterListings);

renderListings(listings);
