// slick
$('.slide-group').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-angle-right"></i></button>',
    speed:1000,
    pauseOnHover: false,
    fade: true,
})

$('.slide-group2').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-angle-right"></i></button>',
    speed:1000,
    slidesToShow: 3,
    slidesToScroll:1,
    responsive: [{
        breakpoint: 1025,
        settings: {
            slidesToShow: 1,
        }
}]
})


// 재생, 멈춤버튼
$('.article1 .plpa i').on('click', function(){ 
    if($(this).hasClass('fa-pause')){
        $('.article1 .slide-group').slick('slickPause');
        $(this).removeClass('fa-pause').addClass('fa-play');
        $('.article1 .slick-dots li.slick-active button').addClass('btnPause');
    }else {
        $('.article1 .slide-group').slick('slickPlay');
        $(this).removeClass('fa-play').addClass('fa-pause');
        $('.article1 .slick-dots li.slick-active button').removeClass('btnPause');
    }
})


