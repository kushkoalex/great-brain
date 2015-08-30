GB.feedbackForm = function ($parent) {
    var gb = this,
        global = gb.global,
        a9 = global.A9,
        tp = global.cnCt.tp,
        eventOnPointerEnd = a9.deviceInfo.eventOnPointerEnd,
        $body = document.body,
        build,
        $feedbackFormLink,
        $feedbackForm;

    build = tp('feedbackForm', $parent);
    $feedbackFormLink = build.feedbackFormLink;
    $feedbackForm = build.feedbackFormContent;

    a9.addEvent($feedbackFormLink, eventOnPointerEnd, feedbackFormLinkClick);
    a9.addEvent($body, eventOnPointerEnd, closeFeedbackForm);
    a9.addEvent($feedbackForm, eventOnPointerEnd, feedbackFormClick);

    function preventCloseFeedbackForm(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
        } else {
            e.cancelBubble = true;
        }
    }

    function closeFeedbackForm(){
        a9.addClass($feedbackForm,'hidden');
    }

    function showFeedbackForm(){
        a9.removeClass($feedbackForm,'hidden');
    }

    function feedbackFormLinkClick(e) {
        showFeedbackForm();
        preventCloseFeedbackForm(e);
    }

    function feedbackFormClick(e) {
        preventCloseFeedbackForm(e)
    }
};