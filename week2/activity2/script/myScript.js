const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}

let i = 0;
while ( i < studentReport.length) {
    if (studentReport[i] < LIMIT) { 
        console.log(studentReport[i]);
    }
i++
}

studentReport.forEach(function(score) {
    if (score < LIMIT) {
        console.log(score);
    }
})

const numberOfDays = 6; // variable days in future setting
const options = { weekday: "long" }; // Intl.DateTimeFormat vs. short, etc.

// BEGIN
const today = new Date();
// TODAY test output
let todaystring = new Intl.DateTimeFormat("en-US", options).format(today);
document.getElementById("today").innerHTML = `Today is <strong>${todaystring}</strong>`;

// next n days
for (let i = 1; i <= numberOfDays; i++) {
	const nextday = new Date();
	nextday.setDate(today.getDate() + i);
	let nextdaystring = new Intl.DateTimeFormat("en-US", options).format(nextday);
	const item = document.createElement("li"); // list item
	item.textContent = nextdaystring;
	document.querySelector("ul").appendChild(item);
}
