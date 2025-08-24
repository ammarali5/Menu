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