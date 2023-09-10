import "./Contact.css";

import Navbar from "./../../component/Navbar/Navbar";
import Footer from "./../../component/Footer/Footer";



export default function Contact(){
    return(
        <>
        <Navbar/>
        <div className="cont">
        <h1> Contact Me</h1>
            <p>Mail</p>
            <p>Gitub</p>
            <p>Linkdin</p>
            <p>Call</p>

        </div>

        <Footer/>
        </>

       
    )
}