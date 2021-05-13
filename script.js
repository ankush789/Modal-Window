'use strict';
const showModalButton = document.querySelectorAll('.show-modal');
const closeModalButton = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

//Functionality for all the 3 buttons
for (let i = 0; i < showModalButton.length; i++) {
  showModalButton[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}
//Close modal button functionality
closeModalButton.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});
//Hiding modal on clicking over the remaining part of window
overlay.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});
