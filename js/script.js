'use strict';
var modals = document.querySelectorAll('.modal');
var modalLinks = document.querySelectorAll('.show-modal');
var closeButtons = document.querySelectorAll('.modal .close');
var modalOverlay = document.querySelector('#modal-overlay');

(function(){ 
		
	function showModal(event){
		event.preventDefault();
	    for (var i = 0; i < modals.length; i++) { 
		    modals[i].classList.remove('show');
	    }
	    document.querySelector(this.getAttribute('href')).classList.add('show');
	    modalOverlay.classList.add('show');	
	};
    
	for (var i = 0; i < modalLinks.length; i++) {
        for (var j = 0; j < closeButtons.length; j++) {
            for (var k = 0; k < modals.length; k++) {
            modalOverlay.addEventListener('click', hideModal);
            modalLinks[i].addEventListener('click', showModal);
            closeButtons[j].addEventListener('click', hideModal);
            modals[k].addEventListener('click', function(event){
                event.stopPropagation();
                });
            }
        }  
    }

	function hideModal(event) {
		event.preventDefault();
		modalOverlay.classList.remove('show');
    };
	
})(); 