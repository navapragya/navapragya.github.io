import React , { useState } from 'react';           

import './static/vendor/bootstrap/css/bootstrap.min.css';
import './static/vendor/bootstrap-icons/bootstrap-icons.css';
import './style.css';

import Header from './common/Header';
import Footer from './common/Footer';

import Home from './Home';

import ExpertSystem from './pages/solutions/ExpertSystem';
import DigitalProcessing from './pages/solutions/DigitalProcessing';
import MediaGeneration from './pages/solutions/MediaGeneration';

import ImplementationConsulting from './pages/services/ImplementationConsulting';
import TechnologyAdvisory from './pages/services/TechnologyAdvisory';

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

              page==="ExpertSystem"?<ExpertSystem  onClick={handlePageNavigationLinkClick} name={company_name} page={page}/>:

              page==="DigitalProcessing"?<DigitalProcessing  onClick={handlePageNavigationLinkClick} name={company_name} page={page}/>:              
              
              page==="MediaGeneration"?<MediaGeneration  onClick={handlePageNavigationLinkClick} name={company_name} page={page}/>:      
              
              page==="TechnologyAdvisory"?<TechnologyAdvisory  onClick={handlePageNavigationLinkClick} name={company_name} page={page}/>:      

              page==="ImplementationConsulting"?<ImplementationConsulting  onClick={handlePageNavigationLinkClick} name={company_name} page={page}/>:      
              
              <Home  onClick={handlePageNavigationLinkClick} name={company_name} page={page}/>
          }

          <Footer/>
          
          
      </main>
  );

}

export default App;
