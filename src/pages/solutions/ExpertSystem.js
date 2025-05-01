import React from 'react';

const ExpertSystem = (props) => {

    return ( 
        
    <main>
            
        {/*-- ======= Page Content ======= --*/}
        
        <div class="service-container">

        {/*<!-- Hero Section -->*/}
        <section class="service-hero">
            <div class="section-title service-hero-content">
                <h2 class="service-title">Intelligent AI Systems</h2>
            </div>
        </section>

        {/*<!-- Service Details -->*/}
        <section class="service-details">
                    
                <ul class="details-list">
                    <li>
                        <div>
                            <p>
                            Transform your customer interactions with AI systems.
                            </p>
                        </div>
                    </li>
                    <li>
                        <span class="details-icon">✓</span>
                        <div>
                            <strong>Knowledge-based Expert AI Systems</strong>
                            <p>
                                Build customized AI solutions that handle complex interactions with zero human intervention. Our systems engage with your customers, gather relevant data, and generate actionable insights—all while maintaining a natural conversational experience tailored to your industry's specific needs.
                            </p>
                        </div>
                    </li>
                    <li>
                        <span class="details-icon">✓</span>
                        <div>
                            <strong>Intelligent Process Automation</strong>
                            <p>Transform your customer interactions with AI systems that simultaneously engage users and collect valuable data. Our solutions seamlessly automate multi-step processes—from initial engagement to final reporting—allowing your team to focus on high-value activities while improving consistency and availability of your services.</p>
                        </div>
                    </li>
                </ul> 
            
        </section>

        {/*<!-- Video Showcase -->*/}
        <section class="service-video">
            {/*<p class="service-tagline">* Demonstration video coming soon</p>*/}
            <p class="service-tagline">* Please view in full screen mode</p>
            <div class="video-container">
                <iframe class="responsive-iframe" 
                    src="https://aimindpro.s3.ap-south-1.amazonaws.com/Medical-PreInterview.mp4" 
                    frameborder="0" 
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen
                    >
                </iframe>
            </div>
            
        </section>
        
        {/*<!-- Benefits Section -->*/}
        <section class="service-benefits">
            <h2 class="benefits-title">Benefits</h2>
            <div class="benefits-grid">
                <div class="benefit-card">
                    <div class="benefit-icon">💡</div>
                    <h3 class="benefit-title">Improved & consistent experience</h3>
                </div>
                <div class="benefit-card">
                    <div class="benefit-icon">🧠</div>
                    <h3 class="benefit-title">Enhanced decision support</h3>
                </div>
                <div class="benefit-card">
                    <div class="benefit-icon">⚖️</div>
                    <h3 class="benefit-title">Rapid scalability</h3>
                </div> 
                <div class="benefit-card">
                    <div class="benefit-icon">👨</div>
                    <h3 class="benefit-title">Robust Operation</h3>
                </div>
            </div>
        </section>
                
        
    </div>

        {/*-- End Page Content --*/}
    </main>

    );
}
export default ExpertSystem;