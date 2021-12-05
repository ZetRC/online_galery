/* console.log("hello"); */

let galery = document.querySelector(".galery");
let galeryTwo = document.querySelector(".galeryTwo");
let galeryThree = document.querySelector(".galeryThree");
let galeryFour = document.querySelector(".galeryFour");
let photosArray = [];
let photosArrayTwo = [];
let photosArrayThree = [];
let photosArrayFour = [];
let controlNumber = 0;

let getRandomImage = function (imageID) {
  let randomNumber = Math.floor(Math.random() * 1500) + 300;
  let imageSelector =
    '<img src="https://picsum.photos/1000/' +
    randomNumber +
    "?random=" +
    imageID +
    ' alt="img"></img>';
  controlNumber += 0.5;
  if (controlNumber <= 1) {
    photosArray.push(imageSelector);
  } else if (controlNumber <= 2) {
    photosArrayTwo.push(imageSelector);
  } else if (controlNumber === 2.5) {
    photosArrayThree.push(imageSelector);
  } else if (controlNumber === 3) {
    photosArrayFour.push(imageSelector);
  }

  if (controlNumber >= 3) {
    controlNumber = 0;
  }
  galery.innerHTML = photosArray.join("");
  galeryTwo.innerHTML = photosArrayTwo.join("");
  galeryThree.innerHTML = photosArrayThree.join("");
  galeryFour.innerHTML = photosArrayFour.join("");
};

/* console.log(photosArray);
console.log(photosArrayTwo);
console.log(photosArrayThree);
console.log(photosArrayFour); */

let iterationNumber = 0;
let imageNumber = 30;
while (iterationNumber <= imageNumber) {
  getRandomImage(iterationNumber);
  iterationNumber++;
}

/* let listMobile = document.querySelector(".listMobile");
let mobileNavbarButton = document.querySelector(".mobileNavbarButton");
let booleanValue = false;

mobileNavbarButton.addEventListener("click", function () {
  booleanValue = !booleanValue;

  if (booleanValue === true) {
    listMobile.animate([{ transform: "translateX(0)" }], {
      duration: 200,
      fill: "forwards",
    });
  } else {
    listMobile.animate([{ transform: "translateX(-100vh)" }], {
      duration: 200,
      fill: "forwards",
    });
  }
}); */

function getScrollPercent() {
  var h = document.documentElement,
    b = document.body,
    st = "scrollTop",
    sh = "scrollHeight";

  var percent = ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
  return percent;
}

setTimeout(() => {
  setInterval(() => {
    getScrollPercent();

    let percent = getScrollPercent();
    console.log(percent);
    if (percent >= 60) {
      imageNumber += 10;
      while (iterationNumber < imageNumber) {
        getRandomImage(iterationNumber);
        iterationNumber++;
      }
    }
  }, 1000);
}, 2000);

function getScrollPercent() {
  var h = document.documentElement,
    b = document.body,
    st = "scrollTop",
    sh = "scrollHeight";
  return ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
}

setInterval(() => {
  console.log(getScrollPercent());
}, 500);

/* let about = document.querySelector(".about");
let aboutContainer = document.querySelector(".aboutContainer");
let aboutMobile = document.querySelector(".aboutMobile"); */
let outIcon = document.querySelector(".outIcon");

/* outIcon.addEventListener("click", function () {
  aboutContainer.style.display = "none";
});
 */
/* aboutMobile.addEventListener("click", function () {
  aboutContainer.style.display = "block";
});

about.addEventListener("click", function () {
  aboutContainer.style.display = "block";
}); */

let photos = document.querySelector(".photos");
let photosMobile = document.querySelector(".photosMobile");
let imagesIcon = document.querySelector(".imagesIcon");
let imagesContainer = document.querySelector(".imagesContainer");

photosMobile.addEventListener("click", function () {
  imagesContainer.style.display = "block";
  console.log("hello");
});
photos.addEventListener("click", function () {
  imagesContainer.style.display = "block";
});

imagesIcon.addEventListener("click", function () {
  imagesContainer.style.display = "none";
});

let home = document.querySelector(".home");
let homeMobile = document.querySelector(".homeMobile");

homeMobile.addEventListener("click", function () {
  location.reload();
});
home.addEventListener("click", function () {
  location.reload();
});

//mobile slidebar toggle

$(document).ready(function(){
  $(".mobileNavbarButton").click(function(){
    $(".listMobile").animate({width:'toggle'},350);
    console.log("yo!")
    
  })
})
