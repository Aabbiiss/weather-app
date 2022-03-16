let weather = {
  apikey: "04fcac1dc8d16784681f316074250ec0",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/find?q=" +
        city +
        "&units=Metric&appid=" +
        this.apikey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data.list[0];
    const { icon,description } = data.list[0].weather[0];
    const { temp, humidity } = data.list[0].main;
    const { speed } = data.list[0].wind;
    
    document.querySelector(".city").innerText="Weather in "+name
    document.querySelector(".icon").src="https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".temp").innerText=temp + "°C"
    document.querySelector(".description").innerText= description
    document.querySelector(".humidity").innerHTML= `Humidity: ${humidity}%`
    document.querySelector(".wind").innerHTML=`Wind Speed : ${speed} Kph`
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";

},
search: function(){
    this.fetchWeather(document.querySelector(".search-bar").value)

}

};
document.querySelector(".search-button").addEventListener("click",()=>{weather.search()})
document.querySelector(".search-bar").addEventListener("keyup", function(e){
    if (e.key == "Enter"){
        weather.search()
    }
} )
weather.fetchWeather("Melbourne")