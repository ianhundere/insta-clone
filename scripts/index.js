const instaArr = ['images/1.jpeg', 'images/2.jpeg', 'images/3.jpeg','images/4.jpeg',
    'images/5.jpeg', 'images/6.jpeg', 'images/7.jpeg', 'images/8.jpeg', 'images/9.jpeg'];
const containerLarge = document.querySelector('.looks-good > img');
const thumbContainer = document.querySelector('.thumb-container');

renderThumbnails = (arr) => {
    arr.forEach(image => {
        const thumbnail = document.createElement('img');
        thumbnail.setAttribute('alt', 'kids');
        thumbnail.setAttribute('src', image);
        thumbContainer.appendChild(thumbnail);
        thumbnail.addEventListener('click', (e) => {
            containerLarge.setAttribute('src',e.target.src);
            containerLarge.classList.toggle("toggle");
        });
        containerLarge.addEventListener('click', () => {
            containerLarge.classList.toggle("toggle");
        })
    })
}

renderThumbnails(instaArr);

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