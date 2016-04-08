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
        // The dom had no clue wtf to stick the content jquery to the rescue!
        target: $('#jeff-portfolio')[0],
        clientId: 'c59949355e1943a7bed01057b1259614',
        // Got it from http://instagram.pixelunion.net/ Generate your own.
        accessToken: '849719.1677ed0.0346868232c04aba9d27414317c7ec56',
        template: '<a class="portfolio-img" href="{{link}}"><img src="{{image}}" /></a>'
    });
    jeffFeed.run();

    var bradFeed = new Instafeed({
          get: 'user',
          userId: '27662183',
          // The dom had no clue wtf to stick the content jquery to the rescue!
          target: $('#brad-portfolio')[0],
          clientId: 'c59949355e1943a7bed01057b1259614',
          // Got it from http://instagram.pixelunion.net/ Generate your own.
          accessToken: '849719.1677ed0.0346868232c04aba9d27414317c7ec56',
          template: '<a class="portfolio-img" href="{{link}}"><img src="{{image}}" /></a>'
      });
      bradFeed.run();

      var caitlynFeed = new Instafeed({
            get: 'user',
            userId: '52239635',
            // The dom had no clue wtf to stick the content jquery to the rescue!
            target: $('#caitlyn-portfolio')[0],
            clientId: 'c59949355e1943a7bed01057b1259614',
            // Got it from http://instagram.pixelunion.net/ Generate your own.
            accessToken: '849719.1677ed0.0346868232c04aba9d27414317c7ec56',
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
