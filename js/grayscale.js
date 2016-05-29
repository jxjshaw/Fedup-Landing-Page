/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);

$(document).ready(function(){
    collapseNavbar();

    // Waypoint test
    var waypoint = new Waypoint({
        element: document.getElementById("CTA"),
        handler: function(direction) {
           console.log("sup");
           $("#CTA1").typed({
            strings: ["We cannot do this alone."],
            typespeed: 0
           });
           console.log("typed should have worked");
        }
    });

    // animate the navbar
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });


    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
      if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
        $('.navbar-toggle:visible').click();
      }
    });
});

// Swiping bootstrap carousel NOT SURE IF IT WORKS YET
// $("#myCarousel").swiperight(function() {  
//       $("#myCarousel").carousel('prev');  
//     });  
//    $("#myCarousel").swipeleft(function() {  
//       $("#myCarousel").carousel('next');  
//    });  


