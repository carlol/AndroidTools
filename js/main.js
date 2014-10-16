(function () {
    
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
        , {
            label: "Android Holo Colors Generator",
            url: "http://android-holo-colors.com/"
        }
        , {
            label: "Android Action Bar Style Generator",
            url: "http://jgilfelt.github.io/android-actionbarstylegenerator/#name=example&compat=holo&theme=light&actionbarstyle=solid&texture=0&hairline=0&neutralPressed=1&backColor=E4E4E4%2C100&secondaryColor=D6D6D6%2C100&tabColor=33B5E5%2C100&tertiaryColor=F2F2F2%2C100&accentColor=33B5E5%2C100&cabBackColor=FFFFFF%2C100&cabHighlightColor=33B5E5%2C100"
        }
    ];

    var $mainContent = $('#main_content');

    var $headerContainer = $('#header');

    var $menu = $('#menu_list');

    var $bgImage = $('#bg');

    $.each(tools, function (i, value) {
        var $item = $("<li>" + value.label + "</li>");
        $item.click(function () {
            $bgImage.css('display', 'none');
            $mainContent.attr('data', value.url);
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