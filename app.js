const apiKey = "9912282764bbc906b3732526069ecdda"
//html elements
const cityName = document.getElementById("cityName")
let form = document.getElementById("formCity")
const radioButtons = document.querySelectorAll("input[name=chosenTemp")
let tempUnit
let section1 = document.getElementById("choseCity")
let section2 = document.getElementById("displayInfo")
const today = new Date();

let country = document.getElementById("country")
let chosenCity = document.getElementById("chosenCity")
let currentTemperature = document.getElementById("currentTemp")
let feelsLike = document.getElementById("feelsLike")
let pressure = document.getElementById("pressure")
let humidity = document.getElementById("humidity")
let visibility = document.getElementById("visibility")
let wind = document.getElementById("wind")
let weather = document.getElementById("weather")
let weatherMain = document.getElementById("weatherMain")
let clouds = document.getElementById("clouds")













//html elements

//date and time
const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//date and time

//chosing temperature unit
form.addEventListener("click", () => {
    for (let radioButton of radioButtons) {
        if (radioButton.checked) {
            tempUnit = radioButton.value
            break
        }
    }
})
//fetching url 
form.addEventListener('submit', function (e) {
    e.preventDefault()

    const getWeather = async () => {

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${apiKey}&${tempUnit}`, {
            mode: "cors"
        })

       const data = await response.json()

        //display changing
        section2.style.display = "block"
        section1.style.display="none"
        //
        console.log(data);
        //inserting into html
        country.innerHTML = data.sys.country
        chosenCity.innerHTML = data.name
        currentTemperature.innerHTML = data.main.temp
        feelsLike.innerHTML = data.main.feels_like
        pressure.innerHTML = data.main.pressure
        humidity.innerHTML = data.main.humidity
        visibility.innerHTML = data.visibility
        wind.innerHTML = data.wind.speed
        weather.innerHTML = data.weather[0].description
        weatherMain.innerHTML = data.weather[0].main
        clouds.innerHTML = data.clouds.all
        document.getElementById("currentTime").innerHTML = date + ' ' + time;

        //inserting into html


        if (tempUnit=="celsius") {
            
        }
        
    }


    
    getWeather()


});
//fetching url 
