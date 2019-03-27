function smoothMenu() {
    $(".mobile-menu-toggle").click(function () {
        $(".drop-menu").slideToggle(400);
    });
}

function showFilterCountry() {
    $('.btn-show-filter').click(function () {
        $('.filter').slideToggle(400, function () {
            $(this).toggleClass('showing');
        });
        $('.btn-show-filter').toggleClass('transform-class');
    });
}

function showSearchInput() {
    $(".show-search-input").click(function () {
        $(".search-input").slideToggle(400);
    });
}

function tabs() {
    $('ul.filter').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.filter-product').find('div.block-filter-word').removeClass('active').eq($(this).index()).addClass('active');
    });

}

function sliderFactory() {
    var slider = $('.blocks-factory');

    if (slider.length) {
        slider.slick({
            infinity: true,
            dots: false,
            arrows: true
        })
    }
}

function sliderProjects() {
    var slider = $('.slider-projects');

    if (slider.length) {
        slider.slick({
            infinity: true,
            dots: false,
            arrows: true
        })
    }
}

function smoothJumpUp() {
    $(window).scroll(function() {
        if($(this).scrollTop() !== 0) {
            $('.arrow-up').fadeIn();
        } else {
            $('.arrow-up').fadeOut();
        }
    });

    $('.arrow-up').click(function() {
        $('body,html').animate({scrollTop:0},800);
    });
}


function activeInput() {
    $(".search-area").hover(function () {
        $(".hide-click").css("display", "flex");
    });

    $(document).mouseup(function (e) { // событие клика по веб-документу
        var div = $(".hide-click"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.css("display", "none"); // скрываем его
        }
    })
}

function slider() {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        speed: 1000
    });
}

$(window).on('load', function () {
    activeInput();
    smoothMenu();
    slider();
    showSearchInput();
    showFilterCountry();
    tabs();
    sliderFactory();
    smoothJumpUp();
    sliderProjects();
});