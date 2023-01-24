import React from "react"
import Navbar from '../Pagewrapper/navbar'
import "../colors/mediaquerys.css"
import {Skills} from '../inf/skillsuwu'
import "../colors/contenedor2y3.css"
import { Ability } from "../inf/ability"
import {awue} from "../functions/most"

export const Indexpage = ()=>{
    return(
        <div className="App">
      <Navbar/>
      <div className="mundo">
        <div className='temp1'>
          <img src="" className='ima'></img>
          <div className='text1'>
             <h1>Bienvenido</h1>
          </div>
          <div className='puntero'></div>
        </div>
          <div className="mund1uni">
            <div>
              <a href="https://twitter.com/_zeo016" >
                <i className="fa-brands fa-twitter tw"></i><br /><a className="ti" href="">Twitter</a>
              </a>
            </div>
            <div >
              <a href="https://www.instagram.com/zeo016/">
                <i className="fa-brands fa-instagram ig" href="https://www.instagram.com/zeo016/"></i><br /><a className="ig" href="">Instagram</a>
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/zeo-callan-2652a9248">
                <i className="fa-brands fa-linkedin like"></i><br /><a className="like" href="">Linkedin</a>
              </a>
            </div>
          </div>
      </div>
      <div className="mundo2">
        <div className="portal2">
            {
              Ability.map(({name,resum,img},i)=>(
                <div className="mund3">
                  <div>
                    <div>{img}</div>
                    <h1>{name}</h1>
                    <div>
                      <h4>{resum}</h4>
                    </div>
                  </div>
                </div>
              ))
            }
            <div className="mund3 visu">
              <div>
                <div><i class="fa-solid fa-file-pen"></i></div>
                <h1>Code Editor</h1>
                <div>
                  <h4>As a code editor I use VSC and Sublime but I can adapt to any other.</h4>
                </div>
              </div>
            </div>
            <div className="mund3 csscode">
              <div>
                <div><i class="fa-brands fa-css3"></i></div>
                <h1>Styling with CSS</h1>
                <div>
                  <h4>I make the styles implementing css methodology and for changes in bootstrap I use scss</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div className='contenedor2'>
        <div className="im1p">
          <div className='im2'> 
                <div className='awasd'>
                  <div className="point1">
                      <div className="tem1">
                      <h1>Skills</h1>
                      <div className="skillcont">
                        {
                          Skills.map(({skill,porcentaje},i)=>(
                            <div className="py-3 parad" key={i} >
                            <h5>{skill}</h5>
                              <div className="progress">
                              <div className="progress-bar" role="progressbar" style={{ width:`${porcentaje}%` }}></div>
                              </div>
                            </div>
                          ))
                        }
                      </div>
                    </div>
                    <div className='port text4'>
                      <h4>
                      <h3>Types</h3>
                      Construction of static pages and<br/>
                      Ecommerce, planning of the different<br/>
                      parts of the page and the methodologies<br/>
                      to use<br/>
                      <br/>

                      <h3>Ability</h3>
                      Optimization and better code structure,<br/>
                      using skills for a better order and<br/>
                      execution of functions and page design<br/>
                      <br/>

                      <h3>Programs</h3>
                      VisualStudio is used for writing code,<br/>
                      the page is planned using platforms for<br/>
                      design and everything is done with the<br/>
                      intervention of the employer<br/>
                      </h4>
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </div>
      <div className="contenedor3">
        <div className="unit2">
          <div>
            
            <h1>Static Pages</h1>
            <div>
              <img alt="" src="../images/fonds/load2.png" className="img12"/>
              <img alt="" src="../images/fonds/unfinished2.png" className="img13"/>
              <button className="desre" ><i className="fa-solid fa-angle-left "></i></button>
              <button className="desra" ><i className="fa-solid fa-angle-right "></i></button>
            </div>
            <div>
              <img alt="" src="../images/fonds/load2.png" className="img14"/>
              <img alt="" src="../images/fonds/unfinished2.png" className="img15"/>
              <button className="desre" ><i className="fa-solid fa-angle-left "></i></button>
              <button className="desra" ><i className="fa-solid fa-angle-right "></i></button>
            </div>
          </div>
          <div>
            <h1>Ecommerce</h1>
            <div>
              <img alt="" src="../images/fonds/load2.png" className="img16"/>
              <img alt="" src="../images/fonds/unfinished2.png" className="img17"/>
              <button className="desre" ><i className="fa-solid fa-angle-left "></i></button>
              <button className="desra" ><i className="fa-solid fa-angle-right "></i></button>
            </div>
            <div>
              <img alt="" src="../images/fonds/load2.png" className="img18"/>
              <img alt="" src="../images/fonds/unfinished2.png" className="img19"/>
              <button className="desre" ><i className="fa-solid fa-angle-left "></i></button>
              <button className="desra" ><i className="fa-solid fa-angle-right "></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Indexpage;