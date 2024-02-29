import "./WetherDetails.css";
function WetherDetails({ clearsun,temp,city,country,lattitide,longtitude,humidity,wind,humidityImg }) {
  return (
    <>
      <div className="wether-details">
        <div className="wether-img">
          <img src={clearsun} alt="wetherindicateimage"  width="170px" height="150px"/>
        </div>
        <div className="details">
          <div className="degree">
            <p>{temp}°C</p>
          </div>
          <div className="city">
            <p>{city}</p>
          </div>
          <div className="country">
            <p>{country}</p>
          </div>
          <div className="corp">
            <div className="lattitude">
              <p>Lattitude</p>
              <span>{lattitide}</span>
            </div>
            <div className="longtitude">
              <p>Longtitude</p>
              <span>{longtitude}</span>
            </div>
          </div>
        </div>
        <div className="humidity-wind-container">
          <div className="humidity">
            {/* <img src={humidityImg} alt="no image" width="40px" height="40px" /> */}
            <span>{humidity}°C</span>
            <span>Humidity</span>
          </div>
          <div className="wind">
            {/* <img src="images/wind.png" alt="win image" /> */}
            <span>{wind} Km/h</span>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </>
  );
}
export default WetherDetails;
