function call_sliders() {
    if ($('#bigpicture').length) {

           $('#bigpicture').slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4, 
            responsive: [

                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3 

                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        arrow: false,
                        dots: true,
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        nextArrow: false,
                        prevArrow: false,
                        swipeToSlide: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrow: false,
                        slidesToShow: 2,
                         slidesToScroll: 2, 
                        dots: true,
                        swipeToSlide: true
                    }
                }

            ]
        });
        $('#moreDetail').slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4, 
            responsive: [

                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        arrow: false,
                        dots: true,
                        slidesToShow: 2,                         
                        slidesToScroll: 2, 
                        swipeToSlide: true

                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrow: false,
                        slidesToShow: 2,
                         slidesToScroll: 2,
                        dots: true,
                        swipeToSlide: true
                    }
                }

            ]
        });
        $('#otherCon').slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4, 
            responsive: [

                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3 
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        arrow: false,
                        dots: true,
                        slidesToShow: 2,  
                        slidesToScroll: 2, 
                        swipeToSlide: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrow: false,
                        slidesToShow: 2,
                         slidesToScroll: 2, 
                        dots: true,
                        swipeToSlide: true
                    }
                }

            ]
        });



    }

}


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}