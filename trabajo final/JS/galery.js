// gallery.js
document.addEventListener('DOMContentLoaded', function() {
    let gallery = document.querySelector('.gallery');
    let images = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg'
    ];

    images.forEach(src => {
        let img = document.createElement('img');
        img.src = src;
        gallery.appendChild(img);
    });
});
