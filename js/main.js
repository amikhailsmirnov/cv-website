// ==========================================================================
// Mikhail Smirnov's CV Website - JavaScript
// ==========================================================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initThemeToggle();
    initScrollProgress();
    initAnimations();
    initCollapsibleSections();
    populateExperienceTimeline();
    populateEducationSection();
    populateSkillsSection();
    initTypewriterEffect();
    
    // Check for saved theme preference
    checkSavedTheme();
});

// ==========================================================================
// Theme Toggle Functionality
// ==========================================================================
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;
    
    themeToggle.addEventListener('click', function() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        
        if (isDark) {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
        
        // Trigger reflow for CSS transitions
        document.body.offsetHeight;
    });
}

function checkSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
    }
}

// ==========================================================================
// Scroll Progress Indicator
// ==========================================================================
function initScrollProgress() {
    const scrollProgress = document.getElementById('scroll-progress');
    if (!scrollProgress) return;
    
    window.addEventListener('scroll', function() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        scrollProgress.style.width = scrolled + '%';
    });
}

// ==========================================================================
// Animation on Scroll
// ==========================================================================
function initAnimations() {
    const animatedElements = document.querySelectorAll('.experience-group, .education-item, .skills-category, .section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                // Add specific animation classes based on element type
                if (entry.target.classList.contains('skills-category')) {
                    entry.target.querySelector('.skills-grid')?.classList.add('animate-gradientShift');
                }
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// ==========================================================================
// Collapsible Sections (Courses & Certifications)
// ==========================================================================
function initCollapsibleSections() {
    const coursesToggle = document.querySelector('.courses-toggle');
    const coursesContent = document.querySelector('.courses-content');
    
    if (coursesToggle && coursesContent) {
        coursesToggle.addEventListener('click', function() {
            const isOpen = coursesToggle.getAttribute('aria-expanded') === 'true';
            
            coursesToggle.setAttribute('aria-expanded', String(!isOpen));
            coursesContent.classList.toggle('active');
            
            // Change icon
            const icon = coursesToggle.querySelector('.fas');
            if (icon) {
                icon.classList.toggle('fa-chevron-down');
                icon.classList.toggle('fa-chevron-up');
            }
        });
    }
}

// ==========================================================================
// Populate Experience Timeline
// ==========================================================================
function populateExperienceTimeline() {
    const timeline = document.querySelector('.timeline');
    if (!timeline) return;
    
    // Experience data (in a real scenario, this would come from a JSON file or API)
    const experienceData = [
        {
            "company": "Angeline Boating Amsterdam",
            "location": "North Holland, Netherlands",
            "period": "June 2015 – August 2015",
            "position": "Hotel Boat Crew Member",
            "summary": "Provided hospitality services on luxury hotel boats in Amsterdam, ensuring exceptional guest experiences and maintaining high standards of service.",
            "achievements": [
                "Delivered exceptional hospitality service to international guests on luxury hotel boats",
                "Maintained impeccable cleanliness and presentation standards across all guest areas",
                "Assisted with guest check-in/check-out processes and luggage handling",
                "Contributed to positive guest reviews and repeat business through attentive service"
            ]
        },
        {
            "company": "PartyTeam Marbella",
            "location": "Andalusia, Spain",
            "period": "October 2015 – November 2019",
            "position": "Events Lead",
            "summary": "Led end-to-end event planning and execution for corporate and entertainment events, managing budgets up to $500K and coordinating logistics for 500+ attendees.",
            "achievements": [
                "Planned and executed 50+ corporate events, conferences, and entertainment shows annually",
                "Managed event budgets ranging from $50K to $500K, consistently delivering under budget by 15%",
                "Coordinated logistics for international events with up to 500+ attendees across multiple venues",
                "Developed vendor management system that reduced costs by 25% while maintaining quality standards"
            ]
        },
        {
            "company": "Air Agency Marbella",
            "location": "Andalusia, Spain",
            "period": "August 2017 – October 2019",
            "position": "Social Media Team Lead",
            "summary": "Led social media strategy and content creation for boutique travel agency, growing online presence and engagement across multiple platforms.",
            "achievements": [
                "Developed and executed social media strategies that increased follower count by 300% across Instagram and Facebook",
                "Managed content calendar and produced high-quality visual content showcasing travel destinations and experiences",
                "Analyzed engagement metrics and optimized posting schedules, improving interaction rates by 45%",
                "Collaborated with marketing team to integrate social campaigns with broader marketing initiatives"
            ]
        },
        {
            "company": "Keywords Studios Moscow",
            "location": "Russia",
            "period": "October 2021 – April 2023",
            "position": "Customer Experience Manager",
            "summary": "Managed end-to-end customer experience for gaming localization projects, ensuring high-quality delivery and maintaining 95%+ customer satisfaction ratings across international clients.",
            "achievements": [
                "Led customer experience team of 12 specialists handling VIP clients and complex localization projects",
                "Implemented customer feedback system that improved satisfaction scores by 25% within 6 months",
                "Reduced average response time to customer inquiries by 40% through process optimization",
                "Developed customer retention programs that decreased churn rate by 30%"
            ]
        },
        {
            "company": "afp.ai",
            "location": "",
            "period": "April 2023 – January 2024",
            "position": "Partnerships Manager",
            "summary": "Managed strategic publisher and agency partnerships, driving business development initiatives that increased ad inventory by 35% and improved CPM rates by 22% through optimized deal structures.",
            "achievements": [
                "Negotiated and closed 15+ premium publisher deals increasing available ad inventory by 35%",
                "Developed partnership tier system that improved partner retention and satisfaction scores by 40%",
                "Created custom reporting dashboard providing real-time insights into partnership performance and revenue trends",
                "Led cross-functional initiatives between product, sales, and marketing teams to align partnership strategies with company goals"
            ]
        },
        {
            "company": "",
            "location": "",
            "period": "February 2024 – Present",
            "position": "Head of Business Development",
            "summary": "Driving revenue growth and strategic partnerships in the adtech space, leading BD initiatives that increased publisher network by 40% and agency partnerships by 25% within first year.",
            "achievements": [
                "Developed and executed partnership strategy resulting in 3 major enterprise deals worth $2.1M+",
                "Built and mentored high-performing BD team of 5 specialists, improving team productivity by 60%",
                "Launched innovative revenue-sharing model that increased partner retention by 45%",
                "Spearheaded international expansion into LATAM and GCC markets, establishing presence in 8 new countries"
            ]
        },
        {
            "company": "Xenara Inc.",
            "location": "",
            "period": "June 2025 – November 2025",
            "position": "Head of Sales (Part-time)",
            "summary": "Led sales strategy and execution for B2B SaaS products, achieving 150% YoY revenue growth and building high-performing sales teams across international markets.",
            "achievements": [
                "Achieved 150% year-over-year revenue growth through strategic territory expansion and new customer acquisition",
                "Built and managed high-performing sales team of 8 representatives across EMEA and LATAM regions",
                "Implemented sales enablement programs that reduced ramp-up time for new hires by 40%",
                "Developed and executed channel partnership strategy resulting in 12 new strategic alliances"
            ]
        },
        {
            "company": "GoMobile",
            "location": "",
            "period": "October 2025 – Present",
            "position": "Automation Lead (Part-time)",
            "summary": "Leading automation initiatives to streamline business processes and improve operational efficiency through AI-driven solutions and workflow optimization.",
            "achievements": [
                "Implemented RPA solutions reducing manual processing time by 70%",
                "Developed custom automation workflows for lead nurturing and customer onboarding",
                "Integrated AI-powered chatbots improving customer response time by 80%",
                "Created dashboard analytics for real-time performance monitoring and KPI tracking"
            ]
        }
    ];
    
    // Populate timeline with experience data
    experienceData.forEach((exp, index) => {
        const experienceGroup = document.createElement('section');
        experienceGroup.className = 'experience-group';
        
        // Alternate sides for timeline effect
        if (index % 2 === 0) {
            experienceGroup.style.left = '0';
            experienceGroup.style.transformOrigin = 'left';
        } else {
            experienceGroup.style.right = '0';
            experienceGroup.style.transformOrigin = 'right';
        }
        
        experienceGroup.innerHTML = `
            <h2 class="company-name">${exp.company}</h2>
            ${exp.location ? `<p class="company-description">${exp.location}</p>` : ''}
            <div class="experience-item">
                <div class="experience-header">
                    <div class="experience-dates">${exp.period}</div>
                    <div class="experience-info">
                        <h3>${exp.position}</h3>
                        <p class="professional-summary">${exp.summary}</p>
                    </div>
                </div>
                <ul class="experience-bullets">
                    ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                </ul>
                <button class="toggle-btn" aria-label="Toggle details">Read more</button>
            </div>
        `;
        
        timeline.appendChild(experienceGroup);
    });
    
    // Initialize toggle buttons for experience details
    initExperienceToggles();
}

function initExperienceToggles() {
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const experienceItem = this.closest('.experience-item');
            const bullets = experienceItem.querySelector('.experience-bullets');
            
            const isVisible = bullets.style.maxHeight && bullets.style.maxHeight !== '0px';
            
            if (isVisible) {
                bullets.style.maxHeight = null;
                this.innerHTML = 'Read more';
                this.setAttribute('aria-label', 'Toggle details');
            } else {
                bullets.style.maxHeight = bullets.scrollHeight + 'px';
                this.innerHTML = '<i class="fas fa-times"></i>';
                this.setAttribute('aria-label', 'Hide details');
            }
        });
    });
}

