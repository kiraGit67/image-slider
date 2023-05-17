"use strict";

const previousButton = document.querySelector("#previous");
const nextButton = document.querySelector("#next");

console.log(nextButton);
console.log(previousButton);

/* Nächstes Bild anzeigen */
nextButton.addEventListener("click", showNextImage);

function showNextImage() {
  const images = [...document.querySelectorAll("img")];

  for (let image of images) {
    let position = Number(image.dataset.position);
    let newPosition = position - 100;
    console.log(newPosition);

    image.style.transform = `translateX(${newPosition}%)`;
    image.dataset.position = newPosition;
  }
}

/* Vorheriges Bild anzeigen */
previousButton.addEventListener("click", showPreviousImage);

function showPreviousImage() {
  const images = [...document.querySelectorAll("img")];

  for (let image of images) {
    let position = Number(image.dataset.position);
    let newPosition = position + 100;
    image.style.transform = `translateX(${newPosition}%)`;
    image.dataset.position = newPosition;
  }
}
