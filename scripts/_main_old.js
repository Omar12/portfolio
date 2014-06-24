var Portfolio = Portfolio || {};

Portfolio = {
  init: function() {
    if($('.landing').length) {
      this.landing();
    }

    if($('.project').length) {
      this.project();
    }
  },
  landing: function() {
    // hover effect
    $('ul.showcase li').hover(
      function() {
        $( this ).addClass( "hovered" );
      }, function() {
        $( this ).removeClass( "hovered" );
      });
  },
  project: function() {
    $('.swipebox').swipebox({
      hideBarsDelay: 5000
    });
  }
}

$(function(){
  Portfolio.init();
});

$(window).load(function(){
    $('body').removeClass('preload');
});