$('.owl-carousel.owl-carousel1').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 2,
            nav: true

        },
        1000: {
            items: 3,
            nav: true,
            loop: false
        },
        1320: {
            items: 4,
            nav: true,
            loop: false
        }
    }
});

$('.owl-carousel.owl-carousel2').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 2,
            nav: true

        },
        1000: {
            items: 3,
            nav: true,
            loop: false
        },
        1320: {
            items: 4,
            nav: true,
            loop: false
        }

    }
});
$('.owl-carousel.owl-carousel3').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 2,
            nav: true

        },
        1000: {
            items: 3,
            nav: true,
            loop: false
        },
        1320: {
            items: 4,
            nav: true,
            loop: false
        }

    }
});

$('.owl-carousel.owl-carousel4').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 2,
            nav: true

        },
        1000: {
            items: 3,
            nav: true,
            loop: false
        },
        1320: {
            items: 4,
            nav: true,
            loop: false
        }

    }
});

$('.owl-carousel.owl-carousel5').owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 1,
            nav: true

        },
        1000: {
            items: 3,
            nav: true,
            loop: false
        },
        1320: {
            items: 3,
            nav: true,
            loop: false
        }

    }
});

$('.owl-carousel.owl-carousel6').owlCarousel({
    loop: true,
    margin: 20,
    dots: true,
    nav: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 1,
            nav: false

        },
        1000: {
            items: 1,
            nav: false,
            loop: false
        },
        1320: {
            items: 1,
            nav: false,
            loop: false
        }

    }
});

var btn = $('#button');
$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});
btn.on('click', function(e) {
    e.preventDefault();
    $(window).scrollTop(0);
  });
  

function toggleDropdown(e) {
    const _d = $(e.target).closest('.dropdown'),
        m = $('.dropdown-menu', d);
    setTimeout(function () {
        const shouldOpen = e.type !== 'click' && _d.is(':hover');
        _m.toggleClass('show', shouldOpen);
        _d.toggleClass('show', shouldOpen);
        $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
    }, e.type === 'mouseleave' ? 300 : 0);
}

$('body')
    .on('mouseenter mouseleave', '.dropdown', toggleDropdown)
    .on('click', '.dropdown-menu a', toggleDropdown);


    function getVals(){
        // Get slider values
        let parent = this.parentNode;
        let slides = parent.getElementsByTagName("input");
          let slide1 = parseFloat( slides[0].value );
          let slide2 = parseFloat( slides[1].value );
        // Neither slider will clip the other, so make sure we determine which is larger
        if( slide1 > slide2 ){ let tmp = slide2; slide2 = slide1; slide1 = tmp; }
        
        let displayElement = parent.getElementsByClassName("rangeValues")[0];
            displayElement.innerHTML = "$" + slide1 + " - $" + slide2;
      }
      
      window.onload = function(){
        // Initialize Sliders
        let sliderSections = document.getElementsByClassName("range-slider");
            for( let x = 0; x < sliderSections.length; x++ ){
              let sliders = sliderSections[x].getElementsByTagName("input");
              for( let y = 0; y < sliders.length; y++ ){
                if( sliders[y].type ==="range" ){
                  sliders[y].oninput = getVals;
                  // Manually trigger event first time to display values
                  sliders[y].oninput();
                }
              }
            }
      }
      
      $(window).scroll(function() {
        var scroll = $(window).scrollTop();
    
        if (scroll >= 100) {
            $('header').addClass('position-fixed');
        } else {
            $('header').removeClass('position-fixed');
        }
    });
    