// ==========================================================================
// Populate Education Section
// ==========================================================================
function populateEducationSection() {
    const educationItemsContainer = document.querySelector('.education-items');
    const coursesContent = document.querySelector('.courses-content');
    
    if (!educationItemsContainer || !coursesContent) return;
    
    // Education data
    const educationData = {
        "formal": [
            {
                "degree": "Bachelor's degree, Tourism",
                "institution": "Universidad Europea Miguel de Cervantes",
                "period": "September 2017 – September 2021",
                "icon": "fas fa-graduation-cap"
            },
            {
                "degree": "High School Diploma, Tourism and Travel Services Management",
                "institution": "LAUDE San Pedro International College",
                "period": "September 2009 – June 2017",
                "icon": "fas fa-high-school"
            }
        ],
        "courses": [
            {
                "degree": "Associate's degree, Radio and Television",
                "institution": "The Academy of Radio and Tv Broadcasting",
                "period": "January 2021 – September 2021",
                "icon": "fas fa-tv"
            },
            {
                "degree": "Associate's degree, Culinary Arts/Chef Training",
                "institution": "Novikov Elite Culinary School",
                "period": "January 2020 – January 2021",
                "icon": "fas fa-utensils"
            },
            {
                "degree": "Associate's degree, Mobile App Developing",
                "institution": "Hello Coding",
                "period": "July 2017 – July 2019",
                "icon": "fas fa-mobile-alt"
            }
        ]
    };
    
    // Populate formal education
    educationData.formal.forEach(edu => {
        const educationItem = document.createElement('div');
        educationItem.className = 'education-item';
        
        educationItem.innerHTML = `
            <div class="education-icon">
                <i class="${edu.icon}"></i>
            </div>
            <div class="education-details">
                <div class="education-degree">${edu.degree}</div>
                <div class="education-institution">${edu.institution}</div>
                <div class="education-period">${edu.period}</div>
            </div>
        `;
        
        educationItemsContainer.appendChild(educationItem);
    });
    
    // Populate courses content
    educationData.courses.forEach(course => {
        const courseItem = document.createElement('div');
        courseItem.className = 'education-item';
        
        courseItem.innerHTML = `
            <div class="education-icon">
                <i class="${course.icon}"></i>
            </div>
            <div class="education-details">
                <div class="education-degree">${course.degree}</div>
                <div class="education-institution">${course.institution}</div>
                <div class="education-period">${course.period}</div>
            </div>
        `;
        
        coursesContent.appendChild(courseItem);
    });
}

