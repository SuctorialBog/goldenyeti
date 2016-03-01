$ = require('jquery')
console.log('js loaded')

whichTransitionEvent = ->
  el = document.createElement("fakeelement")
  transitions =
    transition: "transitionend"
    OTransition: "oTransitionEnd"
    MozTransition: "transitionend"
    WebkitTransition: "webkitTransitionEnd"

  for t of transitions
    return transitions[t]  if el.style[t] isnt undefined
  return

$ ->
  $("#nav-toggle").on "click", ->
    $(@).toggleClass "active"
    $("#main-nav").toggleClass('animating')
    $("#main-nav").toggleClass('open').one(whichTransitionEvent(),
      (e) ->
        $("#main-nav").toggleClass('animating')
    )

  $(".dropdown").on "click", (e) ->
    e.preventDefault
    if $(this).hasClass('open')
      # console.log('dicks')
      $(this).removeClass('open')
      $(this).next(".submenu").removeClass("open")
      return true
    $(".dropdown").removeClass('open')
    $(".submenu").removeClass('open')
    $(this).toggleClass('open')
    $(this).next(".submenu").toggleClass('animating')
    $(this).next(".submenu").toggleClass('open').one(whichTransitionEvent(),
      (e) ->
        $(this).toggleClass('animating')
    )

  $.slidebars()
