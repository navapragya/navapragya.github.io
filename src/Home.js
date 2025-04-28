import React from 'react';

const Home = (props) => {
    /*
    const handlePageNavigationLinkClick = (e) => {
        //e.preventDefault(); // Prevents the default behavior of navigating to "#"
        alert('Here');
        //clickHandler();	
    }
        */

    return ( 
        <main>
            
        <section id="home" className="d-flex flex-column justify-content-center align-items-center">
            <div className="container text-center text-md-left" data-aos="fade-up" background-image="logo.png">
            <h1>{props.name}</h1>
            <img src="logo.png" alt="" width={150} height={150}/>
            <br/><br/>
            <h2>Transforming and scaling business with Agentic AI</h2>
            {/*
            <a href="#products" class="btn-get-started scrollto">Get Started</a>
            */}
            </div>
        </section>


        {/*-- ======= Products Section ======= --*/}
        <section id="products" className="services section-bg">
        <div className="container">

            <div className="section-title">
            <h2>Solutions</h2>
            </div>
            
            <div className="row">
                
            <div className="col-md-6 mt-6 mt-lg-0">
                <div className="icon-box">
                <i className="bi bi-card-checklist"></i>
                <h4>
                    <a href="#" onClick={(e) => {
                        e.preventDefault(); 
                        props.onClick('DigitalDataExtraction')
                    }}>
                        Digital Data Extraction
                    </a>
                </h4>
                <p>Extract data from your documents in csv format. Save hassles of reading and typing. Add customized processing to your need</p>
                </div>
            </div>
            <div className="col-md-6 mt-6 mt-lg-0">
                <div className="icon-box">
                <i className="bi bi-soundwave"></i>
                <h4><a href="#">Audio Content Generation</a></h4>
                <p>Turn your text into an audio. You can choose voice. Deliver a great experience to your audience</p>
                </div>
            </div>
            <div className="col-md-6 mt-6 mt-lg-0">
                <div className="icon-box">
                <i className="bi bi-microsoft"></i>
                <h4><a href="#">Presentation Generation</a></h4>
                <p>Turn your raw data into a beautiful presentation</p>
                </div>
            </div>
            
            </div>

        </div>
        </section>  
        {/*-- End Products Section --*/}


        {/*-- ======= Services Section ======= --*/}
        <section id="services" className="services section-bg">
        <div className="container">

            <div className="section-title">
            <h2>Services</h2>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <div className="icon-box">
                    <i className="bi bi-briefcase"></i>
                    <h4><a href="#">Apply Customization</a></h4>
                    <p>Tailor our product offerings further to you specific need</p>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="icon-box">
                    <i className="bi bi-briefcase"></i>
                    <h4><a href="#">Consulting</a></h4>
                    <p>Our experience for most optimal cost-effective solution to your business problem</p>
                    </div>
                </div>
            </div>

        </div>
        </section>  
        {/*-- End Services Section --*/}

        {/*-- ======= About Section ======= --*/}
        <section id="about" className="about section-bg">
        <div className="container">

            <div className="section-title">
                <h2>About</h2>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <p>The name 'Nava Pragya' is derived from the Sanskrit words Nava (new) and Pragya (wisdom, intelligence).</p>
                    <p>We are a small team of experienced software professionals wih decades of experience, with a passion for transforming and scaling businesses with power of latest AI, and other technologies.</p>
                    {/* 
                    <ul>
                        <li><i class="bx bx-check-double"></i> Digital transformation journey</li>
                        <li><i class="bx bx-check-double"></i> Cloud-native solution for specific business domain</li>
                        <li><i class="bx bx-check-double"></i> Leverage power latest Generative AI to accelerate your business</li>
                    </ul>
                    */}
                </div>
            </div>

        </div>
        </section> 
        {/*-- End About Section --*/}

        {/*-- ======= Contact Section ======= --*/}
        <section id="contact" className="contact section-bg">
        <div className="container">

            <div className="section-title">
            <h2>Contact</h2>
            </div>

            <div className="col-lg-12" align="center">
                    <div>
                        <a href="#" onClick={() => window.location = 'mailto:enterprisecloudarch@gmail.com'}>
                            <i className="bi bi-envelope"></i> enterprisecloudarch@gmail.com
                        </a>
                    </div>
                    {
                    /*    
                    <div className="col-lg-6 info mt-6 mt-lg-0">
                    <i className="bi bi-phone"></i>
                    <h5>Call:</h5>+91 9898 989 898
                    </div>
                    */
                    }

            </div>

            {/*        
            <div className="col-lg-12"> 
                <form action="forms/contact.php" method="post" role="form" className="php-email-form">

                    
                    <div className="row">
                        <div className="col-md-6 form-group">
                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
                        </div>
                        <div className="col-md-6 form-group mt-3 mt-md-0">
                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
                        </div>
                    </div>
                    <div className="form-group mt-3">
                        <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required/>
                    </div>
                    <div className="form-group mt-3">
                        <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                    </div>
                    <div className="my-3">
                        <div className="loading">Loading</div>
                        <div className="error-message"></div>
                        <div className="sent-message">Your message has been sent. Thank you!</div>
                    </div>
                    
                    <div className="text-center"><button type="submit">Send Message</button></div>
                </form>    
            </div>
            */}
        </div>
        </section>
        {/*-- End Contact Section --*/}



        </main>

    );
}
export default Home;