const apiKey= "e41e9ebc84410c92c65c92d265beadbb";
const appUrl ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")


async function cheackWeather (city){
   const response = await fetch(appUrl +  city +`&appid=${apiKey}`);
    
  if (response.status === 404) {
   alert("Invalid city name");
   return;
 }
   var data = await response.json()
   console.log(data);
   
document.querySelector(".city").innerHTML= data.name;
document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + " °c";
document.querySelector(".humidity").innerHTML= data.main.humidity +" %";
document.querySelector(".wind").innerHTML=data.wind.speed +" KM/H";



if(data.weather[0].main == "Clouds"){
   weatherIcon .src="images/clouds.png"
}else if(data.weather[0].main == "Clear"){
   weatherIcon.src = "images/clear.png"
}else if(data.weather[0].main == "Rain"){
   weatherIcon.src= "images/rain.png"
}else if(data.weather[0].main == "Drizzle"){
   weatherIcon.src = "images/drizzle.png"
}else if(data.weather[0].main == "Mist"){
   weatherIcon.src = "images/mist.png"
}


}

searchBtn.addEventListener("click",()=>{
      cheackWeather(searchBox.value)
})
cheackWeather();

