
// Create a Date object for today
const today = new Date();

// Display the current year in the footer
document.querySelector('#currentYear').textContent = today.getFullYear();

// Display the last modified date of the document
document.querySelector('#lastModified').textContent = `Last Modified: ${document.lastModified}`;


