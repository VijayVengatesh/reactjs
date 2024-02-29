import './App.css';
import WetherDetails from './WetherDetails';
import clearsun from './images/clearsun.png'
import sunshower from './images/sunshower.png'
import thunder from './images/thunder.png'
import snow from './images/snow.png'
// import wind from './images/wind.png'
import humidityimage from './images/humidity.png'
import searchlogo from './images/search-icon.png'
import { useEffect, useState } from 'react';


function App() {
  const wetherCondition={
    "01d":clearsun,
    "01n":clearsun,
    "13d":snow,
    "13n":snow,
    "09d":sunshower,
    "09n":sunshower,
    "11d":thunder,
    "11n":thunder
  }
  // console.log(wetherCondition['01d'])
  const[weatherIcon,setweatherIcon]=useState();
  const[loading,setLoading]=useState(false);
  const[cityLoading,setCityLoading]=useState(false);
  const[wetherImg,setWetherImg]=useState();
  const[humidityImg,setHumidityImg]=useState(humidityimage)
  const[temp,setTemp]=useState();
  const[city,setCity]=useState("chennai");
  const[country,setCountry]=useState();
  const[lattitide,setLattiude]=useState();
  const[longtitude,setLongtitude]=useState();
  const[humidity,setHumidity]=useState();
  const[wind,setWind]=useState();
  const apiKey="3a4000e28b5520daddd1b1cfdcb996e0";
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&unit=metric`
 useEffect(()=>{
  search();
 },[])
  const search=async ()=>{
    setLoading(true);
    try {
      const res=await fetch(url)
      const data=await res.json()
      setCity(data.name)
      console.log(data)
      if(data.cod==="404")
      {
      //  alert("data not found");
       setCityLoading(true);
      }
      else{
      setCityLoading(false);
      setWetherImg(wetherCondition['13d'])
      setTemp(Math.floor(data.main.temp))
      setCountry(data.sys.country)
      setLattiude(Math.floor(data.coord.lat));
      setLongtitude(Math.floor(data.coord.lon));
      setHumidity(data.main.humidity)
      setWind(data.wind.speed)
      const weatherIconCode=data.weather[0].icon;
      setweatherIcon(wetherCondition[weatherIconCode] || clearsun);
      }
      

    } catch (error) {
      console.log("fetch data erro",error);
    }
    finally{
      setLoading(false);
    }
    // alert("hi");
    
  }
  function keyDownHandler(e)
  {
    if(e.key==="Enter")
    {
      search();
    }
  }
  
  return (
    <>
      <div className='container'>
      <div className='input-container'>
        <div className='input-box'>
        <input type='text' placeholder='city' value={city} onClick={search} onChange={(e)=>{setCity(e.target.value)}} onKeyDown={keyDownHandler}/>
        </div>
        <div className='search-icon'>
        <img src={searchlogo} alt='search' width="20px" height="20px" onClick={()=>(search())}/>
        </div>
      </div>
      {/* wether details */}

          {!cityLoading && !loading  && <WetherDetails clearsun={weatherIcon} humidityImg={humidityImg} temp={temp} city={city} country={country} lattitide={lattitide} longtitude={longtitude} humidity={humidity} wind={wind}/>}
          {loading  && <p className='loading'>loading...</p>}
          {cityLoading && <p className='city-not-found'>City NOt Found</p>}
      </div>
    </>
  );
}

export default App;
