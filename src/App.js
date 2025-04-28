import React , { useState } from 'react';  

import './static/vendor/bootstrap/css/bootstrap.min.css';
import './static/vendor/bootstrap-icons/bootstrap-icons.css';
import './static/style.css';

import Header from './common/Header';

import Home from './Home';

function App() {

  const [page, setPage] = useState("Home");
  const name = "AIMind";

  const handlePageNavigationLinkClick = (page, pageDoB) => {
    setPage(page);	
  }
    	
  return (
      <main id="main">
          
          <Header  onClick={handlePageNavigationLinkClick} name={name}/>

          {
              page==="Home"?<Home  onClick={handlePageNavigationLinkClick} name={name}/>:
                         
              <Home  onClick={handlePageNavigationLinkClick} />
          }

          
          
      </main>
  );

}

export default App;
