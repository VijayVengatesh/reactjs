// import logo from './logo.svg';
import "./App.css";
import bmiImage from "./assets/bmi.jpg";

function App() {
  return (
    <>
      <div className="container">
        <div className="bmi-img">
          {/* <img src={bmiImage} alt="loadimage" width="500px" height="400px" />udfsb */}
        </div>
        <div className="bmi-calculation">
          <div className="input-container">
            <label>Person Height:</label>
            <input type="text" />
          </div>
          <div className="input-container">
            <label>Person Weight:</label>
            <input type="text" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
