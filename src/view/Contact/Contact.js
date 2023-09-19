import "./Contact.css";

import Navbar from "./../../component/Navbar/Navbar";
import Footer from "./../../component/Footer/Footer";



export default function Contact(){
    return(
        <>
        <Navbar/>
        <div className="cont">
        <h1> Contact Me</h1>
            <p className="p">Mail</p>
            <p className="p">Gitub</p>
            <p className="p">Linkdin</p>
            <p className="p">Call</p>

        </div>

        <Footer/>
        </>

       
    )
}