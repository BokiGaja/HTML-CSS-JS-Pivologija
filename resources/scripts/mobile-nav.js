/* Mobile navigation - changing icons NOT WORKING */
    
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js-nav-icon img');
        /* slideToggle opens and close box with elements, in () is time for how long it will open in miliseconds */
        nav.slideToggle(200);
        /* if (icon.hasClass('ion-ios-navigate')) {
            /* Changing icons when clicked with new one 
            icon.addClass('ion-md-close');
            icon.removeClass('ion-ios-navigate');
        } else {
            icon.addClass('ion-ios-navigate');
            icon.removeClass('ion-md-close');
        }*/
        
    });