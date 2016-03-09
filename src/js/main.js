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
  YETI.contactForm = function(){
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
  }

  /// CONTACT MAP /////

    // function initMap() {
    //   var customMapType = new google.maps.StyledMapType([
    //       {
    //           "featureType": "water",
    //           "elementType": "geometry",
    //           "stylers": [
    //               {
    //                   "color": "#e9e9e9"
    //               },
    //               {
    //                   "lightness": 17
    //               }
    //           ]
    //       },
    //       {
    //           "featureType": "landscape",
    //           "elementType": "geometry",
    //           "stylers": [
    //               {
    //                   "color": "#f5f5f5"
    //               },
    //               {
    //                   "lightness": 20
    //               }
    //           ]
    //       },
    //       {
    //           "featureType": "road.highway",
    //           "elementType": "geometry.fill",
    //           "stylers": [
    //               {
    //                   "color": "#ffffff"
    //               },
    //               {
    //                   "lightness": 17
    //               }
    //           ]
    //       },
    //       {
    //           "featureType": "road.highway",
    //           "elementType": "geometry.stroke",
    //           "stylers": [
    //               {
    //                   "color": "#ffffff"
    //               },
    //               {
    //                   "lightness": 29
    //               },
    //               {
    //                   "weight": 0.2
    //               }
    //           ]
    //       },
    //       {
    //           "featureType": "road.arterial",
    //           "elementType": "geometry",
    //           "stylers": [
    //               {
    //                   "color": "#ffffff"
    //               },
    //               {
    //                   "lightness": 18
    //               }
    //           ]
    //       },
    //       {
    //           "featureType": "road.local",
    //           "elementType": "geometry",
    //           "stylers": [
    //               {
    //                   "color": "#ffffff"
    //               },
    //               {
    //                   "lightness": 16
    //               }
    //           ]
    //       },
    //       {
    //           "featureType": "poi",
    //           "elementType": "geometry",
    //           "stylers": [
    //               {
    //                   "color": "#f5f5f5"
    //               },
    //               {
    //                   "lightness": 21
    //               }
    //           ]
    //       },
    //       {
    //           "featureType": "poi.park",
    //           "elementType": "geometry",
    //           "stylers": [
    //               {
    //                   "color": "#dedede"
    //               },
    //               {
    //                   "lightness": 21
    //               }
    //           ]
    //       },
    //       {
    //           "elementType": "labels.text.stroke",
    //           "stylers": [
    //               {
    //                   "visibility": "on"
    //               },
    //               {
    //                   "color": "#ffffff"
    //               },
    //               {
    //                   "lightness": 16
    //               }
    //           ]
    //       },
    //       {
    //           "elementType": "labels.text.fill",
    //           "stylers": [
    //               {
    //                   "saturation": 36
    //               },
    //               {
    //                   "color": "#333333"
    //               },
    //               {
    //                   "lightness": 40
    //               }
    //           ]
    //       },
    //       {
    //           "elementType": "labels.icon",
    //           "stylers": [
    //               {
    //                   "visibility": "off"
    //               }
    //           ]
    //       },
    //       {
    //           "featureType": "transit",
    //           "elementType": "geometry",
    //           "stylers": [
    //               {
    //                   "color": "#f2f2f2"
    //               },
    //               {
    //                   "lightness": 19
    //               }
    //           ]
    //       },
    //       {
    //           "featureType": "administrative",
    //           "elementType": "geometry.fill",
    //           "stylers": [
    //               {
    //                   "color": "#fefefe"
    //               },
    //               {
    //                   "lightness": 20
    //               }
    //           ]
    //       },
    //       {
    //           "featureType": "administrative",
    //           "elementType": "geometry.stroke",
    //           "stylers": [
    //               {
    //                   "color": "#fefefe"
    //               },
    //               {
    //                   "lightness": 17
    //               },
    //               {
    //                   "weight": 1.2
    //               }
    //           ]
    //       }
    //   ], {
    //       name: 'Custom Style'
    //   });
    //   var customMapTypeId = 'custom_style';
    //
    //   var map = new google.maps.Map(document.getElementById('map'), {
    //     zoom: 9,
    //     center: {lat: 35.925984, lng: -86.872718},  // THE SHOP.
    //   });
    //
    //   map.mapTypes.set(customMapTypeId, customMapType);
    //   map.setMapTypeId(customMapTypeId);
    // }



});
