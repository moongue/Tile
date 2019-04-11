function smoothMenu() {
    $(".mobile-menu-toggle").click(function () {
        $(".block-with-menu").slideToggle(400, function () {
            $('.sidebar-other-page').toggleClass('top-offset');
            $('.top-sidebar').toggleClass('offset-top-main')
        })
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

function focusInput() {
    var input = $('.input-search-head');
    var activeBlock = $('.block-input');

    input.focus(function () {
        activeBlock.addClass('active');
    });

    input.focusout(function () {
        activeBlock.removeClass('active');
    })

}

function showSearchInput() {
    var div = $('.block-input');

    if(document.documentElement.clientWidth <= 780) {
        $(".show-search-input").click(function () {
            div.show(400);
        });
        $(document).mouseup(function (e){ // событие клика по веб-документу
            if (!div.is(e.target) // если клик был не по нашему блоку
                && div.has(e.target).length === 0) { // и не по его дочерним элементам
                div.hide(400); // скрываем его
            }
        });
    }
}

function showSearch() {
    $(".search").click(function () {
        $(".hide-click").slideToggle(400);
    });
}

function interactiveMenu() {
    var back = $('.btn-exit');

    $('.script-walls').click(function(){
        $('.interactive-menu-first').fadeOut(400, function() {
            $('.interactive-menu-two').fadeIn(400)
        })
    });
    $('.script-street').click(function(){
        $('.interactive-menu-first').fadeOut(400, function() {
            $('.interactive-menu-three').fadeIn(400)
        })
    });
    $('.script-floors').click(function(){
        $('.interactive-menu-first').fadeOut(400, function() {
            $('.interactive-menu-four').fadeIn(400)
        })
    });
    $('.script-related-products').click(function(){
        $('.interactive-menu-first').fadeOut(400, function() {
            $('.interactive-menu-five').fadeIn(400)
        })
    });
    $('.script-mosaic').click(function(){
        $('.interactive-menu-first').fadeOut(400, function() {
            $('.interactive-menu-six').fadeIn(400)
        })
    });
    back.click(function () {
       $('.interactive-menu-two, .interactive-menu-three, .interactive-menu-four, .interactive-menu-five, .interactive-menu-six').fadeOut(400, function () {
           $('.interactive-menu-first').fadeIn(400)
       })
    })
}

function scrollSidebar() {
    $(window).scroll(function() {
        /*----------------------------------
        sticky block script by makeasite.ru
        ----------------------------------*/
        var sb_m = 400; /* отступ сверху и снизу */
        var mb = 300; /* высота подвала с запасом */
        var st = $(window).scrollTop();
        var sb = $(".sidebar-bg");
        var sbi = $(".sidebar-bg .sidebar");
        var sb_ot = sb.offset().top;
        var sbi_ot = sbi.offset().top;
        var sb_h = sb.height();

        if(sb_h + $(document).scrollTop() + sb_m + mb < $(document).height()) {
            if(st > sb_ot) {
                var h = Math.round(st - sb_ot) + sb_m;
                sb.css({"paddingTop" : h});
            }
            else {
                sb.css({"paddingTop" : 0});
            }
        }
    });
}

function tabs() {
    $('ul.filter').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.filter-product').find('div.block-filter-word').removeClass('active').eq($(this).index()).addClass('active');
    });

}

function mainTabs() {
    $('.main-tabs').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('#discounts').find('.one-tab').removeClass('active').eq($(this).index()).addClass('active');
    });
    $('.main-tabs').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('#discounts').find('.slider').slick('setPosition');
    });
}

function dropdown() {
    $('.show-purpose').click(function () {
        $('.show-purpose + ul').slideToggle(400, function () {
            $(this).toggleClass('showing');
        });
        $('.show-purpose').parents('li').toggleClass('active');
    });

    $('.show-type').click(function () {
        $('.show-type + ul').slideToggle(400, function () {
            $(this).toggleClass('showing');
        });
        $('.show-type').parents('li').toggleClass('active');
    });

    $('.show-materials').click(function () {
        $('.show-materials + ul').slideToggle(400, function () {
            $(this).toggleClass('showing');
        });
        $('.show-materials').parents('li').toggleClass('active');
    });

    $('.show-size').click(function () {
        $('.show-size + ul').slideToggle(400, function () {
            $(this).toggleClass('showing');
        });
        $('.show-size').parents('li').toggleClass('active');
    });

    $('.show-color').click(function () {
        $('.show-color + ul').slideToggle(400, function () {
            $(this).toggleClass('showing');
        });
        $('.show-color').parents('li').toggleClass('active');
    });

    $('.show-surface').click(function () {
        $('.show-surface + ul').slideToggle(400, function () {
            $(this).toggleClass('showing');
        });
        $('.show-surface').parents('li').toggleClass('active');
    });

    $('.show-style').click(function () {
        $('.show-style + ul').slideToggle(400, function () {
            $(this).toggleClass('showing');
        });
        $('.show-style').parents('li').toggleClass('active');
    });

    $('.show-frost-resistance').click(function () {
        $('.show-frost-resistance + ul').slideToggle(400, function () {
            $(this).toggleClass('showing');
        });
        $('.show-frost-resistance').parents('li').toggleClass('active');
    });

    $('.show-edge-processing').click(function () {
        $('.show-edge-processing + ul').slideToggle(400, function () {
            $(this).toggleClass('showing');
        });
        $('.show-edge-processing').parents('li').toggleClass('active');
    });

    $('.show-price').click(function () {
        $('.show-price + ul').slideToggle(400, function () {
            $(this).toggleClass('showing');
        });
        $('.show-price').parents('li').toggleClass('active');
    });

    $('.show-exhibition').click(function () {
        $('.show-exhibition + ul').slideToggle(400, function () {
            $(this).toggleClass('showing');
        });
        $('.show-exhibition').parents('li').toggleClass('active');
    });
}

