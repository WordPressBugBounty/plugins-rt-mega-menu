
function openRTMEGAmobile() { 
    document.querySelector('.enabled-mobile-menu .mobile-menu-area').classList.add('opened');
}

function closeRTMEGAmobile() { 
    document.querySelector('.enabled-mobile-menu .mobile-menu-area').classList.remove('opened');
}

function closeRTMEGAmobile() { 
    document.querySelector('.rtmega-menu-top-cls').classList.remove('opened');
}


(function($) {

    RTmegaMenu = {
        init: function () {
            this.enableAccordion();
            this.enableHeaderScript();
            $( document )
            .on( 'click.RTmegaMenu', '.rtmega-menu-vertical-expand-button-wrapper a', this.expandVerticalMenu )
        },
        expandVerticalMenu: function(e){
            e.preventDefault();
            let widgetID = $(this).attr('widget_id');
            console.log(widgetID);
            $('.enabled-vertical-menu .vertical-expaned-menu-area'+'.'+widgetID+ ' .rtmega-menu-vertical-expanded').toggleClass('opened');
        },
        enableAccordion: function(){
            $(".rtmega-menu-area .mobile-menu-area .rtmega-megamenu .menu-item-has-children > .menu-link").removeAttr('href', '#');
            if($(".rtmega-menu-area .mobile-menu-area .rtmega-menu-mobile-sidebar .rtmega-megamenu").length){
                $(".rtmega-menu-area .mobile-menu-area .rtmega-menu-mobile-sidebar .rtmega-megamenu").mgaccordion({
                    theme: 'tree',
                });
            }

            if($(".rtmega-menu-area .rtmega-megamenu.vertical.vertical-submenu-expand-mode-click").length){
                $(".rtmega-menu-area .rtmega-megamenu.vertical.vertical-submenu-expand-mode-click").mgaccordion({
                    theme: 'tree',
                });
            }
        },
        enableHeaderScript: function () {
            let headerInnerWidth = $('.header-inner .e-con > .e-con-inner').width();
            $('.sub-menu.rtmegamenu-contents.full-width-mega-menu').css('width', headerInnerWidth+'px');
            $('.sub-menu.rtmegamenu-contents.full-width-mega-menu').css('max-width', headerInnerWidth+'px');
            $('.elementor-widget.elementor-widget-rt-mega-navigation-menu').css('position', 'static');
            $('.elementor-widget.elementor-widget-rt-mega-navigation-menu').parent().css('position', 'static');

            $(window).resize(function(){
                let headerInnerWidth = $('.header-inner .e-con > .e-con-inner').width();
                $('.sub-menu.rtmegamenu-contents.full-width-mega-menu').css('width', headerInnerWidth+'px');
                $('.sub-menu.rtmegamenu-contents.full-width-mega-menu').css('max-width', headerInnerWidth+'px');
            });
        }

    }
    RTmegaMenu.init();

    if ($('.rtmega-menu-vertical-expanded').length) {
        function closeRTMEGAmobile_top() {
            $(".rtmega-menu-vertical-expanded").removeClass("opened");
        }
        $(".rtmega-menu-top-cls").click(closeRTMEGAmobile_top);
    }

})(jQuery);