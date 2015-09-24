GB.servicesMenu = function ($parent) {
    var gb = this,
        global = gb.global,
        a9 = global.A9,
        tp = global.cnCt.tp,
        eventOnPointerEnd = a9.deviceInfo.eventOnPointerEnd,
        $body = document.body,
        build,
        $digits,
        phoneNumber = [],
        $phoneNumber,
        $feedbackFormLink,
        $submitButton,
        $closeButton,
        $feedbackForm,
        u;



    build = tp('servicesMenu', gb.settings.dataModels.servicesMenu, $parent);
    $closeButton= build.closeButton;

    var $serviceMenuLink = a9.$c('service-menu-link')[0];


    a9.addEvent($body, eventOnPointerEnd, closeServicesMenuItem);
    a9.addEvent($closeButton, eventOnPointerEnd, closeServicesMenuItemByCloseButton);
    a9.addEvent($serviceMenuLink, eventOnPointerEnd, feedbackFormLinkClick);

    function closeServicesMenuItem() {
        a9.addClass($parent, 'hidden');
    }

    function closeServicesMenuItemByCloseButton(e){
        a9.addClass($parent, 'hidden');
        preventCloseFeedbackForm(e);
    }

    function feedbackFormLinkClick(e) {
        showFeedbackForm();
        preventCloseFeedbackForm(e);
    }
    function showFeedbackForm() {
        a9.removeClass($parent, 'hidden');
    }

    function preventCloseFeedbackForm(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
        } else {
            e.cancelBubble = true;
        }
    }

};
