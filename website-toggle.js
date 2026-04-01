// Toggle functionality for experience details
document.addEventListener('DOMContentLoaded', function() {
    // Experience toggle buttons
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const experienceItem = this.closest('.experience-item');
            const bullets = experienceItem.querySelector('.experience-bullets');
            const isHidden = bullets.style.display === 'none' || bullets.style.display === '';
            
            if (isHidden) {
                bullets.style.display = 'block';
                this.textContent = 'Read less';
            } else {
                bullets.style.display = 'none';
                this.textContent = 'Read more';
            }
        });
    });

});