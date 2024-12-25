document.addEventListener("DOMContentLoaded",()=> {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=";
    const frontPage = document.getElementById("frontPage");
    const section = document.querySelector("section");
    const footer = document.querySelector("footer");
    frontPage.classList.remove("d-none");
    section.classList.add("d-none");
    footer.classList.add("d-none");
    let buttonClick = document.getElementById("buttonClick");
    
    buttonClick.addEventListener("click", () =>{
        frontPage.classList.add("d-none");
        const cityName = document.getElementById("cityName");
        const searchInput = document.getElementById("searchInput");
        const temperature = document.getElementById("temperature");
        const humidity = document.getElementById("humidity");
        const wind = document.getElementById("wind");
        
        cityName.innerHTML = searchInput.value.trim();
        
        let newurl = `${url}${searchInput.value.trim()}&appid=bc464ef9370066684fba722fe0486755&units=metric`;
        fetch(newurl)
        .then((response) => response.json())
        .then(data => {
        console.log(data);
        temperature.innerHTML = data.main.temp + "°C";
        humidity.innerHTML = data.main.humidity + "%";
        wind.innerHTML = data.wind.speed + "m/s";
        })
        section.classList.remove("d-none");
        footer.classList.remove("d-none");
    })
})



    