import React from 'react';

const DigitalDataExtraction = (props) => {

    return ( 
        <main>
            
        {/*-- ======= Page Content ======= --*/}
        
        <div class="service-container">

        {/*<!-- Hero Section -->*/}
        <section class="service-hero">
            <div class="service-hero-content">
                <h1 class="service-title">Professional Web Development Services</h1>
                <p class="service-tagline">Custom-built websites that drive results for your business</p>
                <p class="service-intro">
                    We create stunning, high-performance websites tailored to your specific business needs. Our full-service web development team combines beautiful design with powerful functionality to deliver websites that not only look great but also convert visitors into customers.
                </p>
                <a href="#contact" class="service-cta">Get a Free Consultation</a>
            </div>
            <div class="service-hero-image">
                <img src="/api/placeholder/600/400" alt="Web Development Services" class="hero-img"/>
            </div>
        </section>
        
        {/*<!-- Benefits Section -->*/}
        <section class="service-benefits">
            <h2 class="benefits-title">Why Choose Our Web Development Services?</h2>
            <div class="benefits-grid">
                <div class="benefit-card">
                    <div class="benefit-icon">🎨</div>
                    <h3 class="benefit-title">Custom Design</h3>
                    <p class="benefit-description">Unique, brand-aligned websites designed specifically for your business and target audience.</p>
                </div>
                <div class="benefit-card">
                    <div class="benefit-icon">📱</div>
                    <h3 class="benefit-title">Mobile Responsive</h3>
                    <p class="benefit-description">Websites that look and function perfectly on all devices, from desktops to smartphones.</p>
                </div>
                <div class="benefit-card">
                    <div class="benefit-icon">🚀</div>
                    <h3 class="benefit-title">Performance Optimized</h3>
                    <p class="benefit-description">Lightning-fast load times and smooth interactions for better user experience and SEO.</p>
                </div>
                <div class="benefit-card">
                    <div class="benefit-icon">🔍👩 👨</div>
                    <h3 class="benefit-title">SEO-Friendly</h3>
                    <p class="benefit-description">Built with search engines in mind to help your business rank higher in search results.</p>
                </div>
            </div>
        </section>
        
        {/*<!-- Service Details -->*/}
        <section class="service-details">
            <h2 class="details-title">Comprehensive Web Development Solutions</h2>
            <p class="details-text">
                We offer end-to-end web development services that cover everything from initial concept to launch and beyond. Our team of experienced designers and developers work collaboratively to ensure your website not only meets but exceeds your expectations.
            </p>
            <ul class="details-list">
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
                        <strong>E-Commerce Solutions</strong>
                        <p>Secure, user-friendly online stores that make selling products a breeze. Complete with payment gateway integration, inventory management, and order processing.</p>
                    </div>
                </li>
                <li>
                    <span class="details-icon">✓</span>
                    <div>
                        <strong>Content Management Systems</strong>
                        <p>Easy-to-use CMS implementations that give you full control over your website content. We specialize in WordPress, Shopify, and custom CMS solutions.</p>
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
        
        {/*<!-- Our Process -->*/}
        <section class="service-process">
            <h2 class="process-title">Our Web Development Process</h2>
            <div class="process-steps">
                <div class="process-step">
                    <div class="step-number">1</div>
                    <h3 class="step-title">Discovery</h3>
                    <p class="step-description">We learn about your business, goals, target audience, and competitors to create a strategic development plan.</p>
                </div>
                <div class="process-step">
                    <div class="step-number">2</div>
                    <h3 class="step-title">Design</h3>
                    <p class="step-description">Our designers create wireframes and mockups that align with your brand and meet user experience best practices.</p>
                </div>
                <div class="process-step">
                    <div class="step-number">3</div>
                    <h3 class="step-title">Development</h3>
                    <p class="step-description">Our developers bring the designs to life, coding your website with clean, efficient, and future-proof code.</p>
                </div>
                <div class="process-step">
                    <div class="step-number">4</div>
                    <h3 class="step-title">Testing</h3>
                    <p class="step-description">Rigorous testing across devices and browsers ensures your website functions flawlessly before launch.</p>
                </div>
                <div class="process-step">
                    <div class="step-number">5</div>
                    <h3 class="step-title">Launch</h3>
                    <p class="step-description">We handle the technical aspects of launching your site and ensure a smooth transition from development to live.</p>
                </div>
            </div>
        </section>
        
        {/*<!-- Video Showcase -->*/}
        <section class="service-video">
            <h2 class="video-title">See Our Work in Action</h2>
            <div class="video-container">
                <iframe class="responsive-iframe" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Our Web Development Process" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </section>
        
        {/*<!-- Testimonials -->*/}
        <section class="service-testimonials">
            <h2 class="testimonials-title">What Our Clients Say</h2>
            <div class="testimonials-grid">
                <div class="testimonial-card">
                    <p class="testimonial-text">
                        Working with this team was a game-changer for our business. They delivered a website that perfectly captures our brand and has significantly increased our online inquiries. The entire process was smooth and professional.
                    </p>
                    <div class="testimonial-author">
                        <img src="/api/placeholder/50/50" alt="Sarah Johnson" class="author-image"/>
                        <div class="author-details">
                            <span class="author-name">Sarah Johnson</span>
                            <span class="author-title">CEO, GreenTech Solutions</span>
                        </div>
                    </div>
                </div>
                <div class="testimonial-card">
                    <p class="testimonial-text">
                        Our e-commerce website has never performed better. The team understood exactly what we needed and delivered a site that's easy to manage and has boosted our sales by 40% in just three months.
                    </p>
                    <div class="testimonial-author">
                        <img src="/api/placeholder/50/50" alt="Michael Roberts" class="author-image"/>
                        <div class="author-details">
                            <span class="author-name">Michael Roberts</span>
                            <span class="author-title">Founder, Urban Trends</span>
                        </div>
                    </div>
                </div>
                <div class="testimonial-card">
                    <p class="testimonial-text">
                        I was impressed by their attention to detail and technical expertise. They built us a complex web application that has streamlined our internal processes and saved us countless hours of manual work.
                    </p>
                    <div class="testimonial-author">
                        <img src="/api/placeholder/50/50" alt="Jennifer Patel" class="author-image"/>
                        <div class="author-details">
                            <span class="author-name">Jennifer Patel</span>
                            <span class="author-title">CTO, DataFlow Inc.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        {/*<!-- Pricing -->*/}
        <section class="service-pricing">
            <h2 class="pricing-title">Transparent Pricing Plans</h2>
            <div class="pricing-grid">
                <div class="pricing-card">
                    <div class="pricing-header">
                        <h3 class="pricing-name">Basic</h3>
                        <div class="pricing-cost">$1,999</div>
                        <div class="pricing-period">one-time payment</div>
                    </div>
                    <div class="pricing-features">
                        <div class="pricing-feature">
                            <span class="feature-icon">✓</span>
                            <span>5-page responsive website</span>
                        </div>
                        <div class="pricing-feature">
                            <span class="feature-icon">✓</span>
                            <span>Custom design</span>
                        </div>
                        <div class="pricing-feature">
                            <span class="feature-icon">✓</span>
                            <span>Mobile optimization</span>
                        </div>
                        <div class="pricing-feature">
                            <span class="feature-icon">✓</span>
                            <span>Basic SEO setup</span>
                        </div>
                        <div class="pricing-feature">
                            <span class="feature-icon">✓</span>
                            <span>Contact form</span>
                        </div>
                    </div>
                    <a href="#contact" class="pricing-cta">Get Started</a>
                </div>
                <div class="pricing-card">
                    <div class="pricing-header">
                        <h3 class="pricing-name">Business</h3>
                        <div class="pricing-cost">$3,999</div>
                        <div class="pricing-period">one-time payment</div>
                    </div>
                    <div class="pricing-features">
                        <div class="pricing-feature">
                            <span class="feature-icon">✓</span>
                            <span>10-page responsive website</span>
                        </div>
                        <div class="pricing-feature">
                            <span class="feature-icon">✓</span>
                            <span>Premium custom design</span>
                        </div>
                        <div class="pricing-feature">
                            <span class="feature-icon">✓</span>
                            <span>Content management system</span>
                        </div>
                        <div class="pricing-feature">
                            <span class="feature-icon">✓</span>
                            <span>Advanced SEO optimization</span>
                        </div>
                        <div class="pricing-feature">
                            <span class="feature-icon">✓</span>
                            <span>Blog/news section</span>
                        </div>
                        <div class="pricing-feature">
                            <span class="feature-icon">✓</span>
                            <span>Social media integration</span>
                        </div>
                    </div>
                    <a href="#contact" class="pricing-cta">Get Started</a>
                </div>
                <div class="pricing-card">
                    <div class="pricing-header">
                        <h3 class="pricing-name">E-Commerce</h3>
                        <div class="pricing-cost">$5,999</div>
                        <div class="pricing-period">one-time payment</div>
                    </div>
                    <div class="pricing-features">
                        <div class="pricing-feature">
                            <span class="feature-icon">✓</span>
                            <span>Full e-commerce website</span>
                        </div>
                        <div class="pricing-feature">
                            <span class="feature-icon">✓</span>
                            <span>Product catalog (up to 100 products)</span>
                        </div>
                        <div class="pricing-feature">
                            <span class="feature-icon">✓</span>
                            <span>Payment gateway integration</span>
                        </div>
                        <div class="pricing-feature">
                            <span class="feature-icon">✓</span>
                            <span>Inventory management</span>
                        </div>
                        <div class="pricing-feature">
                            <span class="feature-icon">✓</span>
                            <span>Order processing system</span>
                        </div>
                        <div class="pricing-feature">
                            <span class="feature-icon">✓</span>
                            <span>Customer accounts</span>
                        </div>
                    </div>
                    <a href="#contact" class="pricing-cta">Get Started</a>
                </div>
            </div>
        </section>
        
        {/*<!-- FAQ Section -->*/}
        <section class="service-faq">
            <h2 class="faq-title">Frequently Asked Questions</h2>
            <div class="faq-list">
                <div class="faq-item">
                    <div class="faq-question">How long does it take to develop a website?</div>
                    <div class="faq-answer">
                        <p>The timeline for website development varies depending on the complexity of the project. A basic website typically takes 4-6 weeks, while more complex websites like e-commerce platforms can take 8-12 weeks. During our initial consultation, we'll provide you with a specific timeline based on your requirements.</p>
                    </div>
                </div>
                <div class="faq-item">
                    <div class="faq-question">Do you provide website maintenance after launch?</div>
                    <div class="faq-answer">
                        <p>Yes, we offer various website maintenance packages to keep your site secure, updated, and performing optimally. Our maintenance services include regular backups, security updates, performance optimizations, and technical support. We recommend ongoing maintenance for all websites to ensure they remain secure and function properly.</p>
                    </div>
                </div>
                <div class="faq-item">
                    <div class="faq-question">Will my website be mobile-friendly?</div>
                    <div class="faq-answer">
                        <p>Absolutely! All websites we develop are fully responsive and mobile-friendly. We design and test each site to ensure it looks and functions perfectly across all devices, including desktops, laptops, tablets, and smartphones. Mobile optimization is a standard part of our development process, not an add-on.</p>
                    </div>
                </div>
                <div class="faq-item">
                    <div class="faq-question">Can I update the website content myself?</div>
                    <div class="faq-answer">
                        <p>Yes, we build most of our websites with user-friendly content management systems (CMS) that allow you to easily update content without technical knowledge. We provide training on how to use the CMS and create documentation specific to your website. For more complex updates, our support team is always available to assist.</p>
                    </div>
                </div>
                <div class="faq-item">
                    <div class="faq-question">What do I need to provide to get started?</div>
                    <div class="faq-answer">
                        <p>To get started, we'll need some basic information about your business, your goals for the website, any brand guidelines you have, and content (text and images) for the website. Don't worry if you don't have everything ready - we can guide you through the process and offer content creation services if needed.</p>
                    </div>
                </div>
            </div>
        </section>
    

    </div>

        {/*-- End Page Content --*/}


        </main>

    );
}
export default DigitalDataExtraction;