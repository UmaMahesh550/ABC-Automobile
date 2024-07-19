import {useState} from "react"

function Counter(){

const [count,setCount]= useState(0);

    return(
        <div className="counter">
            <h2>Counter : {count}</h2>
            <button type="button" class="btn btn-danger rounded-pill px-3" onClick={()=>setCount(count-1)}>-</button>
            <button type="button" class="btn btn-success rounded-pill px-3" onClick={()=>setCount(count+1)}>+</button>
        </div>
    )
}

export default Counter;