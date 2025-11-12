import { useState, useEffect } from "react";
import GPAForm from "./components/GPAForm";
import GPAXForm from "./components/GpaxForm";
import ResultPage from "./components/ResultPage";
import "./App.css";




function App() {

  const [time, setTime] = useState("1");

  const [semesterData, setSemesterData] = useState([]);

  const [data, setData] = useState([{ id: 1, name: "", credit: "", grade: "" }]); // add useState for data

  const [mode, setMode] = useState("GPA");  // add useState for Gpa => for switch GPA/GPAX

  const [showResult, setShowResult] = useState(false); // make useState for showing result => for summit button

  // Show result when clicked
  const handleSubmit = () => {
    
    setShowResult(true);

  };

  // find sum credits
  let totalCredits = 0;
  let totalPoints = 0;

  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    const credit = parseFloat(item.credit);

    if (!isNaN(credit)) {
      totalCredits += credit;
    }

  }
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    const credit = parseFloat(item.credit);
    const point = parseFloat(item.grade);

    if (!isNaN(credit) && !isNaN(point)) {
      totalPoints += credit * point;
    }

  }
  //find GPA , check if it's divide with 0 
  const GPA = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : "0.00";

  // === same with GPAX Calculation ===
  let totalSemesterCredits = 0;
  let totalSemesterPoints = 0;

  for (let i = 0; i < semesterData.length; i++) {
    const credit = parseFloat(semesterData[i].credit);
    const grade = parseFloat(semesterData[i].grade);

    if (!isNaN(credit) && !isNaN(grade)) {
      totalSemesterCredits += credit;
      totalSemesterPoints += credit * grade;
    }
  }

  const GPAX = totalSemesterCredits > 0
    ? (totalSemesterPoints / totalSemesterCredits).toFixed(2)
    : "0.00";

  // toggle funcion for mode
  const toggleMode = () => {
    if (mode === "GPA") {

      setMode("GPAX");
      setShowResult(false);

    } else {
      setMode("GPA");
      setShowResult(false);
    }
  };

  function display() {
    if (showResult === true && mode === "GPA") {
      return <ResultPage mode = {mode} Result={GPA} totalCredits={totalCredits}/>
    }
    if (showResult === true && mode === "GPAX") {
      return <ResultPage mode = {mode} Result={GPAX} />
    }
    return null;
  }

  return (
    <div>
      <div className = "header">
        <h1>โปรเเกรมคํานวณ GPA GPAX</h1>
        <button onClick={toggleMode}>สลับ</button>
      </div>

      {mode === "GPA" ? (
        <GPAForm data={data} setData={setData} />
      ) : (
        <GPAXForm
          semesterData={semesterData}
          setSemesterData={setSemesterData}
          time={time}
          setTime={setTime}
        />
      )}
      <div className="buttonContainer">
      <button className = "submitButton" onClick={handleSubmit}>คํานวณ</button>
      </div>
      {display()}

    </div>


  );
}

export default App;