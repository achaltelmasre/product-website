import './Card.css';
import Button  from "./../../component/Button/Button";

import { useState } from "react";


export default function Card ({img,text,price}){

   let [count, setCount] = useState(0);

    function increaseCount() {
      setCount(count + 1)
        console.log(count);
        document.getElementById("count").innerHTML = count;
        
    }

    function decreaseCountCount() {
        setCount(count - 1)
        console.log(count);
        document.getElementById("count").innerHTML = count ;

        
    }
    return(
        <>
        <div className='card'>

            <img src={img} height='250px' alt='img'></img>
            <p>{text}</p>
            <h3>Rs : {price}</h3>

            <h1 id="count">{count}</h1>

            <button onClick={increaseCount} className='bttn'> + </button>
  
            {"      "}
   
            <button onClick={decreaseCountCount} className='bttn'>- </button>

            <Button />
        </div>
        </>

    )
}
