import React from 'react';

const Home = (props) => {

    return ( 
        <main>
            
        <section id="home" class="d-flex flex-column justify-content-center align-items-center">
            <div class="container text-center text-md-left" data-aos="fade-up">
            <h1>Welcome to <span>{props.name}</span></h1>
            <br/>
            <h2>We help in advancing your business with cutting edge AI based digital products and services.</h2>
            <br/><br/>
            <a href="#products" class="btn-get-started scrollto">Get Started</a>
            </div>
        </section>


        {/*-- ======= Products Section ======= --*/}
        <section id="products" class="services section-bg">
        <div class="container">

            <div class="section-title">
            <h2>Products</h2>
            <p>We offer following products</p>
            </div>
            
            <div class="row">
                
            <div class="col-md-6 mt-6 mt-lg-0">
                <div class="icon-box">
                <i class="bi bi-card-checklist"></i>
                <h4><a href="#">Digital Data Extraction</a></h4>
                <p>Extract data from your documents in csv format. Save hassles of reading and typing. Add customized processing to your need</p>
                </div>
            </div>
            <div class="col-md-6 mt-6 mt-lg-0">
                <div class="icon-box">
                <i class="bi bi-soundwave"></i>
                <h4><a href="#">Audio Content Generation</a></h4>
                <p>Turn your text into an audio. You can choose voice. Deliver a great experience to your audience</p>
                </div>
            </div>
            <div class="col-md-6 mt-6 mt-lg-0">
                <div class="icon-box">
                <i class="bi bi-microsoft"></i>
                <h4><a href="#">Presentation Generation</a></h4>
                <p>Turn your raw data into a beautiful presentation</p>
                </div>
            </div>
            
            </div>

        </div>
        </section>  
        {/*-- End Products Section --*/}


        {/*-- ======= Services Section ======= --*/}
        <section id="services" class="services section-bg">
        <div class="container">

            <div class="section-title">
            <h2>Services</h2>
            <p>We offer following services</p>
            </div>

            <div class="row">
                <div class="col-md-6">
                    <div class="icon-box">
                    <i class="bi bi-briefcase"></i>
                    <h4><a href="#">Apply Customization</a></h4>
                    <p>Tailor our product offerings further to you specific need</p>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="icon-box">
                    <i class="bi bi-briefcase"></i>
                    <h4><a href="#">Consulting</a></h4>
                    <p>Our experience for most optimal cost-effective solution to your business problem</p>
                    </div>
                </div>
            </div>

        </div>
        </section>  
        {/*-- End Services Section --*/}

        {/*-- ======= About Section ======= --*/}
        <section id="about" class="about section-bg">
        <div class="container">

            <div class="section-title">
                <h2>About</h2>
            </div>

            <div class="row">
                <div class="col-md-12">
                    <p>We are a small team of experienced software professionals, with a passion for AI and its application in business.</p>
                    <ul>
                        <li><i class="bx bx-check-double"></i> Digital transformation journey</li>
                        <li><i class="bx bx-check-double"></i> Cloud-native solution for specific business domain</li>
                        <li><i class="bx bx-check-double"></i> Leverage power latest Generative AI to accelerate your business</li>
                    </ul>
                </div>
            </div>

        </div>
        </section> 
        {/*-- End About Section --*/}

        {/*-- ======= Contact Section ======= --*/}
        <section id="contact" class="contact section-bg">
        <div class="container">

            <div class="section-title">
            <h2>Contact</h2>
            <p>Want to discuss how to optimize your IT, and make it more business-centric?  </p>
            </div>

            <div class="col-lg-12">

                <div class="row">

                    <div class="col-lg-6 info mt-6 mt-lg-0">
                    <i class="bi bi-envelope"></i>
                    <h5>Email:</h5>enterprisecloudarch@example.com
                    </div>

                    <div class="col-lg-6 info mt-6 mt-lg-0">
                    <i class="bi bi-phone"></i>
                    <h5>Call:</h5>+91 9898 989 898
                    </div>
                </div>

            </div>

            <div class="col-lg-12">
                <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                    <div class="row">
                        <div class="col-md-6 form-group">
                            <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required/>
                        </div>
                        <div class="col-md-6 form-group mt-3 mt-md-0">
                            <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required/>
                        </div>
                    </div>
                    <div class="form-group mt-3">
                        <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required/>
                    </div>
                    <div class="form-group mt-3">
                        <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                    </div>
                    <div class="my-3">
                        <div class="loading">Loading</div>
                        <div class="error-message"></div>
                        <div class="sent-message">Your message has been sent. Thank you!</div>
                    </div>
                    <div class="text-center"><button type="submit">Send Message</button></div>
                </form>
            </div>
        </div>
        </section>
        {/*-- End Contact Section --*/}



        </main>

    );
}
export default Home;