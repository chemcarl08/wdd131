document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("currentyear").textContent = new Date().getFullYear();

    document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;
});

const temperatureC = 8; // °C
const windSpeedKmH = 5; // km/h

function calculateWindChillMetric(temp, speed) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(2);
}

function isWindChillApplicableMetric(temp, speed) {
    return temp <= 10 && speed > 4.8;
}

function displayWindChill() {
    const windChillElement = document.getElementById('windChill');

    if (isWindChillApplicableMetric(temperatureC, windSpeedKmH)) {
        const windChill = calculateWindChillMetric(temperatureC, windSpeedKmH);
        windChillElement.textContent = `Wind Chill: ${windChill} °C`;
    } else {
        windChillElement.textContent = 'Wind Chill: N/A';
    }
}
window.onload = displayWindChill;
