import React from 'react';

const TechnologyAdvisory = (props) => {

    return ( 
        
    <main>
            
        {/*-- ======= Page Content ======= --*/}
        
        <div class="service-container">

        {/*<!-- Hero Section -->*/}
        <section class="service-hero">
            <div class="section-title service-hero-content">
                <h2 class="service-title">Strategic Technology Advisory</h2>
            </div>
        </section>

        {/*<!-- Service Details -->*/}
        <section class="service-details">
                    
                <ul class="details-list">
                    <li>
                        <div>
                            <p>
                            Expert guidance to transform your vision into actionable architecture & technology roadmaps.
                            </p>
                        </div>
                    </li>
                    <li>
                        <span class="details-icon">✓</span>
                        <div>
                            <strong>Future-proof roadmap</strong>
                            <p>
                                Turning your vision into reality needs an actionable architecture & technology roadmap. Right decisions upfront paves a solid foundation for long-term success.                                 
                            </p>
                        </div>
                    </li>
                    <li>
                        <span class="details-icon">✓</span>
                        <div>
                            <strong>Expert guidance</strong>
                            <p>
                                Our advisory services leverage decades of industry experience, deep expertise from distributed solutions to cutting-edge AI technologies and consulting across diverse lifecycle stages. This can help startups and established businesses to navigate complex technical decisions with confidence—creating future-proof solutions optimized for both performance and cost-efficiency.
                            </p>
                        </div>
                    </li>                    
                </ul> 
            
        </section>
        
        {/*<!-- Benefits Section -->*/}
        <section class="service-benefits">
            <h2 class="benefits-title">Benefits</h2>
            <div class="benefits-grid">
                <div class="benefit-card">
                    <div class="benefit-icon">🚀</div>
                    <h3 class="benefit-title">Future-proof solutions</h3>
                    <p class="benefit-description">Architecture decisions and roadmap paving foundation for long-term success</p>
                </div>
                <div class="benefit-card">
                    <div class="benefit-icon">💰</div>
                    <h3 class="benefit-title">Optimized technology investments</h3>
                    <p class="benefit-description">Right architecture upfront to save re-iterations and cost overrun when scaling</p>
                </div>
            </div>
        </section>
                
        
    </div>

        {/*-- End Page Content --*/}
    </main>

    );
}
export default TechnologyAdvisory;