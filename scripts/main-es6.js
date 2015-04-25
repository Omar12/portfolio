let Portfolio;
Portfolio = Portfolio || {};

Portfolio = {

  init() {

    // check if we are in the landing page (home page)
    if ($('.landing').length) {
      this.landing();
    }

    // check if we are in the project page
    if ($('.project').length) {
      this.project();
    }

    this.navigation();
  },

  navigation() {
    $('.nav--trigger').click(() => {
      const $navIcon  = $('.nav--icon');
      const $pageWrap = $('.page-wrap');
      const $workNav  = $('.work--nav');

      $(this).parent().toggleClass('open-nav');
      $navIcon.toggleClass('open-nav');
      $pageWrap.toggleClass('open-nav');
    });

    let $workWidth = $workNav.find('li').width();

    return $workNav.find('li').height($workWidth);
  },

  landing() {
    $('ul.showcase').find('li').hover(() => {
      $(this).addClass('hovered');
    }, () => {
      $(this).removeClass('hovered');
    });
  },

  project() {
    $('.swipebox').swipebox({ hideBarsDelay: 5000 });
  }
};


// Let's initialize the Portfolio
$(() => {
  Portfolio.init();
});

// Faux Preloader
$(window).load(() => {
  $('body').removeClass('preload');
});