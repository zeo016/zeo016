import "../colors/colo.css"
import React from "react"

const Navbar = ()=>{
    return(
        <div className="contenedornav">
        <nav className="navbar bg-primary fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" id="nicka" href="/">Zeo016</a>
            <button className="navbar-toggler bg-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
              <span className="navbar-toggler-icon bg-light"></span>
            </button>
            <div className="offcanvas offcanvas-end bg-primary"  id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div className="offcanvas-header" id="rast">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                <button type="button" className="btn-close bg-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body" id="letris">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="#">Portafolio</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
}
export default Navbar