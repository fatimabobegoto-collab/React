import "./todo.css";
export default function Todo(){
    function addTodo(){

    }
    return(
        <>
     <div className="first-div">
        <input type="text" placeholder="Add todo..." className="form"/>
        <button onClick={addTodo}>+</button>

     </div>
        </>
    )
}