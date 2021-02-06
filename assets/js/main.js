(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
        Slider
    --------------------*/
    var slides=document.querySelector('.inner-slider').children;
    var nextSlide=document.querySelector(".right-slide");
    var prevSlide=document.querySelector(".left-slide");
    var totalSlides=slides.length;
    var index=0;

    nextSlide.onclick=function () {
        next("next");
    }
    prevSlide.onclick=function () {
        next("prev");
    }

    function next(direction){

    if(direction=="next"){
        index++;
        if(index==totalSlides){
            index=0;
        }
    } 
    else{
            if(index==0){
                index=totalSlides-1;
            }
            else{
                index--;
            }
        }

    for(i=0;i<slides.length;i++){
            slides[i].classList.remove("active");
    }
    slides[index].classList.add("active");     

    }

    /*------------------
       Brand Carousel
    --------------------*/
    // $(".logo-carousel").owlCarousel({
    //     loop: false,
    //     margin: 30,
    //     nav: false,
    //     items: 5,
    //     dots: false,
    //     navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
    //     smartSpeed: 1200,
    //     autoHeight: false,
    //     mouseDrag: false,
    //     autoplay: true,
    //     responsive: {
    //         0: {
    //             items: 3,
    //         },
    //         768: {
    //             items: 5,
    //         }
    //     }
    // });
    /*------------------
        CountDown
    --------------------*/
    var end = new Date('12/31/2021 00:00 AM');
    
        var _second = 1000;
        var _minute = _second * 60;
        var _hour = _minute * 60;
        var _day = _hour * 24;
        var timer;
    
        function showRemaining() {
            var now = new Date();
            var distance = end - now;
            if (distance < 0) {
    
                clearInterval(timer);
                document.getElementById('countdown').innerHTML = 'EXPIRED!';
    
                return;
            }
            var days = Math.floor(distance / _day);
            var hours = Math.floor((distance % _day) / _hour);
            var minutes = Math.floor((distance % _hour) / _minute);
            var seconds = Math.floor((distance % _minute) / _second);
    
            document.getElementById('countdown').innerHTML = '<div class="cd-item"><span>' + days + '</span>' + '<span>Days</spans></div>' ;
            document.getElementById('countdown').innerHTML += '<div class="cd-item"><span>' + hours + '</span>' + '<span>Hrs</spans></div>' ;
            document.getElementById('countdown').innerHTML +=  '<div class="cd-item"><span>' + minutes + '</span>' + '<span>Mins</spans></div>';
            document.getElementById('countdown').innerHTML +=  '<div class="cd-item"><span>' + seconds + '</span>' + '<span>Sec</spans></div>';
        }
    
        timer = setInterval(showRemaining, 1000);
        
    /*----------------------------------------------------
     Language Flag js 
    ----------------------------------------------------*/
    $(document).ready(function(e) {
    //no use
    try {
        var pages = $("#pages").msDropdown({on:{change:function(data, ui) {
            var val = data.value;
            if(val!="")
                window.location = val;
        }}}).data("dd");

        var pagename = document.location.pathname.toString();
        pagename = pagename.split("/");
        pages.setIndexByValue(pagename[pagename.length-1]);
        $("#ver").html(msBeautify.version.msDropdown);
    } catch(e) {
        // console.log(e);
    }
    $("#ver").html(msBeautify.version.msDropdown);

    //convert
    $(".language_drop").msDropdown({roundedBorder:false});
        $("#tech").data("dd");
    });

})(jQuery);