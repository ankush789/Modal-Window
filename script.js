'use strict';
const showModalButton = document.querySelectorAll('.show-modal');
const closeModalButton = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//Functionality for all the 3 buttons
for (let i = 0; i < showModalButton.length; i++) {
  showModalButton[i].addEventListener('click', openModal);
}

//Close modal button functionality
closeModalButton.addEventListener('click', closeModal);

//Hiding modal on clicking over the remaining part of window
overlay.addEventListener('click', closeModal);
