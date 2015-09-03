GB.popupForm = function($parent){
    var gb= this,
        global = gb.global,
        a9 = global.A9,
        tp = global.cnCt.tp,
        eventOnPointerEnd = a9.deviceInfo.eventOnPointerEnd,
        settings = gb.settings,
        $popuplink,
        $layout,
        $popup,
        $popuoClassName = 'popup-link',

        build,
        u;



    build = tp('popupForm',$parent);
    $layout = build.r;
    $popup = build.popup;

    $popuplink = a9.$c($popuoClassName)[0];

    a9.addEvent($layout, eventOnPointerEnd, function(){
        this.style.display ='none';
    });

    a9.addEvent($popup, 'click', function(e){
        e.stopPropagation();
    });

    if($popuplink!==u){
        a9.addEvent($popuplink, eventOnPointerEnd, function(){
            $layout.style.display ='block';
        });
    }

};