
document.addEventListener("DOMContentLoaded", () => {
    const year = new Date().getFullYear();
    document.getElementById("year").textContent = year;
    document.getElementById("last-modified").textContent = document.lastModified;

    // Fetch country data for Nepal
    fetch("https://restcountries.com/v3.1/name/nepal")
        .then(response => response.json())
        .then(data => {
            const country = data[0];
            document.getElementById("area").textContent = country.area + " km²";
            document.getElementById("population").textContent = country.population.toLocaleString();
            document.getElementById("capital").textContent = country.capital[0];
            document.getElementById("language").textContent = Object.values(country.languages).join(", ");
            document.getElementById("currency").textContent = Object.values(country.currencies)[0].name;
            document.getElementById("timezone").textContent = country.timezones[0];
            document.getElementById("calling-code").textContent = "+977";
            document.getElementById("tld").textContent = country.tld[0];
        })
        .catch(error => console.error("Error fetching country data:", error));

    // Fetch weather data for Kathmandu, Nepal
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Kathmandu&units=metric&appid=unp8mcbcm44z6q6fiiw5ycebw29bf10v15j0nwul")
        .then(response => response.json())
        .then(data => {
            const temp = data.main.temp;
            const speed = data.wind.speed;
            const condition = data.weather[0].description;
            document.getElementById("temperature").textContent = temp + " °C";
            document.getElementById("windspeed").textContent = speed + " km/h";
            document.getElementById("condition").textContent = condition;

            function calculateWindChill(temp, speed) {
                if (temp <= 10 && speed > 4.8) {
                    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(2) + " °C";
                } else {
                    return "N/A";
                }
            }

            const windChill = calculateWindChill(temp, speed);
            document.getElementById("windchill").textContent = windChill;
        })
        .catch(error => console.error("Error fetching weather data:", error));
});