function select() {
    $('.select').each(function () {
        // Variables
        var $this = $(this),
            selectOption = $this.find('option'),
            selectOptionLength = selectOption.length,
            dur = 500;

        $this.hide();
        // Wrap all in select box
        $this.wrap('<div class="select"></div>');
        // Style box
        $('<div>', {
            class: 'select__gap',
            text: 'цене'
        }).insertAfter($this);

        var selectGap = $this.next('.select__gap'),
            caret = selectGap.find('.caret');
        // Add ul list
        $('<ul>', {
            class: 'select__list'
        }).insertAfter(selectGap);

        var selectList = selectGap.next('.select__list');
        // Add li - option items
        for (var i = 0; i < selectOptionLength; i++) {
            $('<li>', {
                class: 'select__item',
                html: $('<span>', {
                    text: selectOption.eq(i).text()
                })
            })
                .attr('data-value', selectOption.eq(i).val())
                .appendTo(selectList);
        }
        // Find all items
        var selectItem = selectList.find('li');

        selectList.slideUp(0);
        selectGap.on('click', function () {
            if (!$(this).hasClass('on')) {
                $(this).addClass('on');
                selectList.slideDown(dur);

                selectItem.on('click', function () {
                    var chooseItem = $(this).data('value');

                    $('select').val(chooseItem).attr('selected', 'selected');
                    selectGap.text($(this).find('span').text());

                    selectList.slideUp(dur);
                    selectGap.removeClass('on');
                });

            } else {
                $(this).removeClass('on');
                selectList.slideUp(dur);
            }
        });

    });
}

function showMoreInf() {
    var showMoreInf = $('.show-more-inf');
    var hideInf = $('.hide-inf');

    showMoreInf.click(function () {
        hideInf.slideToggle(400)
    })
}


function popup() {
    $('.open-registration').magnificPopup({
        type: 'inline',
        midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });
    $('.open-complete-registration').magnificPopup({
        type: 'inline',
        midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });
    $('.open-calc').magnificPopup({
        type: 'inline',
        midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });
    $('.open-quick-order').magnificPopup({
        type: 'inline',
        midClick: true
    });
    $('.open-checkout').magnificPopup({
        type: 'inline',
        midClick: true
    });
    $('.open-thanks').magnificPopup({
        type: 'inline',
        midClick: true
    });
    $('.forget-password').magnificPopup({
        type: 'inline',
        midClick: true
    })
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

function activeScript() {

    if (document.documentElement.clientWidth < 960) {

        $('.cap-filter').click(function () {
            $('.dropdown').slideToggle(400, function () {
                $(this).toggleClass('showing');
            });
            $('.block-button').slideToggle(400, function () {
                $(this).toggleClass('showing');
            });
            $('.cap-filter').parents('li').toggleClass('active');
        });
    }
}

function sliderProducts() {


    $('.list-products').slick({
        infinity: true,
        dots: false,
        arrows: true
    })

}

function smoothJumpUp() {
    $(window).scroll(function () {
        if ($(this).scrollTop() !== 0) {
            $('.arrow-up').fadeIn();
        } else {
            $('.arrow-up').fadeOut();
        }
    });

    $('.arrow-up').click(function () {
        $('body,html').animate({scrollTop: 0}, 800);
    });
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

function sidebarMenu() {
    var h_hght = 100; // высота шапки
    var h_mrg = 80;    // отступ когда шапка уже не видна

    $(function () {

        var elem = $('.sidebar_bg');
        var top = $(this).scrollTop();

        if (top > h_hght) {
            elem.css('top', h_mrg);
        }

        $(window).scroll(function () {
            top = $(this).scrollTop();

            if (top + h_mrg < h_hght) {
                elem.css('top', (h_hght - top));
            } else {
                elem.css('top', h_mrg);
            }
        });

    });
}

function tabProducts() {
    $('.filter-products ul').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.products').find('div.list-products').removeClass('active').eq($(this).index()).addClass('active');
    });
    $('.filter-products ul').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('.products').find('.list-products').slick('setPosition');
    });
}

$(window).on('load', function () {
    mainTabs();
    smoothMenu();
    slider();
    sliderProducts();
    showSearchInput();
    showFilterCountry();
    sidebarMenu();
    tabs();
    sliderFactory();
    smoothJumpUp();
    sliderProjects();
    dropdown();
    activeScript();
    select();
    popup();
    showSearch();
    showMoreInf();
    tabProducts();
    focusInput();
    interactiveMenu();
    scrollSidebar();
});