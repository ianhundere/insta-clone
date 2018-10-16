const instaArr = [
    'images/1.jpeg', 
    'images/2.jpeg', 
    'images/3.jpeg',
    'images/4.jpeg',
    'images/5.jpeg', 
    'images/6.jpeg', 
    'images/7.jpeg', 
    'images/8.jpeg', 
    'images/9.jpeg'
];

const largeContainer = document.querySelector('.looks-good > img');
const thumbContainer = document.querySelector('.thumb-container');

let realImgPath = instaArr.map(href => {
    let link = document.createElement('a');
    link.href = href;
    return link.href;
});

renderThumbnails = (arr) => {
    arr.forEach(image => {
        const thumbnail = document.createElement('img');
        thumbnail.setAttribute('alt', 'kids');
        thumbnail.setAttribute('src', image);
        thumbContainer.appendChild(thumbnail);
        thumbnail.addEventListener('click', (e) => {
            // console.log(e);
            largeContainer.setAttribute('src',e.target.src);
            largeContainer.classList.toggle("toggle");
        });
    });
};

largeContainer.addEventListener('click', () => {
    largeContainer.classList.add("toggle");
});

window.addEventListener('keydown', (event) => {
    if (event.keyCode === 27) {
        largeContainer.classList.add('toggle');
    };
});

const changeImage = (dir) => {
    const currentSrc = largeContainer.src;
    let nextPosition = realImgPath.indexOf(currentSrc) + dir;
    if (nextPosition > realImgPath.length - 1) nextPosition = 0;
    if (nextPosition < 0) nextPosition = realImgPath.length - 1;
    largeContainer.src = realImgPath[nextPosition];
};

window.addEventListener('keydown', (event) => {
    if (event.keyCode === 39) {
        changeImage(-1);
    }
    else if (event.keyCode === 37) {
        changeImage(1);
    }
});

renderThumbnails(instaArr);

// function changeImage(dir) {
//     largeContainer.src = instaArr[instaArr.indexOf(largeContainer.src) + dir] || instaArr[dir ? instaArr.length - 1 : 0];
// }

// const outputImg = document.querySelector('[data-img]');

// outputImg.addEventListener('click', () => {
//     outputImg.setAttribute('src', instaArr[0].url);
// });

// // function that generates an img element
// function createImage(imageURL) {
//     const theImage = document.createElement('img');
    
//     theImage.src = imageURL;
//     theImage.setAttribute('src', imageURL);

//     // add an event Listener to the image
//     theImage.addEventListener('click', function (event) {
//         console.log('hello');
//         // the element that got clicked is accessible
//         // as  `event.target`
//         // and, i can read the `src` attribute!
//         console.log(event.target.src);

//         // i can now set the outputElemet's src  
//         // to event.target.src!
//     });
    
//     return theImage;
// }

// // function that generates the thumbnail div
// function createThumbnail(url) {
//     const theContainer = document.createElement('div');
//     theContainer.classList.add('thumb-item');
//     theContainer.appendChild(createImage(url));

//     return theContainer;
// }

// // just draw a thumbnail to the body 
// // so we can test the click event
// let firstImageURL = instaArr[0];
// let testThumb = createThumbnail(firstImageURL);
// document.body.appendChild(testThumb);