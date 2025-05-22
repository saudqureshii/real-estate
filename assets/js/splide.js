// Initialize the first carousel (with thumbnails)
var splide1 = new Splide('#carousel1', {
  pagination: false,
  type: 'fade',
});

// Initialize the second carousel (with thumbnails)
var splide2 = new Splide('#carousel2', {
  pagination: false,
  type: 'fade',  
});
// Initialize the third carousel (with thumbnails)
var splide3 = new Splide('#carousel3', {
  pagination: false,
  type: 'fade',  
});
// Initialize the fourth carousel (with thumbnails)
var splide4 = new Splide('#carousel4', {
  pagination: false,
  type: 'fade',  
});

// Get all thumbnail elements for carousels
var thumbnails1 = document.getElementsByClassName('thumbnail1');
var thumbnails2 = document.getElementsByClassName('thumbnail2');
var thumbnails3 = document.getElementsByClassName('thumbnail3');
var thumbnails4 = document.getElementsByClassName('thumbnail4');

var current1, current2,current3, current4;

// Attach event listeners to the thumbnails of  carousels
for (var i = 0; i < thumbnails1.length; i++) {
  initThumbnail(thumbnails1[i], i, splide1);
}

for (var i = 0; i < thumbnails2.length; i++) {
  initThumbnail(thumbnails2[i], i, splide2);
}
for (var i = 0; i < thumbnails3.length; i++) {
  initThumbnail(thumbnails3[i], i, splide3);
}
for (var i = 0; i < thumbnails4.length; i++) {
  initThumbnail(thumbnails4[i], i, splide4);
}

// Function to handle the thumbnail clicks
function initThumbnail(thumbnail, index, splideInstance) {
  thumbnail.addEventListener('click', function () {
    splideInstance.go(index);  // Navigate the corresponding Splide instance
  });
}

// Update the active thumbnail for the first carousel
splide1.on('mounted move', function () {
  var thumbnail = thumbnails1[splide1.index];
  if (thumbnail) {
    if (current1) {
      current1.classList.remove('is-active');
    }
    thumbnail.classList.add('is-active');
    current1 = thumbnail;
  }
});

// Update the active thumbnail for the second carousel
splide2.on('mounted move', function () {
  var thumbnail = thumbnails2[splide2.index];
  if (thumbnail) {
    if (current2) {
      current2.classList.remove('is-active');
    }
    thumbnail.classList.add('is-active');
    current2 = thumbnail;
  }
});
// Update the active thumbnail for the third carousel
splide3.on('mounted move', function () {
  var thumbnail = thumbnails3[splide3.index];
  if (thumbnail) {
    if (current3) {
      current3.classList.remove('is-active');
    }
    thumbnail.classList.add('is-active');
    current3 = thumbnail;
  }
});
// Update the active thumbnail for the fourth carousel
splide4.on('mounted move', function () {
  var thumbnail = thumbnails4[splide4.index];
  if (thumbnail) {
    if (current4) {
      current4.classList.remove('is-active');
    }
    thumbnail.classList.add('is-active');
    current4 = thumbnail;
  }
});

// Mount the carousels
splide1.mount();
splide2.mount();
splide3.mount();
splide4.mount();