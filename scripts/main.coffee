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
        $(".nav--icon").toggleClass "open-nav"
        $(".page-wrap").toggleClass "open-nav"
        return
      )
    workWidth = $(".work--nav").find('li').width()
    $(".work--nav").find('li').height(workWidth)

  landing: ->

    # hover effect
    $("ul.showcase").find('li').hover (->
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
