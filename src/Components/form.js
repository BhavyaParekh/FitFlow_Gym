import React from "react";
import { useState } from "react";
import'./form.css'

export default function Form1() {
  const [weight, setw] = useState(0);
  const [height, seth] = useState(0);
  const [bmi, setbmi] = useState("");
  const [message, setm] = useState("");

  function handlew(e) {
    setw(e.target.value);
  }
  function handleh(e) {
    seth(e.target.value);
  }
  function handlesubmit(e) {
    e.preventDefault();

    if (weight === 0 || height === 0) {
      alert("please enter valid weight and height");
    } 
    
    else {
      let bmi = (weight / (height * height));
      setbmi(bmi);
        
      if (bmi < 18) {
        setm("you are underweight");
      } else if (bmi >= 18 && bmi < 25) {
        setm("you are healthy weight person");
      } else {
        setm("you are over weight person");
      }
    }

  }
  function reload(){
    window.location.reload()
  }

  return (
    <>
      <div className="firstpage">
        
        <h1 style={{color : "yellow", textAlign : "center"}} >Let's Maintain Our Weight....!!</h1>
        <h2 style={{color : "yellow" , textAlign : "center"}}> Check your weight </h2>
        <form onSubmit={handlesubmit}>
          <div>
            <label style={{color : "yellow"}}> Weight (kg)</label>
            <input
            className="weight"
              type="text"
              placeholder="Enter Weight value"
              value={weight}
              onChange={handlew}
            />
          </div>
          <div>
            <label style={{color : "yellow"}}> Height(m)</label>
            <input
            className="height"
              type="text"
              placeholder="Enter Weight value"
              value={height}
              onChange={handleh}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn1" onClick={reload} type="submit">
              Reload
            </button>
          </div>
          <div className="center">
            <h3 style={{color : "yellow"}}> Your BMI is :{bmi}</h3>
            <p><h1 style={{color : "yellow"}}>{message}</h1></p>
          </div>
        </form>
      </div>
    </>
  );
}