// ==========================================================================
// Populate Skills Section
// ==========================================================================
function populateSkillsSection() {
    const skillsContainer = document.querySelector('.skills-container');
    if (!skillsContainer) return;
    
    // Skills data
    const skillsData = {
        "Technical & Automation": [
            { name: "AI‑Driven Automation", icon: "fas fa-robot" },
            { name: "n8n", icon: "fas fa-bolt" },
            { name: "LLM Deployment", icon: "fas fa-brain" },
            { name: "RAG Databases", icon: "fas fa-database" },
            { name: "PostgreSQL", icon: "fas fa-table" },
            { name: "Python SMM Bots", icon: "fas fa-robot" },
            { name: "OpenClaw", icon: "fas fa-hand-paper" },
            { name: "Yandex AI Studio", icon: "fas fa-cloud" },
            { name: "Ad Tech", icon: "fas fa-ad" }
        ],
        "Business & Leadership": [
            { name: "Business Development", icon: "fas fa-chart-line" },
            { name: "Partnership Management", icon: "fas fa-handshake" },
            { name: "CRM Optimization", icon: "fas fa-cogs" },
            { name: "Sales Strategy", icon: "fas fa-comments-dollar" },
            { name: "Lead Generation", icon: "fas fa-magnet" },
            { name: "Multi‑Channel Campaigns", icon: "fas fa-broadcast-tower" },
            { name: "Customer Experience", icon: "fas fa-user-friends" },
            { name: "Event Management", icon: "fas fa-calendar-alt" },
            { name: "VIP Relations", icon: "fas fa-user-tie" },
            { name: "Director‑Level Leadership", icon: "fas fa-user-tie" },
            { name: "Strategic Growth", icon: "fas fa-rocket" }
        ]
    };
    
    // Populate skills categories
    Object.entries(skillsData).forEach(([categoryName, skills]) => {
        const skillsCategory = document.createElement('div');
        skillsCategory.className = 'skills-category';
        
        skillsCategory.innerHTML = `
            <h4><i class="fas fa-microchip"></i> ${categoryName}</h4>
            <div class="skills-grid">
                ${skills.map(skill => `
                    <span class="skills-tag">
                        <i class="${skill.icon}"></i>
                        ${skill.name}
                    </span>
                `).join('')}
            </div>
        `;
        
        skillsContainer.appendChild(skillsCategory);
    });
}

