"use strict";

const previousButton = document.querySelector("#previous");
const nextButton = document.querySelector("#next");

console.log(nextButton);
console.log(previousButton);

const images = [...document.querySelectorAll("img")];
const numberOfImages = images.length;
console.log(numberOfImages);

let currentImage = 0;

/* Nächstes Bild anzeigen */
nextButton.addEventListener("click", showNextImage);

function showNextImage() {
  if (currentImage < numberOfImages - 1) {
    currentImage++;
  } else {
    currentImage = 0;
  }
  renderImages();
}

/* Vorheriges Bild anzeigen */
previousButton.addEventListener("click", showPreviousImage);

function showPreviousImage() {
  if (currentImage > 0) {
    currentImage--;
  } else {
    currentImage = numberOfImages - 1;
  }
  renderImages();
}

function renderImages() {
  images.forEach((image) => {
    image.style.transform = `translateX(${currentImage * -100}%)`;
  });
}
