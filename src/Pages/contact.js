import React from "react"
import Navbar from "../Pagewrapper/navbar";
import "../colors/contact.css"
import "../functions/form.js"

const Contacts = ()=>{
    return(
        <div className="container">
            <Navbar/>
            <div className="awar">
                <div className="leftparte">
                    <div className="monitor">
                        <img src="/images/foaw.png" alt="20px" className="awadasd"/>
                        <div className='textmoni'>
                            <h4>Para cualquier tipo de comunicacion<br/>
                                que requiera, puede enviar un mensaje<br/>
                                con los datos requeridos, y si requiere<br/>
                                algun trabajo solicitaria un breve resumen<br/>
                                que luego sera charlado<br/><br/><br/>
                                Tene en cuenta las siguientes<br/>
                                redes sociales para nuestro contacto<br/>
                                
                            </h4>
                        </div>
                        <div className="isdelmoni">
                            <div>
                                <i className="fa-brands fa-twitter itwitter"></i><br /><a className="tw">Twitter</a>
                            </div>
                            <div href="">
                                <i className="fa-brands fa-instagram iinstagram" href=""></i><br /><a className="ig" href="">Instagram</a>
                            </div>
                            <div>
                                <i className="fa-brands fa-linkedin ilinkedin"></i><br /><a className="lik">Linkedin</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="casaform">
                    <form id="form" className="formulario" action="https://formspree.io/f/myyvgegn" method="post">
                        <h1>Contact</h1>
                        <input name="name" type="text" className="formulario__input"/>
                        <label for="name" className="formulario-label">Nombre</label>
                        <input name="email" type="text" className="formulario__input"/>
                        <label for="email" className="formulario-label">Correo</label>
                        <input name="message" type="text" className="formulario__input"/>
                        <label for="message" className="formulario-label">Mensage</label>
                        <input type="submit" className="formulario-submit"/>
                    </form>
                    <a href="mailto:zeo.01600@gmail.com" id="trucazo"/>
                    {/* <img src="/images/vector.png" className="vector"></img> */}
                </div>
            </div>
        </div>
    )
}

export default Contacts;