// ==========================================================================
// Typewriter Effect for Summary
// ==========================================================================
function initTypewriterEffect() {
    const summaryElement = document.querySelector('.section:nth-of-type(2) .content p');
    if (!summaryElement) return;
    
    const text = summaryElement.textContent;
    summaryElement.textContent = '';
    
    let i = 0;
    const speed = 50; // typing speed in milliseconds
    
    function typeWriter() {
        if (i < text.length) {
            summaryElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    
    // Start typing after a short delay
    setTimeout(typeWriter, 500);
}

// ==========================================================================
// Loading Animation
// ==========================================================================
window.addEventListener('load', function() {
    // Add a subtle loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ==========================================================================
// Form Spam Prevention (for future contact forms)
// ==========================================================================
function preventFormSpam() {
    // This would be implemented if we had a contact form
    // For now, we're using mailto links which are spam-resistant
}

// ==========================================================================
// Performance Monitoring
// ==========================================================================
if ('performance' in window) {
    window.addEventListener('load', function() {
        setTimeout(() => {
            const timing = window.performance.timing;
            const pageLoadTime = timing.loadEventEnd - timing.navigationStart;
            console.log(`Page loaded in ${pageLoadTime}ms`);
            
            // You could send this to analytics if desired
        }, 1000);
    });
}
