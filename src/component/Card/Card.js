import './Card.css';
import Button from "./../../component/Button/Button"


export default function Card ({img,text,price}){

    return(
        <>
        <div className='card'>

            <img src={img} height='250px' alt='img'></img>
            <p>{text}</p>
            <h3>Rs : {price}</h3>
            <Button/>

        </div>
        </>
    )
}