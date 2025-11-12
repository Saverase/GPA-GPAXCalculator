import "./CourseRow.css";

function CourseRow({ row, updateRow }) {
  return (
    <section style={{ display: "flex", gap: "8px" }}>
      <input
        type="text"
        placeholder="ชื่อวิชา ( ไม่จําเป็น )"
        value={row.name}
        onChange={(e) => updateRow(row.id, "name", e.target.value)}
      />
      <input className = "numInput"
        type="text"
        placeholder="หน่วยกิต"
        value={row.credit}
        onChange={(e) => updateRow(row.id, "credit", e.target.value)}
      />
      <input className = "numInput"
        type="text"
        placeholder="เกรด"
        value={row.grade}
        onChange={(e) => updateRow(row.id, "grade", e.target.value)}
      />
    </section>
  );
}

export default CourseRow;
