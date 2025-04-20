document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                entry.target.classList.add('animate-active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    const animatedElements = document.querySelectorAll(
        '.animate-fade-in, .animate-slide-in, .animate-scale-in, .animate-slide-right, .animate-pop, .animate-rotate'
    );
    
    animatedElements.forEach(element => {
        element.style.animationPlayState = 'paused';
        observer.observe(element);
    });

    const interactiveElements = document.querySelectorAll('a, button, .hover-lift, .hover-glow, .hover-split');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            const cursor = document.querySelector('.cursor-dot');
            const cursorOutline = document.querySelector('.cursor-dot-outline');
            if (cursor && cursorOutline) {
                cursor.classList.add('cursor-hover');
                cursorOutline.classList.add('cursor-hover');
            }
        });
        
        el.addEventListener('mouseleave', () => {
            const cursor = document.querySelector('.cursor-dot');
            const cursorOutline = document.querySelector('.cursor-dot-outline');
            if (cursor && cursorOutline) {
                cursor.classList.remove('cursor-hover');
                cursorOutline.classList.remove('cursor-hover');
            }
        });
    });

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.animate-scroll').forEach((el) => {
        scrollObserver.observe(el);
    });

    const stageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.2
    });

    document.querySelectorAll('.stage-step').forEach(step => {
        stageObserver.observe(step);
    });
});