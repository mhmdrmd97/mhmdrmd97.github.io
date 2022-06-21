import './App.css';
import React from "react";
import HSBar from "react-horizontal-stacked-bar-chart";
function App() {
  return (
    <div className="App">

<div className="container">

     <h3>Pseudo-IMS<span> (437y8893798237992222020000)</span></h3>
      <div className="labels">

            <div className="label"><p>5</p><p>lable</p></div>
            <div className="label"><p>5</p><p>lable</p></div>
            <div className="label"></div>
            <div className="label"><p>5</p><p>lable</p></div>
            <div className="label"><p>5</p><p>lable</p></div>
            <div className="label"><p>5</p><p>lable</p></div>
      </div>
      <div className="chart">
      <HSBar height="8rem"  id="myChart1" data={[{value: 20,color: "#ffe6cc" }]} />
      <HSBar height="8rem"  id="myChart2" data={[{ value: 50,color:"#dae8fc" }]} />
      <HSBar height="8rem"  id="myChart3" data={[{ value: 30,color:"#f8cecc" }]} />
      <HSBar height="8rem"  id="myChart4" data={[{ value: 120,color:"#d5e8d4" }]} />
      <HSBar height="8rem"  id="myChart5" data={[{ value: 20,color:"#fff2cc" }]} />
      <HSBar height="8rem"  id="myChart6" data={[{ value: 60,color:"#e1d5e7" }]} />
      </div>
</div>
<div className="button">
      <button>Upload</button>
</div>
    </div>
  );
}

export default App;
