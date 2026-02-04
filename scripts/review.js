
const today = new Date();

document.querySelector('#currentYear').textContent = today.getFullYear();

document.querySelector('#lastModified').textContent = `Last Modified: ${document.lastModified}`;

let reviewCount = localStorage.getItem("reviewCount");

const submitted = sessionStorage.getItem("submitted");

if (submitted === "true") {
  let reviewCount = localStorage.getItem("reviewCount") || 0;
  reviewCount = Number(reviewCount) + 1;
  localStorage.setItem("reviewCount", reviewCount);

  sessionStorage.removeItem("submitted");
}

document.querySelector("#reviewCount").textContent =
  localStorage.getItem("reviewCount");