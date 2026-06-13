const listings = [
  {
    title: "Charvel Fusion Special MIJ 1990",
    category: "Guitarras",
    brand: "Charvel",
    price: 22000,
    location: "Monterrey, Nuevo León",
    condition: "Usada",
    image: "https://picsum.photos/600/400?1"
  },
  {
    title: "Ibanez RG550 Genesis",
    category: "Guitarras",
    brand: "Ibanez",
    price: 18500,
    location: "Guadalajara, Jalisco",
    condition: "Usada",
    image: "https://picsum.photos/600/400?2"
  },
  {
    title: "Marshall JCM2000",
    category: "Amplificadores",
    brand: "Marshall",
    price: 16000,
    location: "CDMX",
    condition: "Usado",
    image: "https://picsum.photos/600/400?3"
  },
  {
    title: "Boss SD-1 Super OverDrive",
    category: "Pedales",
    brand: "Boss",
    price: 1200,
    location: "Saltillo, Coahuila",
    condition: "Usado",
    image: "https://picsum.photos/600/400?4"
  }
];

const listingsGrid = document.getElementById("listingsGrid");

function renderListings(data) {

  listingsGrid.innerHTML = "";

  data.forEach(item => {

    listingsGrid.innerHTML += `
      <div class="card">

        <img src="${item.image}" alt="${item.title}">

        <div class="card-content">

          <h3>${item.title}</h3>

          <p class="price">
            $${item.price.toLocaleString()} MXN
          </p>

          <p>${item.location}</p>

          <p>${item.condition}</p>

          <a href="#">
            Ver anuncio
          </a>

        </div>

      </div>
    `;
  });

}

renderListings(listings);
