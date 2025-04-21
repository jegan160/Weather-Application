let apiKey="ddb2a288d83b41e4f661423cdee955ee";
let apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchBox=document.querySelector(".search input");
let searchBtn=document.querySelector(".search button");
let weatherIcon=document.querySelector(".weather-icon")


async function checkWeather(city) {
    let response=await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display="block"
        document.querySelector(".weather").style.display="none"
    } else{

        let data=await response.json();
    

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)  + "°C" ;
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + " km/hr";
        
    if(data.weather[0].main === "Clouds"){
        weatherIcon.src="/assets/clouds.png";
    }else if(data.weather[0].main === "Clear"){
        weatherIcon.src="/assets/clear.png"
    }else if(data.weather[0].main === "Rain"){
        weatherIcon.src="/assets/rain.png"
    }else if(data.weather[0].main === "Drizzle"){
        weatherIcon.src="/assets/drizzle.png"
    }else if(data.weather[0].main === "Mist"){
        weatherIcon.src="/assets/mist.png"
    }
    document.querySelector(".weather").style.display="block"
    document.querySelector(".error").style.display="none"

    }
  

}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
