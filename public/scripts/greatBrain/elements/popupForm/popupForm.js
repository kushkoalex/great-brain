GB.popupForm = function($parent){
    var gb= this,
        global = gb.global,
        a9 = global.A9,
        tp = global.cnCt.tp,
        eventOnPointerEnd = a9.deviceInfo.eventOnPointerEnd,
        $body = document.body,
        settings = gb.settings,
        $popuplink,
        $layout,
        $popup,
        $popupClassName = 'popup-link',

        build,
        u;



    build = tp('popupForm',$parent);
    $layout = build.r;
    $popup = build.popup;

    $popuplink = a9.$c($popupClassName)[0];

    a9.addEvent($layout, eventOnPointerEnd, function(){
        $layout.style.display ='none';
    });

    a9.addEvent($body,'keydown',function(e){
        var keyCode = e.keyCode ? e.keyCode : e.which;
        // esc
        if(keyCode==27){
            $layout.style.display ='none';
        }
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