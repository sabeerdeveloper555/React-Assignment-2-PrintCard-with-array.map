import "./App.css";

const students = [
  {
    id: 1,
    name: "Ali Khan",
    age: 18,
    course: "Web Development",
    city: "Karachi",
  },
  {
    id: 2,
    name: "Sara Ahmed",
    age: 20,
    course: "Graphic Design",
    city: "Lahore",
  },
  {
    id: 3,
    name: "Ahmed Raza",
    age: 19,
    course: "React JS",
    city: "Islamabad",
  },
  {
    id: 4,
    name: "Ayesha Malik",
    age: 21,
    course: "Web Development",
    city: "Karachi",
  },
];

function App() {
  return (
    <div className="app">
      <h2 className="page-title">Student Directory</h2>
      <div className="student-list">
        {students.map((student)=> 
          <div key={student.id} className="student-card">
            <h3>{student.name}</h3>
            <p><span className="student-label">Age: </span> {student.age}</p>
            <p><span className="student-label">Course: </span> {student.course}</p>
            <p><span className="student-label">City: </span> {student.city}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
