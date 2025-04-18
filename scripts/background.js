function createCircles() {
    const background = document.querySelector('.animated-background');
    const circleCount = 250;

    for (let i = 0; i < circleCount; i++) {
        const circle = document.createElement('div');
        circle.className = 'circle';
        
        const size = Math.floor(Math.random() * 3) + 2; 
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        
        circle.style.left = `${Math.random() * 100}%`;
        circle.style.animationDuration = `${Math.random() * 10 + 15}s`;
        circle.style.animationDelay = `${Math.random() * 20}s`;
        circle.style.opacity = `${Math.random() * 0.3 + 0.2}`;
        
        background.appendChild(circle);
    }
}

document.addEventListener('DOMContentLoaded', createCircles);