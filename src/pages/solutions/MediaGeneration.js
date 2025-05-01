import React from 'react';

const MediaGeneration = (props) => {

    return ( 
        
    <main>
            
        {/*-- ======= Page Content ======= --*/}
        
        <div class="service-container">

        {/*<!-- Hero Section -->*/}
        <section class="service-hero">
            <div class="section-title service-hero-content">
                <h2 class="service-title">Media Generation</h2>
            </div>
        </section>

        {/*<!-- Service Details -->*/}
        <section class="service-details">
                    
                <ul class="details-list">
                    <li>
                        <div>
                            <p>
                            Transform your content into compelling lifelike AI avatars and audio.
                            </p>
                        </div>
                    </li>
                    <li>
                        <span class="details-icon">✓</span>
                        <div>
                            <strong>
                                Intelligent Avatar Presentations
                            </strong>
                            <p>
                                Transform your content with lifelike AI avatars that deliver professional presentations without the need for film crews or actors. Customize appearance, voice characteristics, and gestures to create engaging video content that aligns perfectly with your brand identity while reducing production time and costs.
                            </p>
                        </div>
                    </li>
                    <li>
                        <span class="details-icon">✓</span>
                        <div>
                            <strong>
                                Dynamic Voice Synthesis
                            </strong>
                            <p>
                            Convert your written content into compelling audio narration using our advanced AI voice technology. Select from diverse voice profiles or combine multiple voices to create a distinctive auditory experience that enhances customer engagement and strengthens your brand presence—all without traditional recording sessions.
                            </p>
                        </div>    
                    </li>
                    <li>
                        <span class="details-icon">✓</span>
                        <div>
                            <strong>
                                Seamless Content Automation
                            </strong>
                            <p>
                                Streamline your media production workflow with AI-powered tools that turn text into professional video and audio content. Our technology enables you to maintain consistent quality across all customer touchpoints while eliminating the resource demands of conventional media production.
                            </p>
                        </div>    
                    </li>
                </ul> 
            
        </section>

        {/*<!-- Video Showcase -->*/}
        <section class="service-video">
            <p class="service-tagline">* Please view in full screen mode</p>
            <div class="video-container">
                <iframe class="responsive-iframe" 
                    src="https://aimindpro.s3.ap-south-1.amazonaws.com/Avatar.mp4" 
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
                    <div class="benefit-icon">🚀</div>
                    <h3 class="benefit-title">Rapid content production</h3>
                </div>
                <div class="benefit-card">
                    <div class="benefit-icon">🎨</div>
                    <h3 class="benefit-title">Consistent brand presentation</h3>
                </div>
                <div class="benefit-card">
                    <div class="benefit-icon">💰</div>
                    <h3 class="benefit-title">Significant cost savings</h3>
                </div>
                <div class="benefit-card">
                    <div class="benefit-icon">⚖️</div>
                    <h3 class="benefit-title">On-demand scalability</h3>
                </div>                
            </div>
        </section>
                
        
    </div>

        {/*-- End Page Content --*/}
    </main>

    );
}
export default MediaGeneration;