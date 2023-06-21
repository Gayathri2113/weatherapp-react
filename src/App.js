import './App.css';
import axios from "axios";
import {useState} from "react";
import ReactAnimatedWeather from "react-animated-weather";


function App() {
  let date = new Date();
  let day = date.getDay();
  let hour = date.getHours();
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday"]
  let minutes = date.getMinutes();
  let [city,setcity] = useState("Paris");
  let [temp,setemp] = useState(12);
  let [humid, sethumid] = useState(34);
  let [wind, setwind] = useState(4);
  let [description, setdescription] = useState("Cloudy");
  let [icon, seticon] = useState("10d");
  // let [ico, setico] = useState();
  
  function getTemperature(response){
    setemp(Math.round(response.data.main.temp));
    sethumid(Math.round(response.data.main.humidity));
    setwind(Math.round(response.data.wind.speed));
    setdescription(response.data.weather[0].description);
    seticon(`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    
    // setico(response.data.weather[0].icon)
    // iconMatching = {
    //   "01d": "CLEAR_DAY",
    //   "01n": "CLEAR_NIGHT",
    //   "02d": "PARTLY_CLOUDY_DAY",
    //   "02n": "PARTLY_CLOUDY_NIGHT",
    //   "03d": "CLOUDY",
    //   "03n": "CLOUDY",
    //   "04d": "CLOUDY",
    //   "04n": "CLOUDY",
    //   "09d": "RAIN",
    //   "09n": "RAIN",
    //   "10d": "RAIN",
    //   "10n": "RAIN",
    //   "11d": "SLEET",
    //   "11n": "SLEET",
    //   "13d": "SNOW",
    //   "13n": "SNOW",
    //   "50d": "FOG",
    //   "50n": "FOG"
    // };
    // ico(this.iconMatching.setico)
    // console.log(ico)
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
  function showcurrent(event) {
    event.preventDefault();
    let apikey = "36459a8242aec3971626f0447d4eb713";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=Karimnagar&appid=${apikey}&units=metric`;
    axios.get(url).then(getTemperature);

  }

  return (
    <div className="App">
      <div className="box">
        <form>
          <input type="search" placeholder="Enter a city" onChange={UpdateCity}></input>
          <button className="btn1" onClick={shoWeather}>Submit</button>
          <button className="btn2" onClick={showcurrent}>Current</button>
        </form>
        <div>
          <h1>{city}</h1>
          <h3>{days[day]} <span>{hour}:{minutes} minutes</span></h3>
          <h3>{description}</h3>
          <div className="weather">
            <img src={icon} height="60px" className="img"/>
            <h1 className="temp">{temp}<span className="unit">°C</span></h1>
            <ul>
              <li>Humidity : {humid} %</li>
              <li>Wind : {wind} km/hr</li>
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
      <p>Open Source code by <a href="https://github.com/Gayathri2113/weatherapp-react">gayathri</a></p>
    </div>
    
  );
}

export default App;
