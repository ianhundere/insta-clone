const instaArr = ['images/1.jpeg', 'images/2.jpeg', 'images/3.jpeg','images/4.jpeg',
    'images/5.jpeg', 'images/6.jpeg', 'images/7.jpeg', 'images/8.jpeg', 'images/8.jpeg'];

// const outputImg = document.querySelector('[data-img]');

// triggerElement.addEventListener('click', () => {
//     randomStrat(instaArr);
//     outputImg.setAttribute('src', instaArr[0].url);
// });

// function that generates an img element
function createImage(imageURL) {
    const theImage = document.createElement('img');
    
    // theImage.src = imageURL;
    theImage.setAttribute('src', imageURL);

    // add an event Listener to the image
    theImage.addEventListener('click', function (event) {
        console.log('hello');
        // the element that got clicked is accessible
        // as  `event.target`
        // and, i can read the `src` attribute!
        console.log(event.target.src);

        // i can now set the outputElemet's src  
        // to event.target.src!
    });
    
    return theImage;
}

// function that generates the thumbnail div
function createThumbnail(url) {
    const theContainer = document.createElement('div');
    theContainer.classList.add('thumb-item');
    theContainer.appendChild(createImage(url));

    return theContainer;
}

// just draw a thumbnail to the body 
// so we can test the click event
let firstImageURL = instaArr[0];
let testThumb = createThumbnail(firstImageURL);
document.body.appendChild(testThumb);