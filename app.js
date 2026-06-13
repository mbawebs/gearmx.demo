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
  }
];

const listingsGrid = document.getElementById("listingsGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const stateFilter = document.getElementById("stateFilter");
const searchBtn = document.getElementById("searchBtn");

function renderListings(data) {
  listingsGrid.innerHTML = "";

  if (data.length === 0) {
    listingsGrid.innerHTML = `<div class="empty">No se encontraron anuncios.</div>`;
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
  const searchText = searchInput.value.trim().toLowerCase();
  const selectedCategory = categoryFilter.value;
  const selectedState = stateFilter.value;

  const filtered = listings.filter(item => {
    const text = `
      ${item.title}
      ${item.brand}
      ${item.category}
      ${item.location}
      ${item.state}
      ${item.condition}
    `.toLowerCase();

    const matchesSearch = searchText === "" || text.includes(searchText);
    const matchesCategory = selectedCategory === "" || item.category === selectedCategory;
    const matchesState = selectedState === "" || item.state === selectedState;

    return matchesSearch && matchesCategory && matchesState;
  });

  renderListings(filtered);
}

searchBtn.addEventListener("click", filterListings);

searchInput.addEventListener("input", filterListings);

searchInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    filterListings();
  }
});

categoryFilter.addEventListener("change", filterListings);
stateFilter.addEventListener("change", filterListings);

renderListings(listings);
console.log("BUSCADOR NUEVO CARGADO");
