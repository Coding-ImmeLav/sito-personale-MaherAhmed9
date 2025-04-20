document.addEventListener('DOMContentLoaded', () => {
    const transitionElement = document.createElement('div');
    transitionElement.className = 'page-transition';
    document.body.appendChild(transitionElement);
    
    document.querySelectorAll('a:not([target="_blank"])').forEach(link => {
        link.addEventListener('click', e => {
            if (link.hostname === window.location.hostname && 
                !link.hash && 
                link.pathname !== window.location.pathname) { 
                
                e.preventDefault();
                transitionElement.classList.add('active');
                setTimeout(() => {
                    window.location = link.href;
                }, 500);
            }
        });
    });
});