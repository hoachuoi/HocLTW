$(document).ready(function() {
    //language
    $(".wd-language").msDropdown();

    $(".wd-language")
        .change(function() {
            $(".wd-language option:selected").each(function() {
                var value = $(this).attr('data-value');
                if (value == 'vi') {
                    window.location.href = "http://dut.udn.vn";
                } else if (value == 'en') {
                    window.location.href = "http://dut.udn.vn/en";
                }
            });
        });

    //popup login
    $('a.wd-login').magnificPopup({
        type: 'inline', // type : image, inline, iframe, ajax
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom' // my-mfp-slide-bottom & my-mfp-zoom-in or mfp-fade
    });

    $(".sub-title-accordion").click(
        function() {
            var sublink = $(this).next();
            if (sublink.css("display") == "none")
                sublink.css("display", "block");
            else
                sublink.css("display", "none");
        });
    //HorizontalMenu
    $(function() {
        cbpHorizontalMenu.init();
    });
    //flexslider
    $('.flexslider').flexslider({
        animation: "fade",
        start: function(slider) {
            $('body').removeClass('loading');
        }
    });

    //mmenu responsive
    if (!$("#Body").hasClass("dnnEditState")) {
        var pos = 'mm-top mm-right mm-bottom',
            zpos = 'mm-front mm-next';

        var $html = $('html'),
            $menu = $('nav#menu-responsive'),
            //$search	= $('div#search-responsive'),
            //$login	= $('div#login-responsive'),
            $both = $html.add($menu);
        //$both	= $html.add( $search );

        var $inp = $('input[name="pos"]'),
            $inz = $('input[name="zpos"]'),
            $inb = $inz.filter('[value="back"], [value="next"]'),
            $inf = $inz.filter('[value="front"]');
        $menu.mmenu();
        $(".menuMobile").css("display", "block");
        //$search.mmenu();
        //$login.mmenu();  
    }

    //carouFredSel
    $('#wd-foo').carouFredSel({
        auto: false,
        responsive: true,
        width: '101.8%',
        scroll: 1,
        prev: '#wd-prev',
        next: '#wd-next',
        pagination: false,
        mousewheel: true,
        items: {
            height: 'auto',
            width: '235',
            visible: {
                min: 1,
                max: 4
            }
        },
        swipe: {
            onMouse: true,
            onTouch: true
        }
    });

    //carouFredSel
    $('#wd-foo2').carouFredSel({
        auto: true,
        responsive: true,
        width: '100%',
        scroll: 1,
        prev: '#wd-prev',
        next: '#wd-next',
        pagination: false,
        mousewheel: true,
        items: {
            height: 'auto',
            width: '235',
            visible: {
                min: 1,
                max: 6
            }
        },
        swipe: {
            onMouse: true,
            onTouch: true
        }
    });

    try {
        $('#wd-easytab').easytabs();
        $('#wd-easytab-notification').easytabs();
    } catch (e) {}
});