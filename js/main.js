
        // Scroll Progress Indicator
        const scrollProgress = document.getElementById('scrollProgress');
        if (scrollProgress) {
            const updateProgress = () => {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const progress = (scrollTop / scrollHeight) * 100;
                scrollProgress.style.width = `${Math.min(progress, 100)}%`;
            };
            window.addEventListener('scroll', updateProgress, { passive: true });
            updateProgress(); // Initial
        }

const toggle = document.getElementById('themeToggle');
        const body = document.body;
        const icon = toggle.querySelector('i');

        const updateThemeIcon = () => {
            if (body.classList.contains('dark')) {
                icon.className = 'fas fa-moon';
            } else {
                icon.className = 'fas fa-sun';
            }
        };

        toggle.addEventListener('click', () => {
            body.classList.toggle('dark');
            body.classList.toggle('light');
            updateThemeIcon();
            // Save preference
            localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
        });

        // Load saved theme
        const saved = localStorage.getItem('theme');
        if (saved) {
            body.classList.remove('dark', 'light');
            body.classList.add(saved);
            updateThemeIcon();
        } else {
            // Check system preference
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (prefersDark) {
                body.classList.add('dark');
            } else {
                body.classList.add('light');
            }
            updateThemeIcon();
        }

        // Optional: Intersection Observer for fade-in on scroll (fallback if CSS animation not supported)
        const sections = document.querySelectorAll('.section');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        sections.forEach(section => {
            observer.observe(section);
        });

        // Toggle experience bullets
        document.querySelectorAll('.toggle-btn').forEach(button => {
            button.addEventListener('click', function() {
                const experienceItem = this.closest('.experience-item');
                experienceItem.classList.toggle('expanded');
                this.textContent = experienceItem.classList.contains('expanded') ? 'Read less' : 'Read more';
            });
        });
        

        // Courses toggle
        const coursesToggle = document.querySelector('.courses-toggle');
        if (coursesToggle) {
            coursesToggle.addEventListener('click', function() {
                const section = this.closest('.courses-section');
                const isExpanded = section.classList.toggle('expanded');
                this.setAttribute('aria-expanded', isExpanded);
                const icon = this.querySelector('i.fa-chevron-down, i.fa-chevron-up');
                if (icon) {
                    icon.classList.toggle('fa-chevron-down');
                    icon.classList.toggle('fa-chevron-up');
                }
            });
        }
        