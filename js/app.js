const parallax_el = document.querySelectorAll('[class*="paralax"]');

let xValue = 0, yValue = 0;

window.addEventListener("mousemove", (e) => {
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;

    parallax_el.forEach(el => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px)) translateY(calc(-50% + ${yValue * speedy}px))`;
    })

})

// Image cycling on project card hover
const imageContainers = document.querySelectorAll('.image-container');

imageContainers.forEach(container => {
    const images = container.dataset.images.split(',');
    const img = container.querySelector('img');
    const originalSrc = img.src;
    let currentImageIndex = 0;
    let cycleInterval;

    container.addEventListener('mouseenter', () => {
        container.classList.add('cycling');
        
        cycleInterval = setInterval(() => {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            img.src = images[currentImageIndex];
        }, 4000);
    });

    container.addEventListener('mouseleave', () => {
        container.classList.remove('cycling');
        clearInterval(cycleInterval);
        currentImageIndex = 0;
        img.src = originalSrc;
    });
});