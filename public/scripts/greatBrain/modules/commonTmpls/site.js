(function (gb) {
    var tmpls = gb.tmpls,
        a9 = gb.global.A9,
        l10n = a9.l10n,
        u;


    tmpls.siteContentTitleContainer = function (data) {


        var content = [];

        if(data.url){
            content.push({
                c: 'caption-wrapper', C: {
                    c: 'caption', C: [{
                        e: 'a',
                        h: data.url,
                        t: data.urlText
                    }, {e: 'span', t: ' /'}
                    ]
                }
            });
        }
        else
        {
            //content.push({
            //    c: 'caption-wrapper', C: {
            //        c: 'caption', C: [{
            //            e: 'a',
            //            h: data.url,
            //            t: data.urlText
            //        }, {e: 'span', t: ' /'}
            //        ]
            //    }
            //});
        }



        content.push({
            c: 'title', H: data.title
        });

        if (data.subTitle) {
            content.push({
                c: 'sub-title', t: data.subTitle
            });
        }

        if (data.logo) {
            content.push({
                c: 'logo',
                C: {e: 'img', a: {src: data.logo}}
            });
        }

        if (data.date) {
            content.push({c: 'date-wrapper', C:{c:'date', t: data.date} });
        }


        return {
            c: 'site-content-title', C: content
        };
    };


    //tmpls.siteDetailsPageContent = function(){
    //
    //
    //};


}(GB));