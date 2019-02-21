'use strict';
var modals = document.querySelectorAll('.modal');
var modalLinks = document.querySelectorAll('.show-modal');
var closeButtons = document.querySelectorAll('.modal .close');
var modalOverlay = document.querySelector('#modal-overlay');

(function(){ 
		
	var showModal = function(event){
		event.preventDefault();
	for (var i = 0; i < modals.length; i++) { 
		modals[i].classList.remove('show');
	}
	document.querySelector(this.getAttribute('href')).classList.add('show');
	modalOverlay.classList.add('show');	
	};
	
	for (var i = 0; i < modalLinks.length; i++) {
		modalLinks[i].addEventListener('click', showModal);
	}

	var hideModal = function(event) {
		event.preventDefault();
		modalOverlay.classList.remove('show');
	};
	
	for (var i = 0; i < closeButtons.length; i++) {
		closeButtons[i].addEventListener('click', hideModal);
	}

	modalOverlay.addEventListener('click', hideModal);
	for (var i = 0; i < modals.length; i++) {
		modals[i].addEventListener('click', function(event){
			event.stopPropagation();
		});
	}
	
})(); 