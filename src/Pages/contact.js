import React from "react"
import Navbar from "../Pagewrapper/navbar";
import "../colors/contact.css"
import Arasd from "../functions/form.js"
import "../functions/form.js"
import "../functions/most"


const Contacts = ()=>{
    return(
        <div className="containers">
            <Navbar/>
            <div className="container">
                <form name="contact" id="form" className="form" netlify method="POST" data-netlify="true">
                    <h1>Contact me</h1>
                    <input name="name" type="text" className="formulario_input tex1" required placeholder="Name"></input>
                    <input name="email" type="text" className="formulario_input tex2" required  placeholder="Mail"></input>
                    <input name="phonenumber" type="text" className="formulario_input tex3" placeholder="Phone number"></input>
                    <input name="message" type="text" cols="2" rows="5" className="formulario_input messg" required placeholder="Write your message"></input>
                    <input type="submit" className="formulario_submit" name="" ></input>
                    <input type="hidden" name="_next" value="http://localhost:3000"></input>
                </form>
            </div>
            <div className="reds">
                <div className="red-point">
                    <div>
                    <a href="https://twitter.com/_zeo016" >
                        <i className="fa-brands fa-twitter itwitter" ></i><br /><a className="tw">Twitter</a>
                    </a>
                    </div>
                    <div>
                    <a href="https://www.instagram.com/zeo016/">
                        <i className="fa-brands fa-instagram iinstagram" href=""></i><br /><a className="ig" href="">Instagram</a>
                    </a>
                    </div>
                    <div>
                    <a href="https://www.linkedin.com/in/zeo-callan-2652a9248">
                        <i className="fa-brands fa-linkedin lik"></i><br /><a className="lik">Linkedin</a>
                    </a>
                    </div>
                </div>
                <div className="myData">
                    <div>
                        <i class="fa-regular fa-envelope"></i>
                        <h3>Address</h3>
                    </div>
                        <h3>gabrielcallangcm.22@gmail.com</h3>
                    <div>
                        <i class="fa-solid fa-phone"></i>
                        <h3> Phone Number</h3>
                    </div>
                        <h3>1149490154</h3>
                    <div>
                        <i class="fa-solid fa-street-view"></i>
                        <h3>Location</h3>
                    </div>
                        <h3>Argentina, Buenos Aires</h3>
                </div>
            </div>
            
    </div>
    )
}

export default Contacts;