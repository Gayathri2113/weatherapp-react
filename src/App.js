import './App.css';

function App() {
  return (
    <div className="App">
      <div className="box">
        <form>
          <input type="search" placeholder="Enter a city"></input>
          <button className="btn1">Submit</button>
          <button className="btn2">Current</button>
        </form>
        <h1>Paris</h1>
        <h3>Tuesday 15:00 minutes</h3>
        <h3>Clouds</h3>
        <div className="weather">
          <img />
          <h1>20°C</h1>
          <ul>
            <li>Precipitation:</li>
            <li>Wind:</li>
          </ul>
        </div>
        <div className="forecast">
          <div className="weather-forecast">
            <p>Wed</p>
            <img />
            <p>13°</p>
          </div>
          <div className="weather-forecast">
            <p>Thu</p>
            <img />
            <p>13°</p>
          </div>
          <div className="weather-forecast">
            <p>Fri</p>
            <img />
            <p>13°</p>
          </div>
          <div className="weather-forecast">
            <p>Sat</p>
            <img />
            <p>13°</p>
          </div>
          <div className="weather-forecast">
            <p>Sun</p>
            <img />
            <p>13°</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
