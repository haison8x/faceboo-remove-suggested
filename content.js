jQuery(window).bind('mousewheel DOMMouseScroll', function (event) {
  let isScrollingUp = event.originalEvent.wheelDelta / 120 > 0

  if (isScrollingUp) {
    return
  }

  jQuery('.x1pi30zi.x1swvt13').each(function (i, e) {
    var text = jQuery(e).text()
    if (text !== 'Suggested for you' && text !== 'Gợi ý cho bạn') {
      return
    }
    jQuery(e).parent().parent().find("a[aria-label='hide post'] div[data-visualcompletion=ignore]").click()
    console.log("a 'suggested for you' was removed")
  })

  jQuery('svg use').each(function (i, e) {
    let element = jQuery(e)
    let id = element.attr('xlink:href')
    let text = jQuery(id).text()
    if (text !== 'Sponsored' && text !== 'Được tài trợ') {
      return
    }

    let sponsored = element.closest('.x78zum5').find('.xu06os2:first-child').text()
    console.log('ads ' + sponsored + ' was hidden')
    let closestParent = element.closest('.x1cy8zhl')
    closestParent.parent().parent().remove()
  })
})
