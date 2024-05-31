/*const affirm = document.querySelector('.affirm1, .affirm2,.affirm3');
const  overlay = document.querySelector('.overlay');
const openBox = document.querySelector('.box');
const closeBox = document.querySelector('.close-modal');

const box = function(){
  modal.classList.add('.hidden1, .hidden2, .hidden3');
  overlay.classList.add('.hidden');
}

const affirm = document.querySelector('.affirm1.affirm2.affirm3');
const overlay = document.querySelector('.overlay');
const openBox = document.querySelector('.box');
const closeBox = document.querySelector('.close-modal');

const unlockBox = function(){
  affirm.classList.remove('hidden1', 'hidden2', 'hidden3');
  overlay.classList.remove('hidden');
}

const lockBox = function() {
  affirm.classList.add('hidden1', 'hidden2', 'hidden3');
  overlay.classList.add('hidden');
}*/

const affirm = document.querySelector('.affirm1.affirm2.affirm3');
const overlay = document.querySelector('.overlay');
const btnOpenBox = document.querySelector('.affirm1.affirm2.affirm3');
const btnCloseBox = document.querySelector('.close-modal');


const openBox = function() {
  affirm.classList.remove('hidden1', 'hidden2', 'hidden3');
  overlay.classList.remove('hidden');
}

const closeBox = function() {
  affirm.classList.add('hidden1', 'hidden2', 'hidden3');
  overlay.classList.add('hidden');
}


overlay.addEventListener('click', closeBox);
btnOpenBox.addEventListener('click', openBox);
btnCloseBox.addEventListener('click', closeBox);



