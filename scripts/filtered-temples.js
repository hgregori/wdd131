
const today = new Date();

document.querySelector('#currentYear').textContent = today.getFullYear();

document.querySelector('#lastModified').textContent = `Last Modified: ${document.lastModified}`;

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Fortaleza Brazil Temple",
    location: "Fortaleza, Brazil",
    dedicated: "2019, June, 2",
    area: 36000,
    imageUrl:
	"https://churchofjesuschristtemples.org/assets/img/temples/fortaleza-brazil-temple/fortaleza-brazil-temple-5569-main.jpg"
  },
  {
    templeName: "Recife Brazil Temple",
    location: "Recife, Brazil",
    dedicated: "2000, December, 15",
    area: 37200,
    imageUrl:
	"https://churchofjesuschristtemples.org/assets/img/temples/recife-brazil-temple/recife-brazil-temple-36778-main.jpg"
  },
	{
		templeName: "São Paulo Brazil Temple",
		location: "São Paulo, Brazil",
		dedicated: "1978, November, 2",
		area: 59256,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/_temp/017-S%C3%A3o-Paulo-Brazil-Temple.jpg"
	},
];

function renderTemples(list) {
  const container = document.querySelector("#temples");
  if (!container) {
    console.warn("Container #temples not found. Check the HTML id.");
    return;
  }

  container.innerHTML = "";

  list.forEach((t) => {
    const article = document.createElement("article");
    article.className = "temple-card";

    const h2 = document.createElement("h2");
    h2.textContent = t.templeName;

    const figure = document.createElement("figure");

    const img = document.createElement("img");
    img.src = t.imageUrl;
    img.alt = `Image of ${t.templeName} Temple`;
    img.loading = "lazy";

    const figcaption = document.createElement("figcaption");
    figcaption.textContent = t.templeName;

    figure.appendChild(img);
    figure.appendChild(figcaption);

    const locationP = document.createElement("p");
    locationP.innerHTML = `<strong>Location:</strong> ${t.location}`;

    const dedicatedP = document.createElement("p");
    dedicatedP.innerHTML = `<strong>Dedicated:</strong> ${t.dedicated}`;

    const areaP = document.createElement("p");
    areaP.innerHTML = `<strong>Area:</strong> ${t.area.toLocaleString()} sq ft`;

    article.append(h2, figure, locationP, dedicatedP, areaP);
    container.appendChild(article);
  });
}

function parseDedicatedDate(dedicatedStr) {
  const [yearStr, monthStr, dayStr] = dedicatedStr.split(",").map(s => s.trim());
  const year = Number(yearStr);
  const day = Number(dayStr);
  const monthName = monthStr.charAt(0).toUpperCase() + monthStr.slice(1).toLowerCase();
  const date = new Date(`${monthName} ${day}, ${year}`);
  return isNaN(date.getTime()) ? null : date;
}

function setTitle(text) {
  const h1 = document.querySelector("main h1");
  if (h1) h1.textContent = text;
}

function showAll() {
  setTitle("Home");
  renderTemples(temples);
}

function showOld() {
  setTitle("Old (Dedicated < 1950)");
  const filtered = temples.filter(t => {
    const d = parseDedicatedDate(t.dedicated);
    return d && d.getFullYear() < 1950;
  });
  renderTemples(filtered);
}

function showNew() {
  setTitle("New (Dedicated ≥ 2000)");
  const filtered = temples.filter(t => {
    const d = parseDedicatedDate(t.dedicated);
    return d && d.getFullYear() >= 2000;
  });
  renderTemples(filtered);
}

function showLarge() {
  setTitle("Large (Area > 90,000 sq ft)");
  const filtered = temples.filter(t => t.area > 90000);
  renderTemples(filtered);
}

function showSmall() {
  setTitle("Small (Area < 10,000 sq ft)");
  const filtered = temples.filter(t => t.area < 10000);
  renderTemples(filtered);
}

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".navigation a");
  navLinks.forEach(link => {
    link.addEventListener("click", (evt) => {
      evt.preventDefault();
      const label = link.textContent.trim().toLowerCase();

      if (mainnav && mainnav.classList.contains('show')) {
        mainnav.classList.remove('show');
        hambutton && hambutton.classList.remove('show');
      }

      switch (label) {
        case "home":  showAll();  break;
        case "old":   showOld();  break;
        case "new":   showNew();  break;
        case "large": showLarge(); break;
        case "small": showSmall(); break;
        default:      showAll();
      }
    });
  });
  showAll();
});