import "./App.css";
import { useState } from "react";
function App() {
  // const name = "Leïza";
  // const course = "Information Technology";
  // const completedProjects = 4;
  const [count, setCount] = useState(0);

  return (
    // <div>
    //   <p>Student: {name}</p>
    //   <p>Course: {course}</p>
    //   <p>Completed projects: {completedProjects}</p>
    //   <p>Status: {completedProjects >= 5 ? "Experienced":"Beginner" }</p>
    // </div>
    
    <>
    {/* <StudentCard 
    name="Leïza"
    course="Information Technology"
    completedProjects = {4}
    />
     <StudentCard 
    name="Aziel"
    course="BCS"
    completedProjects = {5}
    /> */}
    <div>
<p>{count}</p>
{count === 0 ?
 <p>Counter is at zero</p> 
 : count > 0 ? <p>Counter is positive</p> : <p>Counter is negative</p>}
<div id ="lei">
<button onClick={()=> setCount(count + 1)}>Increment</button>
<button onClick={()=> setCount(count - 1)}>Decrement</button>
</div>


    </div>
    </>
  );
}

// function StudentCard({ name, course, completedProjects}){
//   return(
//     <div>
//       <p>Student: {name}</p>
//       <p>Course: {course}</p>
//       <p>Completed projects: {completedProjects}</p>
//       <p>Status: {completedProjects >= 5 ? "Experienced":"Beginner"}</p>
//    </div>
//   )
// }
   

   export default App