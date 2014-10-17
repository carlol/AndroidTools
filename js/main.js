(function () {

    var activeClass = 'tab-active';

    var tools = [
        {
            label: "DPI Calculator for Android",
            url: "http://jennift.com/dpical.html"
        }
        , {
            label: "Hex Color Tool",
            url: "http://hexcolortool.com/"
        }
        , {
            label: "RGB-to-Hex Conversion",
            url: "http://www.javascripter.net/faq/rgbtohex.htm"
        }
        , {
            label: "Json Formatter & Validator",
            url: "http://jsonformatter.curiousconcept.com/"
        }
      /*  , {
            label: "RegExr v2.0",
            url: "http://www.regexr.com/"   
        }*/
        , {
            label: "Android Arsenal",
            url: "https://android-arsenal.com/"
        }
        /*, {
            label: "IconsDB",
            url: "iconsdb.com"
        }*/
        , {
            label: "Android Holo Colors Generator",
            url: "http://android-holo-colors.com/"
        }
        , {
            label: "Android Action Bar Style Generator",
            url: "http://jgilfelt.github.io/android-actionbarstylegenerator/"
        }
    ];

    var $redirectUrl = $('#redirect_url');

    var $mainContent = $('#main_content');

    var $headerContainer = $('#header');

    var $menu = $('#menu_list');

    var $bgImage = $('#bg');

    $.each(tools, function (i, value) {
        var $item = $("<li>" + value.label + "</li>");
        $item.click(function () {
            $bgImage.css('display', 'none');
            $mainContent.attr('data', value.url);
            $menu.find('.' + activeClass).removeClass(activeClass);
            $(this).addClass(activeClass);
            $redirectUrl.text(value.url);
            $redirectUrl.click(function () {
                window.open(value.url, '_blank');
            });
        });
        $menu.append($item);
    });

    /*$.each(tools, function (i, value) {
        var $item = $("<li>" + value.label + "</li>");
        $item.click(function () {
            $bgImage.css('display', 'none');
            $mainContent.attr('data', value.url);
        });
        $menu.append($item);
    });*/

    var initFn = function () {
        var windowHeight = $(window).height();
        $mainContent.attr('height', windowHeight);
        $headerContainer.css('height', windowHeight);
        $headerContainer.overscroll({
            //hoverThumbs: true,
            direction: 'vertical'
        });
    };

    // init
    $(document).ready(initFn);

    //$(document).resize(initFn);

}).apply(this);