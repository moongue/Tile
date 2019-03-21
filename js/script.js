function menuLogic () {
    var $header = $('#header');
    var $mobileMenuTrigger = $('.mobile-menu-toggle', $header);
    var $menuBlock = $('.drop-menu', $header);
    var openClass = 'is-open';

    // Toggle main menu.
    $mobileMenuTrigger.on('click', function(e) {
        e.preventDefault();
        $menuBlock.toggleClass(openClass);
    });
}

function smoothMenu() {
    $(".mobile-menu-toggle").click(function () {
        $(".drop-menu").slideToggle(400);
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
});