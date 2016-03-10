var $, whichTransitionEvent;

$ = require('jquery');
// var slidebars = require('slidebars');
var Instafeed = require('instafeed');

console.log('js loaded');

whichTransitionEvent = function() {
  var el, t, transitions;
  el = document.createElement("fakeelement");
  transitions = {
    transition: "transitionend",
    OTransition: "oTransitionEnd",
    MozTransition: "transitionend",
    WebkitTransition: "webkitTransitionEnd"
  };
  for (t in transitions) {
    if (el.style[t] !== void 0) {
      return transitions[t];
    }
  }
};

$(function() {

  var YETI = window.YETI || {};

  /// NAVIGATION TOGGLE /////

  $("#nav-toggle").on("click", function() {
    $(this).toggleClass("active");
    $("#main-nav").toggleClass('animating');
    return $("#main-nav").toggleClass('open').one(whichTransitionEvent(), function(e) {
      return $("#main-nav").toggleClass('animating');
    });
  });

  /// SLIDEBARS TEST/////

  // $.slidebars({
  //   siteClose: true, // true or false
  //   disableOver: 480, // integer or false
  //   hideControlClasses: true, // true or false
  //   scrollLock: false // true or false
  // });

  /// Instafeed Stuff ///////

  var jeffFeed = new Instafeed({
        get: 'user',
        userId: '144571280',
        target: '#jeff-portfolio',
        clientId: 'c59949355e1943a7bed01057b1259614',
        accessToken: 'YOUR_ACCESS_TOKEN',
        template: '<a class="portfolio-img" href="{{link}}"><img src="{{image}}" /></a>'
    });
    jeffFeed.run();

    var bradFeed = new Instafeed({
          get: 'user',
          userId: '27662183',
          target: '#brad-portfolio',
          clientId: 'c59949355e1943a7bed01057b1259614',
          accessToken: 'YOUR_ACCESS_TOKEN',
          template: '<a class="portfolio-img" href="{{link}}"><img src="{{image}}" /></a>'
      });
      bradFeed.run();

      var caitlynFeed = new Instafeed({
            get: 'user',
            userId: '52239635',
            target: '#caitlyn-portfolio',
            clientId: 'c59949355e1943a7bed01057b1259614',
            accessToken: 'YOUR_ACCESS_TOKEN',
            template: '<a class="portfolio-img" href="{{link}}"><img src="{{image}}" /></a>'
        });
        caitlynFeed.run();

  /// DROPDOWN NAV CLASS /////

  $(".dropdown").on("click", function(e) {
    e.preventDefault;
    if ($(this).hasClass('open')) {
      $(this).removeClass('open');
      $(this).next(".submenu").removeClass("open");
      return true;
    }
    $(".dropdown").removeClass('open');
    $(".submenu").removeClass('open');
    $(this).toggleClass('open');
    $(this).next(".submenu").toggleClass('animating');
    return $(this).next(".submenu").toggleClass('open').one(whichTransitionEvent(), function(e) {
      return $(this).toggleClass('animating');
    });
  });

  /// CONTACT FORM /////
    $("#contact-submit").on('click',function() {
      $contact_form = $('#contact-form');

      var fields = $contact_form.serialize();

      $.ajax({
        type: "POST",
        url: "php/contact.php",
        data: fields,
        dataType: 'json',
        success: function(response) {

          if(response.status){
            $('#contact-form input').val('');
            $('#contact-form textarea').val('');
          }

          $('#response').empty().html(response.html);
        }
      });
      return false;
    });

});
