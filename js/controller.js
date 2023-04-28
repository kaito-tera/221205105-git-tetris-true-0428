document.body.onkeydown = function( e ) {
    var keys = {
        65: 'left',
        68: 'right',
        83: 'down',
        76: 'rotate',
        38: 'drop'
    };
    if ( typeof keys[ e.keyCode ] != 'undefined' ) {
        keyPress( keys[ e.keyCode ] );
        render();
    }
};
