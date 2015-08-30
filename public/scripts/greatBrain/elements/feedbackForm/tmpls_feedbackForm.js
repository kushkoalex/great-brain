(function (gb) {
    var tmpls = gb.tmpls,
        a9 = gb.global.A9,
        l10n = a9.l10n,
        u;


    tmpls.feedbackFormWrapper = function () {
        return {n: 'feedbackFormWrapper'};
    };

    tmpls.feedbackForm = function () {
        return {
            c: 'feedback-form-wrapper', C: [
                {
                    c: 'link', n: 'feedbackFormLink', C: [
                    {c: 'arrow'},
                    {c: 'text', t: l10n('feedbackLinkText')},
                    {c: 'arrow'}
                ]
                },
                {
                    c: 'feedback-form hidden', n: 'feedbackFormContent',
                    C: {
                        c: 'feedback-form-content-wrapper', C: [
                            {
                                c: 'triangle'
                            },
                            {
                                c: 'feedback-form-content', C: {
                                c: 'inner-content', C: [
                                    {c: 'enter-number-text', H: l10n('feedbackFormEnterNumberText', 'firstUpper')},
                                    {c:'phone-number-container',t:'+00 (000) 000-00-00'},
                                    {c:'send-btn active',t:l10n('feedbackFormSendBtn')},
                                    {c: 'call-text', H: l10n('feedbackFormCallText', 'firstUpper')},
                                    {c:'phone-number-container',t:'+38 (095) 198-14-90'},
                                    {c:'bottom-pattern'}
                                ]
                            }
                            }
                        ]
                    }
                }
            ]
        }
    };

}(GB));