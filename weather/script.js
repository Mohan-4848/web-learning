//who ever copies this api key is gay
const apiKey = '65b8d35a793d53f221f6c29618c11725'
const apiUrl ='https://api.openweathermap.org/data/2.5/weather?units=metric&q='

const searchBox = document.getElementById("search-bar")
const searchBtn = document.getElementById("search-btn")
const wheaterIcon = document.getElementById("wheater-icon")

async function checkWheater(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    if(response.status == 404){
        document.getElementById("error").style.display = 'block'
        document.getElementById("wheater").style.display = 'none'
    }
    else{
        var data = await response.json()

        document.getElementById("city").innerHTML = data.name
        document.getElementById("temp-value").innerHTML = Math.round(data.main.temp) 
        document.getElementById("humidity-value").innerHTML = data.main.humidity + "%"
        document.getElementById("wind-value").innerHTML = data.wind.speed + " km/h"

        console.log(data)

        switch(data.weather[0].main){
            case "Clouds":
                wheaterIcon.src="images/clouds.png"
                break
            case "Clear":
                wheaterIcon.src="images/clear.png"
                break
            case "Rain":
                wheaterIcon.src="images/rain.png"
                break
            case "Drizzle":
                wheaterIcon.src="images/drizzle.png"
                break
            case "Mist":
                wheaterIcon.src="images/mist.png"
                break
        }
        document.getElementById("wheater").style.display = "block"
        document.getElementById("error").style.display = 'none'
    }
}

searchBtn.addEventListener("click",()=>{
    checkWheater(searchBox.value)
})

searchBox.addEventListener("keydown",(event) =>{
    if(event.key == "Enter"){
        checkWheater(searchBox.value)
    }
})



