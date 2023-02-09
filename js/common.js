var ww = $(window).width()
if (ww > 1024) {
    $('html').addClass('pc')
} else {
    $('html').addClass('mobile')
}

// pc화면용 네비게이션 액션
// $('#header #nav .depth1 > li').on('mouseover mouseout', function () {
//     if ($('html').hasClass('pc')) {
//         $(this).find('.depth2').stop().slideToggle()
//     }
// })

// 위의 코드 결과와 같음
// $('#header #nav .depth1 > li').hover(
//     function(){
//         if ( $('html').hasClass('pc')) {
//             $(this).find('.depth2').stop().slideDown()
//         }
//     },
//     function(){
//         if ( $('html').hasClass('pc')) {
//             $(this).find('.depth2').stop().slideUp()
//         }
//     }
// )





$('#header .open').on('click', function () {
    $(this).toggleClass('active')
    $('#header .cd').toggleClass('active')
    $('#section').toggleClass('active')
    $('.homeLogo.logo1').toggleClass('active')
    $('.navUl').toggleClass('active')
})

$('#header .navUl').on('mouseover', function () {
    $('.depth2').addClass('active')
    $('#nav .navUl .menu').addClass('active')

})
$('#header .navUl').on('mouseout', function () {
    $('.depth2').removeClass('active')
    $('#nav .navUl .menu').removeClass('active')

})
$('#header .open').on('click', function () {
    $(this).toggleClass('on')
})


$(window).scroll(function () {
    let sct = $(this).scrollTop()
    if (sct > 100) {
        $('#header .headerFixed').addClass('scroll')
        $('#nav .navUl').addClass('scroll')
        $('.depth1').addClass('scroll')
        $('#header h1').addClass('scroll')
        $('.cd-nav-trigger').addClass('scroll')
    } else {
        $('#header .headerFixed').removeClass('scroll')
        $('#nav .navUl').removeClass('scroll')
        $('.depth1').removeClass('scroll')
        $('#header h1').removeClass('scroll')
        $('.cd-nav-trigger').removeClass('scroll')
    }
})
