
// js start
wow = new WOW({
        boxClass:     'wow',      // default
        animateClass: 'animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
    })
wow.init();



wow1 = new WOW({
      boxClass:     'wow1',      // default
       animateClass: 'animated', // default
       offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
     })
wow1.init();


AOS.init({
    delay: 50,
    duration: 500,
});



// jq start
$(document).ready(function(){

	$('.counter').counterUp({
        delay: 10,
        time: 2000
    });

    $('.box3h2').CountUpCircle({
        duration: 2000, // In ms, default: 5000
    });


    var mixer = mixitup('#mainTab');
    var mixer = mixitup('#mainTab', {
       
        animation: {
            duration: 300
        },
        animation: {
        easing: 'ease-in-out'
        }
    });

    lightbox.option({
      'resizeDuration': 300,
      'wrapAround': true
    });



    $('.slider_cont').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 300,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [

    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }   
  ]

    });




  $('.demo_cont').slick({
    dots: true,
    draggable: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    centerMode: true,
    centerPadding: '60px',
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 575,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]

  });



  $('.demo_cont2').slick({
    speed: 500,
  fade: true,
  cssEase: 'linear',
    slidesToShow: 3,
    slidesToScroll: 1,
  });




  // Slider Syncing

 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  speed: 700,
  centerMode: true,
  focusOnSelect: true
});

})


