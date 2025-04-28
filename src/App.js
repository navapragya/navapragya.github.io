import React , { useState } from 'react';        

import './static/vendor/bootstrap/css/bootstrap.min.css';
import './static/vendor/bootstrap-icons/bootstrap-icons.css';
import './style.css';

import Header from './common/Header';
import Footer from './common/Footer';

import DigitalDataExtraction from './pages/solutions/DigitalDataExtraction';

import Home from './Home';

function App() {

  const [page, setPage] = useState("Home");
  const company_name = "Nava Pragya";

  const handlePageNavigationLinkClick = (page) => {
    //alert(page);
    //console.log(page);
    setPage(page);	
  }
    	
  return (
      <main id="main">
          
          <Header  onClick={handlePageNavigationLinkClick} name={company_name} page={page}/>

          {
              page==="Home"?<Home  onClick={handlePageNavigationLinkClick} name={company_name} page={page}/>:

              page==="DigitalDataExtraction"?<DigitalDataExtraction  onClick={handlePageNavigationLinkClick} name={company_name} page={page}/>:
                         
              <Home  onClick={handlePageNavigationLinkClick} name={company_name} page={page}/>
          }

          <Footer/>
          
          
      </main>
  );

}

export default App;
