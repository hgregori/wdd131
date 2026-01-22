const today = new Date();

document.querySelector('#currentYear').textContent = today.getFullYear();

document.querySelector('#lastModified').textContent = `Last Modified: ${document.lastModified}`;

let windChillValue = 0
let windValue = 6
let conditionsValue = "Dry"
let temperatureValue = 20

if (temperatureValue <= 10 && windValue > 4.8){
    windChillValue = 13.12 + 0.6215 * temperatureValue - 11.37 * windValue**0.16 + 0.3965 * temperatureValue * windValue**0.16
} else {
    windChillValue = "N/A"
}

document.querySelector("#windChill").textContent = `${windChillValue} °C`
document.querySelector("#wind").textContent = `${windValue} Km/h`
document.querySelector("#temperature").textContent = `${temperatureValue} °C`
document.querySelector("#conditions").textContent = conditionsValue