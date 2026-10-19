import { useState } from "react"
export default function State(){
     const [student, setStudent] = useState({
                name: "Leiza",
                score: 75,
                course: "React"  
        });

        function increaseScore(){
         setStudent(prev =>({
                ...prev,
                score: prev.score + 5
            }))
        }
    return(
        <>
       <p>{student.name}</p>
       <p>Score: {student.score}</p>
       <p>Course: {student.course}</p>
       <button onClick={increaseScore}>Increase score</button>
        </>
    )
}
