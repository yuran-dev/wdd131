// --- Array de templos (12 templos) ---
const temples = [
  {
    templeName: "London England Temple",
    location: "Newchapel, Surrey, United Kingdom",
    dedicated: "1958, September, 7",
    area: 42652,
    imageUrl: "https://www.churchofjesuschrist.org/media-library/temples/london-england-temple.jpg"
  },
  {
    templeName: "Tokyo Japan Temple",
    location: "Minato, Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 68381,
    imageUrl: "https://www.churchofjesuschrist.org/media-library/temples/tokyo-japan-temple.jpg"
  },
  {
    templeName: "Boston Massachusetts Temple",
    location: "Boston, Massachusetts, USA",
    dedicated: "2000, October, 1",
    area: 19600,
    imageUrl: "https://www.churchofjesuschrist.org/media-library/temples/boston-massachusetts-temple.jpg"
  },
  {
    templeName: "Brigham City Utah Temple",
    location: "Brigham City, Utah, United States",
    dedicated: "2012, September, 23",
    area: 17300,
    imageUrl: "https://www.churchofjesuschrist.org/media-library/temples/brigham-city-utah-temple.jpg"
  },
  {
    templeName: "Mexico City Mexico Temple",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://www.churchofjesuschrist.org/media-library/temples/mexico-city-mexico-temple.jpg"
  },
  {
    templeName: "Accra Ghana Temple",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl: "https://www.churchofjesuschrist.org/media-library/temples/accra-ghana-temple.jpg"
  },
  {
    templeName: "Payson Utah Temple",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://www.churchofjesuschrist.org/media-library/temples/payson-utah-temple.jpg"
  },
  {
    templeName: "Lima Peru Temple",
    location: "Lima, Peru",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://www.churchofjesuschrist.org/media-library/temples/lima-peru-temple.jpg"
  },
  {
    templeName: "Washington D.C. Temple",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://www.churchofjesuschrist.org/media-library/temples/washington-dc-temple.jpg"
  },
  {
    templeName: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41000,
    imageUrl: "https://www.churchofjesuschrist.org/media-library/temples/rome-italy-temple.jpg"
  },
  {
    templeName: "Sydney Australia Temple",
    location: "Sydney, New South Wales, Australia",
    dedicated: "1984, September, 20",
    area: 14381,
    imageUrl: "https://www.churchofjesuschrist.org/media-library/temples/sydney-australia-temple.jpg"
  },
  {
    templeName: "Johannesburg South Africa Temple",
    location: "Johannesburg, Gauteng, South Africa",
    dedicated: "1985, August, 24",
    area: 21600,
    imageUrl: "https://www.churchofjesuschrist.org/media-library/temples/johannesburg-south-africa-temple.jpg"
  }
];


// --- Seleção do container ---
const container = document.getElementById("temples");

// --- Função para criar os cards ---
function displayTemples(list) {
    container.innerHTML = "";

    list.forEach(temple => {
        const card = document.createElement("figure");
        card.classList.add("temple-item");

        card.innerHTML = `
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
            <figcaption>
                <h3>${temple.templeName}</h3>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
            </figcaption>
        `;

        container.appendChild(card);
    });
}

// --- Inicial display ---
displayTemples(temples);

// --- Filtros pelo menu ---
document.querySelectorAll(".nav-list a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const filter = e.target.textContent.toLowerCase();
        let filtered = temples;

        if (filter === "old") {
            filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
        } else if (filter === "new") {
            filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
        } else if (filter === "large") {
            filtered = temples.filter(t => t.area > 90000);
        } else if (filter === "small") {
            filtered = temples.filter(t => t.area < 10000);
        }

        displayTemples(filtered);
    });
});

// --- Footer dinâmico ---
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

// --- Hamburger menu ---
const hamburger = document.getElementById('hamburger');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
    navList.classList.toggle('open');
    hamburger.textContent = navList.classList.contains('open') ? '✖' : '☰';
});
