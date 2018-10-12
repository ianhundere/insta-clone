const instaArr = ['images/1.jpeg', 'images/1.jpeg', 'images/1.jpeg','images/1.jpeg',
    'images/1.jpeg', 'images/1.jpeg', 'images/1.jpeg','images/1.jpeg',
    'images/1.jpeg', 'images/1.jpeg','images/1.jpeg'];

const outputImg = document.querySelector('[data-img]');

triggerElement.addEventListener('click', () => {
    randomStrat(instaArr);
    outputImg.setAttribute('src', instaArr[0].url);
});