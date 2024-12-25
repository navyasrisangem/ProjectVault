document.addEventListener("DOMContentLoaded", () => {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=";
    const frontPage = document.getElementById("frontPage");

    const section = document.querySelector("section");
    const footer = document.querySelector("footer");
    let buttonClick = document.getElementById("buttonClick");
    const errorMsg = document.querySelector("#errorMsg");
    const searchInput = document.getElementById("searchInput");
    errorMsg.classList.add("d-none");

    buttonClick.addEventListener("click", getWeather);
    searchInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            getWeather();
        }
    })
    function getWeather() {
        frontPage.classList.add("d-none");
        const cityName = document.getElementById("cityName");
        const temperature = document.getElementById("temperature");
        const humidity = document.getElementById("humidity");
        const wind = document.getElementById("wind");

        let val = searchInput.value.trim();
        if (val === "") {
            errorMsg.classList.remove("d-none");
            section.classList.add("d-none");
            footer.classList.add("d-none");
            return;
        }

        let newurl = `${url}${val}&appid=bc464ef9370066684fba722fe0486755&units=metric`;
        fetch(newurl)
            .then((response) => response.json())
            .then(data => {
                if (data.cod !== 200) {
                    errorMsg.classList.remove("d-none");
                    section.classList.add("d-none");
                    footer.classList.add("d-none");
                } else {
                    const temp = data.main.temp;
                    temperature.innerHTML = `${temp}°C`;
                    humidity.innerHTML = `${data.main.humidity}%`;
                    wind.innerHTML = `${data.wind.speed}m/s`;
                    cityName.innerHTML = `${data.name}`;

                    updateImage(temp);

                    errorMsg.classList.add("d-none");
                    section.classList.remove("d-none");
                    footer.classList.remove("d-none");
                }

            })
        function updateImage(temp) {
            let sectionImg = document.getElementById("sectionImg");
            if (temp <= 5) {
                sectionImg.src = "assets/rainy.png";
            } else if (temp > 5 && temp <= 15) {
                sectionImg.src = "assets/cloudy.png";
            } else if (temp > 15 && temp <= 25) {
                sectionImg.src = "assets/moderate.png";
            } else {
                sectionImg.src = "assets/sunny.png";
            }
        }
    }
})




