# var Portfolio = Portfolio || {};
Portfolio = Portfolio or {}
Portfolio =
  init: ->
    @landing()  if $(".landing").length
    @project()  if $(".project").length
    @navigation()
    return

  navigation: ->
    $(".nav--trigger").click(->
        $(this).parent().toggleClass "open-nav"
        $(".page-wrap").toggleClass "open-nav"
        return
      )

  landing: ->

    # hover effect
    $("ul.showcase li").hover (->
      $(this).addClass "hovered"
      return
    ), ->
      $(this).removeClass "hovered"
      return

    return

  project: ->
    $(".swipebox").swipebox hideBarsDelay: 5000
    return

$ ->
  Portfolio.init()
  return

$(window).load ->
  $("body").removeClass "preload"
  return
