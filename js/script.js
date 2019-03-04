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


// google maps
window.initMap = function() { 
  var map = new google.maps.Map(document.getElementById('map'), {    
    center: data[flkty.selectedIndex].coords,
    zoom: 2                
  });  
  for (let i = 0; i < data.length; i++) {
     var marker = new google.maps.Marker({
      position: data[i].coords,
      map: map
    });
    
    marker.addListener('click', function() {
      flkty.select(i);
    });
  } 
    flkty.on('change', function (index) {
      map.panTo(data[index].coords);
      map.setZoom(10);  
  })  
};
