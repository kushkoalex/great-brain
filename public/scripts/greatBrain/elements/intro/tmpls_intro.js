(function (gb) {
    var tmpls = gb.tmpls,
        a9 = gb.global.A9,
        l10n = a9.l10n,
        u;


    tmpls.intro = function (introData) {
        return {
            c: 'intro-wrapper', C: [

                {
                    c: 'intro', n:'intro', C:[
                    tmpls.child(),
                    tmpls.highEducation(),
                    tmpls.maze(),
                    tmpls.greenLine(),
                    tmpls.asUsual(),
                    tmpls.mazeLayoutTextSmall()//,
                    //tmpls.finalLayout()
                ]
                },
                tmpls.finalLayout(),
                {c: 'skip-intro-wrapper',n:'skipIntroWrapperButton', C: {c: 'skip-intro', e: 'a', h:gb.settings.controlsDescriptors.site.mainPageUrl, t: l10n('intro_skipIntro')}}]
        }
    };


    tmpls.finalLayout = function(){
        return{c:'final-layout hidden',n:'finalLayout', C:{c:'buttons',C:[{e:'a',h:gb.settings.controlsDescriptors.site.roadMapUrl, c:'button find-out',H:l10n('intro_findOutAboutRoadMap')},{e:'a',h:gb.settings.controlsDescriptors.site.mainPageUrl,c:'button enter-site',H:l10n('intro_enterSite')}]}}
    };

    tmpls.asUsual = function(){
        return{ c: 'as-usual',n:'asUsual', H: l10n('intro_asUsual')}
    };

    tmpls.mazeLayoutTextSmall = function(){
        return{c:'maze-layout-text-small hidden',n:'mazeLayoutTextSmall',C:{H:l10n('intro_mazeLayoutText')}}
    };

    tmpls.maze = function(){
        return{c:'maze-container hidden',n:'mazeContainer' ,C:[
            {c:'maze'},
            {c:'maze-layout hidden',n:'mazeLayout',C:{c:'text',H:l10n('intro_mazeLayoutText')}},
            {c:'maze-shutter',n:'mazeShutter'},
            tmpls.whiteLine()
        ]}
    };

    tmpls.child = function(){
        return{c:'child hidden',n:'child', C:[{c:'dot'},{t:l10n('intro_yourChild','firstUpper')}]}
    };

    tmpls.highEducation = function(){
      return{c:'high-edu hidden',n:'highEdu',C:[{c:'dot'},{t:l10n('intro_highEducation','firstUpper')}]}
    };

    tmpls.whiteLine = function(){
        return {c:'white-line hidden',n:'whiteLine'}
    };

    tmpls.greenLine = function(){
        return {c:'green-line hidden',n:'greenLine'}
    };


}(GB));