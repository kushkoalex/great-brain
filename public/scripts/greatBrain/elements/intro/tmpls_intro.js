(function (gb) {
    var tmpls = gb.tmpls,
        a9 = gb.global.A9,
        l10n = a9.l10n,
        u;


    tmpls.intro = function (introData) {
        return {
            c: 'intro-wrapper', C: [
                {
                    c: 'intro', n:'introContainer'
                },
                {c: 'skip-intro-wrapper', C: {c: 'skip-intro', e: 'a', h: 'index.html', t: l10n('intro_skipIntro')}}]
        }
    };


    tmpls.asUsual = function(){
        return{ c: 'as-usual', H: l10n('intro_asUsual')}
    }

}(GB));