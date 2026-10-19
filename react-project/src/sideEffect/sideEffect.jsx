import './sideEffect/sideEffect.css'
import { useState, useEffect } from 'react'

export default function SideEffect(){
    useEffect(()=> console.log("Component rendered!"),[])

    return(
    <>
    <h1>Side Effects Practice</h1>
    </>
    )
}

export default function CounterEffect(){
    const [count, setCount] = useState(0);
    useEffect(()=> console.log("Count changed!"),[count])
    function handler(){
        setCount(prec => prec + 1)
    }
    return(
    <>
    <p>Count: {count}</p>
    <button onClick={handler}>Click</button>
    </>
)
}

export default function TimerEffect(){
    const [count,setCount] = useState(0)
    useEffect(()=>{
        const timer = setInterval(()=>{
            setCount(prev=> prev + 1)
        },2000)
        return ()=>clearInterval(timer)

    },[])
    
    return(
        <>
        <p>Count: {count}</p>
        </>
    )
}
