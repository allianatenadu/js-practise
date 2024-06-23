let currentImageIndex = 0;
let slideshowInterval;
const images = ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg", "images/image4.jpg", "images/image5.jpg", "images/image6.jpg", "images/image7.jpg"]; // Add your images here
const pictureElement = document.getElementById('picture');
const downloadLink = document.getElementById('downloadLink');

document.getElementById('startBtn').addEventListener('click', startSlideshow);
document.getElementById('stopBtn').addEventListener('click', stopSlideshow);

function startSlideshow() {
    slideshowInterval = setInterval(nextImage, 2000); // Change image every 2 seconds
}

function stopSlideshow() {
    clearInterval(slideshowInterval);
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    const newImage = images[currentImageIndex];
    pictureElement.src = newImage;
    downloadLink.href = newImage;
    downloadLink.download = newImage;
}

