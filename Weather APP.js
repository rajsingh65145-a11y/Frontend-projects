const cityinput=document.getElementById("cityinput");
const searchbtn=document.getElementById("searchbtn");
const weatherresult=document.getElementById("weatherresult");

const apikey="YOUR_API_KEY"

async function getweather(city){

const url=`https://wttr.in/${city}?format=j1`    
    const responce=await fetch(url)

    const data=await responce.json()

    weatherresult.innerHTML=`
  <h2>${city}</h2>
    <p>Temperature: ${data.current_condition[0].temp_C}°C</p>
    <p>Humidity: ${data.current_condition[0].humidity}%</p>
    <p>Wind Speed: ${data.current_condition[0].windspeedKmph} km/h</p>
  `
}

searchbtn.addEventListener("click",()=>{
    const city=cityinput.value
    getweather(city)
})