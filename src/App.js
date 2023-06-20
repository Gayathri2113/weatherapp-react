import './App.css';
import axios from "axios";
import {useState} from "react";
import ReactAnimatedWeather from "react-animated-weather";


function App() {
  let [city,setcity] = useState("Paris");
  let [weather,setweather] = useState({});
  
  function getTemperature(response){
    setweather({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      pic: response.data.weather[0].main,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    })
    console.group(response.data)
  }
  function UpdateCity(event){
    event.preventDefault();
    setcity(event.target.value)
  }
  function shoWeather(event){
    event.preventDefault();
    let apikey = "36459a8242aec3971626f0447d4eb713";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    axios.get(url).then(getTemperature);
  }


  return (
    <div className="App">
      <div className="box">
        <form onSubmit={shoWeather}>
          <input type="search" placeholder="Enter a city" onChange={UpdateCity}></input>
          <button className="btn1">Submit</button>
          <button className="btn2">Current</button>
        </form>
        <div>
          <h1>{city}</h1>
          <h3>Tuesday <span>15:00 minutes</span></h3>
          <h3>{weather.description}</h3>
          <div className="weather">
            <img src={weather.icon} height="60px" className="img"/>
            <h1 className="temp">{Math.round(weather.temperature)}<span className="unit">°C</span></h1>
            <ul>
              <li>Humidity : {weather.humidity} %</li>
              <li>Wind : {Math.round(weather.wind)} km/hr</li>
            </ul>
          </div>
        </div>
        <div className="forecast">
          <div className="weather-forecast">
            <p>Wed</p>
            <img />
            <ReactAnimatedWeather
              icon="PARTLY_CLOUDY_NIGHT"
              color="black"
              size={50}
              animate={true}
            />
            <p>13°</p>
          </div>
          <div className="weather-forecast">
            <p>Thu</p>
            <img />
            <ReactAnimatedWeather
              icon="PARTLY_CLOUDY_NIGHT"
              color="black"
              size={50}
              animate={true}
            />
            <p>13°</p>
          </div>
          <div className="weather-forecast">
            <p>Fri</p>
            <img />
            <ReactAnimatedWeather
              icon="PARTLY_CLOUDY_NIGHT"
              color="black"
              size={50}
              animate={true}
            />
            <p>13°</p>
          </div>
          <div className="weather-forecast">
            <p>Sat</p>
            <img />
            <ReactAnimatedWeather
              icon="PARTLY_CLOUDY_NIGHT"
              color="black"
              size={50}
              animate={true}
            />
            <p>13°</p>
          </div>
          <div className="weather-forecast">
            <p>Sun</p>
            <img />
            <ReactAnimatedWeather
              icon="PARTLY_CLOUDY_NIGHT"
              color="black"
              size={50}
              animate={true}
            />
            <p>13°</p>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;
