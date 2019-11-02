//navigation
$('.nav-item').click(function(){
  $('.nav-item').removeClass('active');
    $(this).addClass('active');
});

//filter
$('.portfolio-item').isotope({
  itemSelector: '.grid-item',
  layout: 'fitRows'
});

$('.portfolio-menu ul li').click(function() {
    $('.portfolio-menu ul li').removeClass('active');
    $(this).addClass('active');

    $('.portfolio-item').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: '.grid-sizer'
      }
    })

    var selector = $(this).attr('data-filter');
    $('.portfolio-item').isotope({
        filter: selector
    });
    return false;
});

