import React , { useState } from 'react';

function Header(props) {
    
    return (
    
    <header id="header" className="fixed-top d-flex align-items-center">

      <div className="container d-flex align-items-center">

      {

      props.page !="Home"?
        
          <>
          <div className="logo me-auto">
            <a href="#" onClick={(e) => {
                        e.preventDefault(); 
                        props.onClick('Home')
                    }}>
              <img src="logo.png" alt=""/>
            </a>          
          </div>  
          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li>
                <a href="#" onClick={(e) => {
                        e.preventDefault(); 
                        props.onClick('Home')
                    }}>
                  <img src="arrow.png"/> Home
                </a>
              </li>
            </ul>
          </nav>
          </>
      
      :  
          <>          
          <div className="logo me-auto"></div>          
          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li><a className="nav-link scrollto active" href="#home">Home</a></li>
	      <li><a className="nav-link scrollto active" href="#products">Solutions</a></li>

	      {/*	
              <li className="dropdown"><a href="#"><span>Solutions</span> <i className="bi bi-chevron-down"></i></a>
                <ul>
                  <li><a href="#products">Digital Data Extraction</a></li>
                
                  <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                    <ul>
                      <li><a href="#">Deep Drop Down 1</a></li>
                      <li><a href="#">Deep Drop Down 2</a></li>
                      <li><a href="#">Deep Drop Down 3</a></li>
                      <li><a href="#">Deep Drop Down 4</a></li>
                      <li><a href="#">Deep Drop Down 5</a></li>
                    </ul>
                  </li>
                
                  <li><a href="#products">Audio Content Generation</a></li>
                  <li><a href="#products">Presentation Generation</a></li>
                </ul>
              </li>
	      */}

              <li><a className="nav-link scrollto" href="#services">Services</a></li>
              <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
              <li><a className="nav-link scrollto" href="#about">About Us</a></li>
              
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
          {/*     
        <div class="header-social-links d-flex align-items-center">
          <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
          <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
          <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
          <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
        </div>
        */}
          </>        
      }

    </div>
                            
    </header>
                        
    );
}
export default Header;