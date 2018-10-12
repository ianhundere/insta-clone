const instaArr = ['https://i.imgur.com/nxUyI.png','imgur.com/QuOfz.png','x.imgur.com/ezN8FGp.jpg','http://x.imgur.com/ONp7H.png',
'http://x.imgur.com/ptBNQ.png','http://x.imgur.com/5hZHV.png','http://x.imgur.com/usBXZ.png','http://x.imgur.com/oIPtI.png',
'http://x.imgur.com/Uuya4.png','http://x.imgur.com/L629C.png','http://x.imgur.com/dE8dQ.png'];

const outputImg = document.querySelector('[data-img]');

triggerElement.addEventListener('click', () => {
    randomStrat(instaArr);
    outputImg.setAttribute('src', instaArr[0].url);
});