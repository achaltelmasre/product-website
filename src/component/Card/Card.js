import './Card.css';
import Button  from "./../../component/Button/Button";
import {AddButton} from "./../../component/Button/Button";

import { useEffect, useState } from "react";


export default function Card ({img,text,price}){

   let [count, setCount] = useState(0);

    function increaseCount() {
      setCount(count + 1)
    
    }
   
    useEffect(()=>{
       console.log(`countnis ${count} now!`) 
    } , [count])

    function decreaseCountCount() {
        setCount(count - 1)
        
    }
    return(
        <>
        <div className='card'>

            <img src={img} height='250px' alt='img'></img>
            <p>{text}</p>
            <h3>Rs : {price}</h3>

           

            <button onClick={increaseCount} className='bttn'> + </button>

            <span className='count'>{count}</span>
   
            <button onClick={decreaseCountCount} className='bttn'>- </button>

            <Button text={'Buy Nowr'}/>
            {/* <AddButton txt={"achal"}/> */}
        </div>
        </>

    )
}
