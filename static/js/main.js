$(document).ready(function () {
    svg4everybody({});

    $('a').on('click', function(e){
        e.preventDefault();
    })

    //Add class active in header-menu__link
    $(".nav-menu__link").on("click", function() {
        $(".nav-menu__link.active").removeClass("active");
        $(this).toggleClass("active");
    });


    $('.nav-menu__item').on('click', function() {
        $(this).toggleClass('show-dropdown');
    });

    //Burger animation
    const btn = document.getElementById("menu-toggle");
    const lines = btn.querySelectorAll(".line");
    const cls = { open: "open", close: "close" };
    let btnClass = cls.open;

    btn.addEventListener("click", () => {
        if (btn.classList.contains(cls.open)) {
            btn.classList.remove(btnClass);
            btnClass = cls.close;
        } else if (btn.classList.contains(cls.close)) {
            btn.classList.remove(btnClass);
            btnClass = cls.open;
         }

        void btn.offsetWidth;
        btn.classList.add(btnClass);
    });

    

    //Show-close burger-menu
    $('#menu-toggle').on('click', function() {
        $('.burger-menu').toggleClass('show-burger-menu');
    });

    //Show-close submenu
    $('#open-submenu').click(function(){
        let menu = $('.burger-submenu');
        $(this).toggleClass('open');
        if(menu.is(':visible')) {
          menu.slideUp();
        } else {
          menu.slideDown();
        }
      });
      

     /* Slick needs no get Reinitialized on window Resize after it was destroyed */
     $(window).on('load resize orientationchange', function() {
        $('.sertificates-slider').each(function(){
            var $carousel = $(this);
            /* Initializes a slick carousel only on mobile screens */
            // slick on mobile
            if ($(window).width() > 991) {
                if ($carousel.hasClass('slick-initialized')) {
                    $carousel.slick('unslick');
                }
            }
            else{
                if (!$carousel.hasClass('slick-initialized')) {
                    $carousel.slick({
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        // mobileFirst: true,
                        nextArrow: '.sertificates__btn--next',
                        prevArrow: '.sertificates__btn--prev',
                        responsive: [
                            {
                              breakpoint: 768,
                              settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1
                              }
                            },
                            {
                              breakpoint: 576,
                              settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                              }
                            },
                            // {
                            //   breakpoint: 480,
                            //   settings: {
                            //     slidesToShow: 1,
                            //     slidesToScroll: 1
                            //   }
                            // }
                        ]
                    });
                }
            }
        });
    });

});
