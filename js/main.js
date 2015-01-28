(function () {

    var activeClass = 'tab-active';

    var tools = [
        /*{
            label: "Google developer Console",
            url: "https://console.developers.google.com/project"
        }
        ,*/
        {
            label: "DPI Calculator for Android",
            url: "http://jennift.com/dpical.html"
        }
        , {
            label: "DP/PX converter",
            url: "http://labs.rampinteractive.co.uk/android_dp_px_calculator/"
        }
        , {
            label: "Android Design Tips",
            url: "http://www.androiddesign.tips/"
        }
         , {
            label: "Android Design Cheatsheet",
            url: "http://petrnohejl.github.io/Android-Cheatsheet-For-Graphic-Designers/"
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
            label: "Paletton",
            url: "http://paletton.com/"
        }
//         , {
//            label: "Material Palette",
//            url: "http://www.materialpalette.com"
//        }
        , {
            label: "Google Design",
            url: "http://www.google.com/design/spec/style/color.html"
        }
        , {
            label: "jsonschema2pojo",
            url: "http://www.jsonschema2pojo.org/"
        }
        , {
            label: "JsonLint",
            url: "http://jsonlint.com/"
        }
        , {
            label: "Json Viewer",
            url: "http://jsonviewer.stack.hu/"
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
            label: "Android Layout Finder",
            url: "https://www.buzzingandroid.com/tools/android-layout-finder/"
        }
        , {
            label: "TinyPNG",
            url: "https://tinypng.com/"
        }
        /*, { // problem to load in <object>
            label: "UI Prototype",
            url: "http://www.b2tsoftware.com/developer/index.php"
        }*/
        , {
            label: "Github - Material Design icons",
            url: "https://github.com/google/material-design-icons"
        }
        , {
            label: "Notification Icon Generator",
            url: "http://romannurik.github.io/AndroidAssetStudio/icons-notification.html"
        }
        , {
            label: "Launcher Icon Generator",
            url: "http://romannurik.github.io/AndroidAssetStudio/icons-launcher.html"
        }
        , {
            label: "Action Bar and Tab Icon Generator",
            url: "http://romannurik.github.io/AndroidAssetStudio/icons-actionbar.html"
        }
        , {
            label: "Android Button Maker",
            url: "http://angrytools.com/android/button/"
        }
        /*, { // problem to load in <object>
            label: "Navigation Drawer Indicator Generator",
            url: "http://romannurik.github.io/AndroidAssetStudio/icons-nav-drawer-indicator.html"
        }*/
        , {
            label: "Simple Nine-patch Generator",
            url: "http://romannurik.github.io/AndroidAssetStudio/nine-patches.html"
        }
        , {
            label: "Android Holo Colors Generator",
            url: "http://android-holo-colors.com/"
        }
        , {
            label: "Android Action Bar Style Generator",
            url: "http://jgilfelt.github.io/android-actionbarstylegenerator/"
        }
        /*, {
            label: "Roboto Font Families",
            url: "https://gist.github.com/carlol/b2010d049b19acb157fb"
        }*/
        , {
            label: "Gradle, please",
            url: "http://gradleplease.appspot.com/"
        }
       /* , {
            label: "Android Studio Tips",
            url: "https://developer.android.com/sdk/installing/studio-tips.html"
        }*/
    ];

    var $redirectUrl = $('#redirect_url');

    var $mainContent = $('#main_content');

    var $headerContainer = $('#header');

    var $title = $('#title');

    var $searchBox = $('#search');

    var $menu = $('#menu_list');

    var $basePage = $('.base-page');

    $title.click(function () {
        $basePage.css('display', 'block');
        $mainContent.attr('data', "");
        $menu.find('.' + activeClass).removeClass(activeClass);
        $redirectUrl.text("");
    });

    function searchFiltering() {
        var searchFilter = $searchBox.val();
        console.log(searchFilter);
        $menu.children().remove();
        $.each(tools, function (i, value) {
            if (value.label.toLocaleUpperCase().indexOf(searchFilter.toLocaleUpperCase()) == -1) {
                return; // skip
            }
            var $item = $("<li>" + value.label + "</li>");
            $item.click(function () {
                $basePage.css('display', 'none');
                $mainContent.attr('data', value.url);
                $menu.find('.' + activeClass).removeClass(activeClass);
                $(this).addClass(activeClass);
                $redirectUrl.text(value.url);
                $redirectUrl.unbind( "click" );
                $redirectUrl.click(function () {
                    window.open(value.url, '_blank');
                });
            });
            $menu.append($item);
        });
    }

    $searchBox.on('input', searchFiltering); // init

    // init
    searchFiltering();
    $searchBox.attr('display', 'none');

    var initFn = function () {
        var windowHeight = $(window).height();
        $mainContent.attr('height', windowHeight);
        $headerContainer.css('height', windowHeight);
        $headerContainer.overscroll({
            //hoverThumbs: true,
            direction: 'vertical'
        });
        $searchBox.width($headerContainer.width()-85);
        $searchBox.attr('display', 'visible');
    };

    $(document).ready(initFn);
    $(window).resize(initFn);

}).apply(this);
