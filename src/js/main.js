var $, whichTransitionEvent;

$ = require('jquery');
var slidebars = require('slidebars');

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

  $.slidebars({
    siteClose: true, // true or false
    disableOver: 480, // integer or false
    hideControlClasses: true, // true or false
    scrollLock: false // true or false
  });


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
