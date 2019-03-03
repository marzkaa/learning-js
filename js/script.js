var elem = document.querySelector('.main-carousel');
var progressBar = document.querySelector('.progress-bar');
var btnRestart = document.querySelector('.btn-restart');


var flkty = new Flickity( elem, {
  cellAlign: 'left',
  contain: true,
  hash: true,
  pageDots: false,
});

// button restart
btnRestart.addEventListener('click', function(){
  flkty.select(0);
});

 // scroll
flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});

