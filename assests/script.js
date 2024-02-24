document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('backgroundMusic');
    var toggleButton = document.getElementById('toggleSound');
    var statusOn = document.querySelector('.status-on');
    var statusOff = document.querySelector('.status-off');

    function updateStatusText(isPaused) {
        if (isPaused) {
            // Slide out to the left
            statusOn.style.transform = 'translateX(-100%)';
            statusOn.style.visibility = 'hidden';
            statusOff.style.transform = 'translateX(-100%)';
            statusOff.style.visibility = 'hidden';
            toggleButton.classList.remove('gold-color'); // Remove gold color filter
        } else {
            // Slide in from the left
            statusOff.style.transform = 'translateX(0)';
            statusOff.style.visibility = 'visible';
            statusOn.style.transform = 'translateX(0)';
            statusOn.style.visibility = 'visible';
            toggleButton.classList.add('gold-color'); // Apply gold color filter
        }
    }
    toggleButton.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
        updateStatusText(audio.paused);
    });

    // Initial state check to ensure correct text and visibility on page load
    updateStatusText(audio.paused);
});

    // Clone film images for continuous scrolling effect
    const filmImages = document.querySelector('.film-images');
    if (filmImages) {
        const clone = filmImages.cloneNode(true);
        filmImages.parentNode.appendChild(clone); // Append the clone to the film-strip for continuous scrolling
    }

    // Apply click effect on film strip images for mobile users
    const images = document.querySelectorAll('.film-strip img');
    images.forEach(img => {
        img.addEventListener('click', function() {
            // Remove 'clicked' class from all images except the clicked one
            images.forEach(innerImg => {
                if (innerImg !== img) innerImg.classList.remove('clicked');
            });
            // Toggle 'clicked' class on the clicked image
            img.classList.toggle('clicked');
        });
    });
