GB.intro = function($parent){
    var gb = this,
        global = gb.global,
        a9 = global.A9,
        tp = global.cnCt.tp,
        settings = gb.settings,
        eventOnPointerEnd = a9.deviceInfo.eventOnPointerEnd,
        $feedbackFormWrapper,
        introData = settings.dataModels.intro,
        $introContainer,
        build,
        $fragment,
        u;


    build = tp('intro', introData, $parent);
    $introContainer = build.introContainer;


    $fragment = global.document.createDocumentFragment();
    var asUsual = tp('asUsual', $fragment);




    $introContainer.appendChild($fragment);



    setTimeout(step1,2000);

    function step1(){
        a9.animate(asUsual.r,['margin-top', 10, 'px', 'font-size',20,'px'], 600, step2);
    }

    function step2(){

    }

    //$introContainer.appendChild($fragment);

    //while ($introContainer.firstChild) {
    //    $introContainer.removeChild($introContainer.firstChild);
    //}

    //$introContainer.innerHTML='';

    //$introContainer.appendChild($fragment);


};