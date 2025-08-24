// call button
const callBtn = document.querySelector('.call-btn');
const callOptions = document.querySelector('.call-options');

callBtn.addEventListener('click', () => {
    callOptions.classList.toggle('show');
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.call-menu')) {
        callOptions.classList.remove('show');
    }
});




// menu images
const images = document.querySelectorAll('.menuImg')
const overlay = document.getElementById("overlay");
const overlayImg = document.getElementById("overlayImg");
const closeBtn = document.getElementById("close");

images.forEach(img => {
    img.addEventListener("click", () => {
        overlay.style.display = "flex";
        overlayImg.src = img.src;
    });
});

closeBtn.addEventListener("click", () => {
    overlay.style.display = "none";
});

overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
        overlay.style.display = "none";
    }
});