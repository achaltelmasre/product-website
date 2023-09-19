import "./Product.css";

import Navbar from "../../component/Navbar/Navbar";
import Card from "./../../component/Card/Card";
import Footer from "./../../component/Footer/Footer";

import img1 from "./../../img/tedi1.jpg";
import img2 from "./../../img/img2.webp";
import img3 from "./../../img/img3.webp";
import img4 from "./../../img/img4.jpg";

export default function Product(){

  

    return(
        <>
         <Navbar/>
         <div className="container">
         <Card img={img1} text='Teddy Bears pink' price='1041'/>
         <Card img={img2} text=' Teddy Bears white' price='1199'/>
         <Card img={img3} text='Teddy Bears goldn' price='1001'/>
         <Card img={img4} text='Teddy Bears sky blue' price='1221'/>
      </div>
      <Footer/>
         
        </>
    )
}

