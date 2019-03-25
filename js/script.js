
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
   }) ;
}

function showSearchInput() {
    $(".show-search-input").click(function () {
        $(".search-input").slideToggle(400);
    });
}

function tabs() {
    $('ul.filter').on('click', 'li:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.filter-product').find('div.block-filter-word').removeClass('active').eq($(this).index()).addClass('active');
    });

}

function activeInput() {
    $(".search-area").hover(function () {
        $(".hide-click").css("opacity", "1");
    });

    $(document).mouseup(function (e) { // событие клика по веб-документу
        var div = $(".hide-click"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.css("opacity", "0"); // скрываем его
        }
    })
}

function slider () {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000
    });
}

$(window).on('load', function() {
    activeInput();
    smoothMenu();
    slider();
    showSearchInput();
    showFilterCountry();
    tabs();
});