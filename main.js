(function() {
    function disableProtection() {
        var elements = document.getElementsByTagName("*");
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i];

            element.style.userSelect = 'text';
            element.style.webkitUserSelect = 'text';
            element.style.mozUserSelect = 'text';
            element.style.msUserSelect = 'text';
            element.style.pointerEvents = 'auto';

            element.onselectstart = null;
            element.oncopy = null;
            element.onmousedown = null;
            element.oncontextmenu = null;
            element.ondragstart = null;

            element.removeAttribute('data-selectable');
            element.removeAttribute('data-copyable');
            element.removeAttribute('data-draggable');
        }

        var events = ['mousedown', 'selectstart', 'copy', 'contextmenu', 'dragstart'];
        for (var j = 0; j < events.length; j++) {
            document.addEventListener(events[j], function(event) {
                event.stopPropagation();
                if (event.type === 'copy') {
                    var selection = window.getSelection().toString();
                    event.clipboardData.setData('text/plain', selection);
                }
                return true;
            }, true);
        }

        var style = document.createElement('style');style.innerHTML = '* { user-select: text !important; -webkit-user-select: text !important; -moz-user-select: text !important; -ms-user-select: text !important; }';        document.head.appendChild(style);
    }
 
    setInterval(disableProtection, 500);
    console.log('拡張保護解除スクリプトが実行されました。');})();
