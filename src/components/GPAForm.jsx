import CourseRow from "./CourseRow";
import './GPAForm.css';
import { FaDeleteLeft } from "react-icons/fa6";

function GPAForm({ data, setData }) {

  // Add a new row
  const addRow = () => {
    const newId = data.length > 0 ? data[data.length - 1].id + 1 : 1;
    setData([...data, { id: newId, name: "", credit: "", grade: "" }]);
  };

  // Remove a row by id
  const removeRow = (id) => {
    setData(data.filter((row) => row.id !== id));
  };

  // Update a field in a row
  const updateRow = (id, field, value) => {
    setData(
      data.map((row) => (row.id === id ? { ...row, [field]: value } : row))
    );
  };


  return (
    <div className="GPAForm">
      <h2>GPA ( เกรดเฉลี่ยรายเทอม )</h2>
      
      {data.map((row) => (
        <div
          key={row.id}
          style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}
        >
          <CourseRow row={row} updateRow={updateRow} />
          <button className="delRowButton"
            onClick={() => removeRow(row.id)}
          >
            <div className="icon-box">
              <FaDeleteLeft />
            </div>

          </button>
        </div>
      ))}

      <button className ="addRowButton" onClick={addRow}>+</button>
    </div>
  );
}

export default GPAForm;

