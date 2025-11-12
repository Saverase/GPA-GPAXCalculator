import"./GpaxCourseRow.css";

function GpaxCourseRow({ item, updateSemester }) {
  return (
    <div  style={{ 
      display: "flex", 
      alignItems: "center", 
      marginBottom: "12px" 
    }}>
      <div className ="timeDisplay">
      {/* Semester label */}
      <span style={{ minWidth: "175px", fontWeight: "bold" }}>
        {item.semester}
      </span>
      </div>
      <div className = "infoInput">
        {/* Credit input */}
        <input
          type="text"
          placeholder="หน่วยกิตรวมของเทอมนี้"
          value={item.credit}
          onChange={(e) => updateSemester(item.id, "credit", e.target.value)}
          
        />

        {/* Grade input */}
        <input
          type="text"
          step="0.01"
          min="0"
          max="4"
          placeholder="GPA ของเทอมนี้ "
          value={item.grade}
          onChange={(e) => updateSemester(item.id, "grade", e.target.value)}
          
        />
        </div>
    </div>
  );
}

export default GpaxCourseRow;
