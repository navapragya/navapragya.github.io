import React from 'react';

const DigitalProcessing = (props) => {

    return ( 
        
    <main>
            
        {/*-- ======= Page Content ======= --*/}
        
        <div class="service-container">

        {/*<!-- Hero Section -->*/}
        <section class="service-hero">
            <div class="service-hero-content">
                <h1 class="service-title">Digital Document Processing with Agentic AI</h1>
            </div>
        </section>

        {/*<!-- Service Details -->*/}
        <section class="service-details">
                    
                <ul class="details-list">
                    <li>
                        <div>
                            <p>
                            Automate digital document processing with power of modern AI agents.
                            </p>
                        </div>
                    </li>
                    <li>
                        <span class="details-icon">✓</span>
                        <div>
                            <strong>Website Design & Development</strong>
                            <p>Custom-designed websites that reflect your brand identity and business goals. We build websites from scratch, focusing on user experience, aesthetics, and functionality.</p>
                        </div>
                    </li>
                    <li>
                        <span class="details-icon">✓</span>
                        <div>
                            <strong>Website Maintenance & Support</strong>
                            <p>Ongoing maintenance packages to keep your website secure, updated, and performing at its best. Regular backups, security scans, and performance optimizations.</p>
                        </div>
                    </li>
                </ul> 
            
        </section>

        {/*<!-- Video Showcase -->*/}
        <section class="service-video">
            <div class="video-container">
                <iframe class="responsive-iframe" 
                    src="https://aimindpro.s3.ap-south-1.amazonaws.com/DigitalDataExtraction.mp4" 
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
                    <div class="benefit-icon">🎨</div>
                    <h3 class="benefit-title">Unique Design</h3>
                    <p class="benefit-description">Tailored specifically for your business process and users</p>
                </div>
                <div class="benefit-card">
                    <div class="benefit-icon">🚀</div>
                    <h3 class="benefit-title">Performance & Cost Optimization</h3>
                    <p class="benefit-description">Reduced manual intervention means better performance, less cost</p>
                </div>
                <div class="benefit-card">
                    <div class="benefit-icon">👩👨</div>
                    <h3 class="benefit-title">User Experience</h3>
                    <p class="benefit-description">Higher satisfaction index for customers, partners & users</p>
                </div>
            </div>
        </section>
                
        
    </div>

        {/*-- End Page Content --*/}
    </main>

    );
}
export default DigitalProcessing;