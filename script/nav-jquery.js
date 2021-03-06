// Change hamburger to x and show menu
$(document).ready(function(){
  $('#menu').on('click', function() {
    $(this).toggleClass('change')
    $('#nav').toggleClass('hide-mobile');

  });
  // Scroll to clicked section
  $('.menu-btn').on('click',function() {
    var sectionId = $(this).attr('data-panelId');
    $([document.documentElement, document.body]).animate({
        scrollTop: $('#' + sectionId).offset().top
    }, 500);
    $('#menu').removeClass('change');
    $('#nav').addClass('hide-mobile');
    jQuery('#nav a').removeClass('active');
    jQuery(this).addClass('active');
    });
    
});



/*
 * Replace all SVG images with inline SVG
 */
jQuery('img.svg').each(function(){
  var $img = jQuery(this);
  var imgID = $img.attr('id');
  var imgClass = $img.attr('class');
  var imgURL = $img.attr('src');

  jQuery.get(imgURL, function(data) {
      // Get the SVG tag, ignore the rest
      var $svg = jQuery(data).find('svg');

      // Add replaced image's ID to the new SVG
      if(typeof imgID !== 'undefined') {
          $svg = $svg.attr('id', imgID);
      }
      // Add replaced image's classes to the new SVG
      if(typeof imgClass !== 'undefined') {
          $svg = $svg.attr('class', imgClass+' replaced-svg');
      }

      // Remove any invalid XML tags as per http://validator.w3.org
      $svg = $svg.removeAttr('xmlns:a');

      // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
      if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
          $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
      }

      // Replace image with new SVG
      $img.replaceWith($svg);

  }, 'xml');

});