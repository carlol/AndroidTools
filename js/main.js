(function () {

    var activeClass = 'tab-active';

    var tools = {
        widgets: [
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
        , {
                label: "Android Arsenal",
                url: "https://android-arsenal.com/"
        }
        , {
                label: "Android Layout Finder",
                url: "https://www.buzzingandroid.com/tools/android-layout-finder/"
        }
        , {
                label: "TinyPNG",
                url: "https://tinypng.com/"
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
        , {
                label: "Gradle, please",
                url: "http://gradleplease.appspot.com/"
        }
    ],
        links: [
            {
                label: "Google developer Console",
                url: "https://console.developers.google.com/project"
        }, {
                label: "Material Palette",
                url: "http://www.materialpalette.com"
        }, {
                label: "RegExr v2.0",
                url: "http://www.regexr.com/"
        }, {
                label: "IconsDB",
                url: "http://www.iconsdb.com/"
        }, {
                label: "UI Prototype",
                url: "http://www.b2tsoftware.com/developer/index.php"
        }, {
                label: "Github - Material Design icons",
                url: "https://github.com/google/material-design-icons"
        }, {
                label: "Roboto Font Families",
                url: "https://gist.github.com/carlol/b2010d049b19acb157fb"
        }, {
                label: "Android Studio Tips",
                url: "https://developer.android.com/sdk/installing/studio-tips.html"
        }, {
                label: "Warranty Check - Lookup",
                url: "https://imeidata.net/warranty/lg"
        }
    ]

    };

    var $redirectUrl = $('#redirect_url');

    var $mainContent = $('#main_content');

    var $headerContainer = $('#header');

    var $title = $('#title');

    var $searchBox = $('#search');

    var $menuWidget = $('#menu_widget_list');
    var $menuLink = $('#menu_link_list');

    var $basePage = $('.base-page');

    // tabs
    var $tabWidgets = $('.tab_widgets');
    var $tabLinks = $('.tab_links');

    var _ref_ = "ref";

    function reset() {
        $basePage.css('display', 'block');
        $mainContent.attr('data', "");
        $menuWidget.find('.' + activeClass).removeClass(activeClass);
        $redirectUrl.text("");
        resetUrl();
    }

    function selectMenuItem($menu, $item) {
        $menu.find('.' + activeClass).removeClass(activeClass);
        $item.addClass(activeClass);
    }

    function filterMenu($menu, itemList, searchFilter, isRedirect) {
        $menu.children().remove();
        $.each(itemList, function (i, value) {
            if (value.label.toLocaleUpperCase().indexOf(searchFilter.toLocaleUpperCase()) == -1) {
                return; // skip
            }
            var $item = $('<li><span>' + value.label + '</span></li>');
            if (isRedirect) {
                $item.find('span').addClass('link');
            }
            $item.click(function () {
                if (isRedirect) {
                    window.open(value.url, '_blank');
                } else {
                    selectMenuItem($menu, $(this));
                    updateUrl(value);
                    $mainContent.attr('data', value.url);
                    $basePage.css('display', 'none');
                    $redirectUrl.text(value.url);
                    $redirectUrl.unbind("click");
                    $redirectUrl.click(function () {
                        window.open(value.url, '_blank');
                    });
                }
            });
            $menu.append($item);
        });
    }

    function searchFiltering() {
        var searchFilter = $searchBox.val();
        filterMenu($menuWidget, tools.widgets, searchFilter);
        filterMenu($menuLink, tools.links, searchFilter, true);
    }

    function updateUrl(value) {
        var newUrl = window.location.pathname + ((value) ? "?" + _ref_ + "=" + value.url : "");
        window.history.pushState("", "", newUrl);
    }

    function resetUrl() {
        updateUrl();
    }

    function selectMenyByUrl() {
        var ref = $.QueryString[_ref_];
        tools.widgets.forEach(function (value, i) {
            if (value.url == ref) {
                $($menuWidget.find('li')[i]).click();
            }
        });
    }


    $title.click(function () {
        reset();
    });

    $searchBox.on('input', searchFiltering); // init

    $tabWidgets.click(function () {
        $menuLink.addClass('hidden');
        $menuWidget.removeClass('hidden');
    });
    $tabLinks.click(function () {
        reset();
        $menuWidget.addClass('hidden');
        $menuLink.removeClass('hidden');
    });

    // init
    searchFiltering();
    $searchBox.attr('display', 'none');

    var initFn = function () {
        var windowHeight = $(window).height();
        $mainContent.attr('height', windowHeight);
        $headerContainer.css('height', windowHeight);
        $headerContainer.overscroll({
            direction: 'vertical'
        });
        $searchBox.width($headerContainer.width() - 85);
        $searchBox.attr('display', 'visible');

        selectMenyByUrl();
    };

    $(document).ready(initFn);
    $(window).resize(initFn);

}).apply(this);