var Portfolio = Portfolio || {};

Portfolio = {
  init: function() {
    this.landing();
  },
  landing: function() {
    $('ul.showcase li').hover(
      function() {
        $( this ).addClass( "hovered" );
      }, function() {
        $( this ).removeClass( "hovered" );
      });
    console.log("landing");
  }
}

$(function(){
  Portfolio.init();
});

$(window).load(function(){
    $('body').removeClass('preload');
});