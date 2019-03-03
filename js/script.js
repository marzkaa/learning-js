var elem = document.querySelector('.main-carousel');
var progressBar = document.querySelector('.progress-bar');
var btnRestart = document.querySelector('.btn-restart');
var templateSlide = document.getElementById('template-carousel').innerHTML;
var carousel = document.querySelector('.main-carousel');
var renderedTemplates = '';

//mustache template
Mustache.parse(templateSlide);
for (var i = 0; i < data.length; i++) {
  renderedTemplates += Mustache.render(templateSlide, data[i]);
}
carousel.innerHTML = renderedTemplates;

// flickity
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

