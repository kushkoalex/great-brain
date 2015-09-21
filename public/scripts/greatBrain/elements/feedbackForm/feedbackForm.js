GB.feedbackForm = function ($parent) {
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
        $feedbackForm,
        u;

    build = tp('feedbackForm', $parent);
    $feedbackFormLink = build.feedbackFormLink;
    $feedbackForm = build.feedbackFormContent;
    $submitButton = build.submitButton;
    $phoneNumber = build.phoneNumber;

    $digits = a9.$c('digit', $phoneNumber);


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


    function onKeyFeedbackFormKeyPress(e) {
        var keyCode = e.keyCode ? e.keyCode : e.which;


        if (keyCode == 13 && phoneNumber.length == 12) {
            submitForm();
        }


        //console.log(keyCode);
        //0-9
        if ((keyCode >= 48 && keyCode <= 57 || keyCode >= 96 && keyCode <= 105) && phoneNumber.length < 12) {
            switch (keyCode) {
                case 48:
                case 96:
                    phoneNumber.push('0');
                    break;
                case 49:
                case 97:
                    phoneNumber.push('1');
                    break;
                case 50:
                case 98:
                    phoneNumber.push('2');
                    break;
                case 51:
                case 99:
                    phoneNumber.push('3');
                    break;
                case 52:
                case 100:
                    phoneNumber.push('4');
                    break;
                case 53:
                case 101:
                    phoneNumber.push('5');
                    break;
                case 54:
                case 102:
                    phoneNumber.push('6');
                    break;
                case 55:
                case 103:
                    phoneNumber.push('7');
                    break;
                case 56:
                case 104:
                    phoneNumber.push('8');
                    break;
                case 57:
                case 105:
                    phoneNumber.push('9');
                    break;
            }
        }
        // backspase, delete
        else if (keyCode == 8 || keyCode == 46) {
            phoneNumber.pop();
        }
        renderPhoneNumber();

        if (keyCode == 8) {
            e.preventDefault();
        }
        // esc
        if(keyCode==27){
            closeFeedbackForm();
        }
    }

    function onPhoneNumberClick() {
        if(phoneNumber.length<12) {
            for (var i = 0; i < $digits.length; i++) {
                a9.addClass($digits[phoneNumber.length], 'active');
            }
        }
    }

    function renderPhoneNumber() {
        var i;

        for (i = 0; i < $digits.length; i++) {
            if (phoneNumber[i] !== u) {
                a9.addClass($digits[i], 'active');
                $digits[i].innerText = phoneNumber[i];
            }
            else {
                a9.removeClass($digits[i], 'active');
                $digits[i].innerText = '_';
            }
        }

        if (phoneNumber.length < 12) {
            for (i = 0; i < $digits.length; i++) {
                a9.addClass($digits[phoneNumber.length], 'active');
            }
        }

        if (phoneNumber.length === 12) {
            a9.addClass($submitButton, 'active');

        } else {
            a9.removeClass($submitButton, 'active');

        }
    }


    a9.addEvent($submitButton, eventOnPointerEnd, submitForm);


    function submitForm() {
        if (phoneNumber.length === 12) {
            //a9.request();
            closeFeedbackForm();
        }
    }

    function closeFeedbackForm() {
        a9.addClass($feedbackForm, 'hidden');
        a9.removeEvent($body, 'keydown', onKeyFeedbackFormKeyPress);
    }

    function showFeedbackForm() {
        a9.removeClass($feedbackForm, 'hidden');
        a9.addEvent($body, 'keydown', onKeyFeedbackFormKeyPress);
        a9.addEvent($phoneNumber, eventOnPointerEnd, onPhoneNumberClick);
    }

    function feedbackFormLinkClick(e) {
        showFeedbackForm();
        preventCloseFeedbackForm(e);
    }

    function feedbackFormClick(e) {
        preventCloseFeedbackForm(e)
    }
};