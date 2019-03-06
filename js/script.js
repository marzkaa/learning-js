(function() {

    var accordionJQuery = function() {
        $('#accordion-jquery h3').click(function() {
            $(this).addClass('active').siblings().removeClass('active');
        });
    };

    accordionJQuery();

})(); 
