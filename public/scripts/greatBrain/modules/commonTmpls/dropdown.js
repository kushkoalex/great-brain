(function (gb, a9) {
    gb.tmpls.dropdown = function (data) {
        var dropDownListItems = [],
            i,
            options = data.options,
            listItems = data.listItems,
            submitUrl = options.submitUrl,
            itemClassName,
            selectedText = '',
            dropDownListHeadContent = [],
            u;

        if (listItems.length > 0) {
            selectedText = listItems[0].text;
        }

        for (i = 0; i < listItems.length; i++) {
            itemClassName = 'item noselect';
            if (i == 0) {
                itemClassName += ' first';
            }
            if (i == listItems.length - 1) {
                itemClassName += ' last';
            }
            if (options) {
                if ((options.selectedIndex !== u && options.selectedIndex === i) || (options.selectedValue !== u && options.selectedValue == listItems[i].value)) {
                    itemClassName += ' selected';
                    selectedText = listItems[i].text;
                }
            }
            dropDownListItems.push({c: itemClassName, H: listItems[i].text, a: {value: listItems[i].value}})
        }

        if (options.hasSplitter === true) {
            dropDownListHeadContent.push({c: 'splitter'});
        }
        dropDownListHeadContent.push({c: 'text noselect', n: 'selectedText', H: selectedText});
        dropDownListHeadContent.push({c: 'triangle'});


        return {
            c: 'drop-down-list-wrapper', C: [
                {
                    e: 'form', n: 'selectForm', a: {method: 'post', action: ''}, C: {
                    c: 'drop-down-list-head',
                    n: 'dropDownListHead',
                    C: dropDownListHeadContent
                }
                },
                {
                    c: 'drop-down-list-items hidden', n: 'items', C: dropDownListItems
                }

            ]
        };
    };

}(GB, A9));


(function (a9, gb) {
    a9.dropdown = function ($parent, listItems, options) {
        var tp = gb.global.cnCt.tp,
            $body = document.body,
            build,
            $head,
            marker = 'dropdowncontrolitems',
            $items,
            $selectedText,
            eventOnPointerEnd = a9.deviceInfo.eventOnPointerEnd,
            eventOnPointerUp = a9.deviceInfo.eventOnPointerUp;


        build = tp('dropdown', {options: options, listItems: listItems}, $parent);
        $head = build.dropDownListHead;
        $items = build.items;
        $selectedText = build.selectedText;

        a9.addClass($items, marker);

        var $form = build.selectForm;

        //console.log($form);

        a9.addEvent($head, eventOnPointerEnd, toggleItems);
        a9.addEvent($body, eventOnPointerEnd, hideItems);
        a9.addEvent($items, eventOnPointerUp, selectItem);


        function toggleItems(e) {
            hideOtherControlsExceptCurrent($items);
            if (a9.hasClass($items, 'hidden')) {
                a9.removeClass($items, 'hidden');
            }
            else {
                a9.addClass($items, 'hidden');
            }
            preventHideItems(e);
        }

        function hideOtherControlsExceptCurrent(obj) {
            var controls = a9.$c(marker);
            for (var i = 0; i < controls.length; i++) {
                if (obj !== controls[i]) {
                    a9.addClass(controls[i], 'hidden');
                }
            }
        }

        function hideItems(e) {
            //console.log($items);
            //console.log('hide');
            a9.addClass($items, 'hidden');
        }

        function selectItem(e) {
            $selectedText.innerHTML = e.target.innerHTML;
            $form.setAttribute('action', a9.supplant(options.submitUrl, {value: e.target.getAttribute('value')}));
            $form.submit();
            //console.log($form.getAttribute('action'));
        }

        function preventHideItems(e) {
            if (e.stopPropagation) {
                e.stopPropagation();
            } else {
                e.cancelBubble = true;
            }
        }
    }
})(A9, GB);