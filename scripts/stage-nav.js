document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.stage-nav-item');
    const sections = document.querySelectorAll('section[id]');
    const container = document.querySelector('.container.px-4.py-5');
    
    const activeSection = localStorage.getItem('activeSection') || 'introduzione';
    
    sections.forEach(section => {
        section.style.display = section.id === activeSection ? 'block' : 'none';
    });

    navItems.forEach(item => {
        const sectionId = item.getAttribute('href').substring(1);
        if (sectionId === activeSection) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            const transitionDiv = document.createElement('div');
            transitionDiv.className = 'page-transition';
            container.appendChild(transitionDiv);

            requestAnimationFrame(() => {
                transitionDiv.classList.add('active');
            });

            setTimeout(() => {
                sections.forEach(section => {
                    section.style.display = 'none';
                });

                const targetId = item.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.style.display = 'block';
                    localStorage.setItem('activeSection', targetId);
                }

                navItems.forEach(nav => nav.classList.remove('active'));
                item.classList.add('active');

                setTimeout(() => {
                    transitionDiv.classList.remove('active');
                    setTimeout(() => transitionDiv.remove(), 500);
                }, 100);
            }, 500);
        });
    });
});