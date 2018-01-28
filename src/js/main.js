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

/// NEED TO TAKE OUT OF SANDBOX FOR THESE ////////////////////////---->

	// var jeffFeed = new Instafeed({
	// 	scope: 'pubic_content',
	// 	sortBy: 'most-recent',
	// 	get: 'tagged',
	// 	tagName: 'goldenyetijeff',
  //   limit: 32,
	// 	target: $('#jeff-portfolio')[0],
	// 	clientId: 'c59949355e1943a7bed01057b1259614',
	// 	accessToken: '144571280.c599493.87e44ccd1a1d4479939f7c5ce08081b5',
	// 	template: '<a class="portfolio-img" href="{{link}}"><img src="{{image}}" /></a>'
	// });
	// jeffFeed.run();
	//
	// var bradFeed = new Instafeed({
	// 	scope: 'pubic_content',
	// 	sortBy: 'most-recent',
	// 	get: 'tagged',
	// 	tagName: 'goldenyetibrad',
	// 	target: $('#brad-portfolio')[0],
	// 	clientId: 'c59949355e1943a7bed01057b1259614',
	// 	accessToken: '27662183.c599493.e9107b5d04d0440da4bd49f6db96041c',
	// 	template: '<a class="portfolio-img" href="{{link}}"><img src="{{image}}" /></a>'
	// });
	// bradFeed.run();
	//
	// var caitlynFeed = new Instafeed({
	// 	scope: 'pubic_content',
	// 	sortBy: 'most-recent',
	// 	get: 'tagged',
	// 	tagName: 'goldenyeticaitlyn',
  //   limit: 32,
	// 	target: $('#caitlyn-portfolio')[0],
	// 	clientId: 'c59949355e1943a7bed01057b1259614',
	// 	accessToken: '52239635.c599493.958f3fd487eb4ac7b0ea4a4fa25ddd2f',
	// 	template: '<a class="portfolio-img" href="{{link}}"><img src="{{image}}" /></a>'
	// });
	// caitlynFeed.run();
	//
	// var maryFeed = new Instafeed({
	// 	scope: 'pubic_content',
	// 	sortBy: 'most-recent',
	// 	get: 'tagged',
	// 	tagName: 'goldenyetimary',
  //   limit: 32,
	// 	target: $('#mary-portfolio')[0],
	// 	clientId: 'c59949355e1943a7bed01057b1259614',
	// 	accessToken: '18964608.c599493.55464b4033a347828c8d71dc0a20e6cc',
	// 	template: '<a class="portfolio-img" href="{{link}}"><img src="{{image}}" /></a>'
	// });
	// maryFeed.run();

	var jeffFeed = new Instafeed({
		sortBy: 'most-recent',
		get: 'user',
		userId: '144571280',
    limit: 32,
		target: $('#jeff-portfolio')[0],
		clientId: 'c59949355e1943a7bed01057b1259614',
		accessToken: '144571280.c599493.87e44ccd1a1d4479939f7c5ce08081b5',
		template: '<a class="portfolio-img" href="{{link}}"><img src="{{image}}" /></a>'
	});
	jeffFeed.run();

	var bradFeed = new Instafeed({
		sortBy: 'most-recent',
		get: 'user',
		userId: '27662183',
    limit: 32,
		target: $('#brad-portfolio')[0],
		clientId: 'c59949355e1943a7bed01057b1259614',
		accessToken: '27662183.c599493.e9107b5d04d0440da4bd49f6db96041c',
		template: '<a class="portfolio-img" href="{{link}}"><img src="{{image}}" /></a>'
	});
	bradFeed.run();

	var caitlynFeed = new Instafeed({
		sortBy: 'most-recent',
		get: 'user',
		userId: '52239635',
    limit: 32,
		target: $('#caitlyn-portfolio')[0],
		clientId: 'c59949355e1943a7bed01057b1259614',
		accessToken: '52239635.c599493.958f3fd487eb4ac7b0ea4a4fa25ddd2f',
		template: '<a class="portfolio-img" href="{{link}}"><img src="{{image}}" /></a>'
	});
	caitlynFeed.run();

	var maryFeed = new Instafeed({
		sortBy: 'most-recent',
		get: 'user',
		userId: '18964608',
    limit: 32,
		target: $('#mary-portfolio')[0],
		clientId: 'c59949355e1943a7bed01057b1259614',
		accessToken: '18964608.c599493.55464b4033a347828c8d71dc0a20e6cc',
		template: '<a class="portfolio-img" href="{{link}}"><img src="{{image}}" /></a>'
	});
	maryFeed.run();

	var murrayFeed = new Instafeed({
		sortBy: 'most-recent',
		get: 'user',
		userId: '36382497',
    limit: 32,
		target: $('#murray-portfolio')[0],
		clientId: 'c59949355e1943a7bed01057b1259614',
		accessToken: '36382497.c599493.9321a2f067d54ae58c183e14fc7c342c',
		template: '<a class="portfolio-img" href="{{link}}"><img src="{{image}}" /></a>'
	});
	murrayFeed.run();

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
	$("#contact-submit").on('click', function() {
		$contact_form = $('#contact-form');

		var fields = $contact_form.serialize();

		$.ajax({
			type: "POST",
			url: "php/contact.php",
			data: fields,
			dataType: 'json',
			success: function(response) {

				if (response.status) {
					$('#contact-form input').val('');
					$('#contact-form textarea').val('');
				}

				$('#response').empty().html(response.html);
			}
		});
		return false;
	});

});
