import "./ResultPage.css"

function ResultPage({Result,mode,totalCredits}) {  

  return (
    <div className = "Result">
      <p className = "Grade"> {mode}: {Result}</p>
      {mode === "GPA" ? <p className="Credit"> หน่วยกิตรวม : {totalCredits} </p> : null }
    </div>
  );
}

export default ResultPage;
