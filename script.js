
        const apiKey = "ed9e89c80c54ac368dd862519217798a";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const clearBtn = document.querySelector(".clear");
        const weatherIcon = document.querySelector(".weather-icon");

        async function checkWeather(city) {
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

            // if (response.status === 404) {
            //     document.querySelector(".error").style.display = "block";
            //     document.querySelector(".weather").style.display = "none";
            // } else {
                 const data = await response.json();
                if (data.cod === "404") {
                alert("City not found");
                searchBox.value="";
                return;
            }

                document.querySelector(".city").innerHTML = data.name;
                document.querySelector(".temp").innerHTML = data.main.temp + " °C";
                document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
                document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

                switch (data.weather[0].main) {
                    case "Clear":
                        weatherIcon.src = "images/clear.png";
                        break;
                    case "Clouds":
                        weatherIcon.src = "images/clouds.png";
                        break;
                    case "Rain":
                        weatherIcon.src = "images/rain.png";
                        break;
                    case "Mist":
                        weatherIcon.src = "images/mist.png";
                        break;
                    case "Drizzle":
                        weatherIcon.src = "images/drizzle.png";
                        break;
                    case "Snow":
                        weatherIcon.src = "images/snow.png";
                        break;
                    default:
                        weatherIcon.src = "images/clouds.png";
                        break;
                }

                document.querySelector(".weather").style.display = "block";
                document.querySelector(".error").style.display = "none";
            }
        

        searchBtn.addEventListener("click", () => {
            checkWeather(searchBox.value);
        });

        searchBox.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                checkWeather(searchBox.value);
            }
        });

        clearBtn.addEventListener("click", () => {
            searchBox.value = ""; // Clear the input field
        });
   