window.addEventListener('load', function() {
    const loader = document.getElementById('loader-wrapper');
    const content = document.querySelector('.container-fluid');
    
    function hideLoader() {
        if (loader && content) {
            setTimeout(() => {
                loader.style.opacity = '0';
                loader.style.visibility = 'hidden';
                content.classList.add('loaded');
            }, 2000);
        }
    }

    if (document.readyState === 'complete') {
        hideLoader();
    } else {
        window.addEventListener('load', hideLoader);
    }
});