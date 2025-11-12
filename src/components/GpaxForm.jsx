import GpaxCourseRow from "./GpaxCourseRow";
import { useEffect } from "react"; 
import "./GpaxFormStyle.css";


function GPAXForm({ semesterData, setSemesterData, time, setTime }) {

  const study = [
    "มัธยมศึกษาปีที่ 4 เทอม 1 :",
    "มัธยมศึกษาปีที่ 4 เทอม 2 :",
    "มัธยมศึกษาปีที่ 5 เทอม 1 :",
    "มัธยมศึกษาปีที่ 5 เทอม 2 :",
    "มัธยมศึกษาปีที่ 6 เทอม 1 :",
    "มัธยมศึกษาปีที่ 6 เทอม 2 :",
  ];

  useEffect(() => {
    if (semesterData.length === 0) {
      const numSemesters = parseInt(time) || 1;
      const newData = [];
      for (let i = 0; i < numSemesters; i++) {
        newData.push({
          id: i,
          semester: study[i],
          credit: "",
          grade: ""
        });
      }
      setSemesterData(newData);
    }
  }, []);
  
  const handleTimeChange = (e) => {
    const numSemesters = parseInt(e.target.value);
    setTime(e.target.value);

    const newData = [];
    for (let i = 0; i < numSemesters; i++) {
      newData.push({
        id: i,
        semester: study[i],
        credit: "",
        grade: ""
      });
    }
    setSemesterData(newData);
  };


  // Update a specific semester's data
  const updateSemester = (id, field, value) => {
    setSemesterData(
      semesterData.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  return (
    <div className="Gpaxform">
      <h2>GPAX ( เกรดเฉลี่ยสะสม ) </h2>
      
      <div className = "AddTime" style={{ marginBottom: "16px" }}>
        <h3>จำนวนเทอม: </h3>
        <input
          type="number"
          min="1"
          max="6"
          value={time}
          onChange={handleTimeChange}
          placeholder=""
          style={{ width: "80px" }}
        />
      </div>

      {semesterData.map((item) => (
        <GpaxCourseRow
          key={item.id}
          item={item}
          updateSemester={updateSemester}
        />
      ))}
    </div>
  );
}

export default GPAXForm;