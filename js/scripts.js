// http://jsfiddle.net/AbdiasSoftware/7PRNN/


//$("#imgInp").change(function(){
//    readURL(this);
//});
//
//function readURL(input) {
//
//    if (input.files && input.files[0]) {
//        var reader = new FileReader();
//
//        reader.onload = function (e) {
//            $('#blah').attr('src', e.target.result);
//        }
//
//        reader.readAsDataURL(input.files[0]);
//    }
//}

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var img = new Image();

var inputInitials = $('#js-input-initials'),
    inputYear     = $('#js-input-year'),
    inputPhoto    = $('#js-input-photo'),
    userInitials  = $('#js-initials'),
    userYear      = $('#js-year');

img.onload = function() {
    context.drawImage(img, 0, 0);
};

img.src = '/assets/album-cover.jpg';


//var populate = function(input, target) {
//    input.keyup( function() {
//        var value = $( this ).val();
//        target.text( value );
//    }).keyup();
//};

context.fillStyle = '#fff';
context.font = '20px sans-serif';

var alphabet = $.map(('abcdefghijklmnopqrstuvwxyz' + '').split(''), function(letter) {
    return letter + '.svg';
})

//console.log( alphabet[0], alphabet[2] );

$('#js-save').on('click', function() {
    var inits = inputInitials.val(),
        yrs   = inputYear.val();

    console.log(inits)

    $.each(inits, function() {
        if($(this) == 't') {
            console.log('this is t')
        }
    })

    if(inits == 't') {
        console.log('t here');
        var img = new Image();
        context.drawImage(img, 50, 50);
        img.src = '/assets/alphabet/t.svg';
    }

    context.fillText(inits, 10, canvas.height / 3 - 15);
    context.fillText(yrs, 10, canvas.height / 2 - 15);

    $(".js-preview").html(canvas);
});

var toSVG = function() {

}

/**
 * This is the function that will take care of image extracting and
 * setting proper filename for the download.
 * IMPORTANT: Call it from within a onclick event.
 */
function downloadCanvas(link, canvasId, filename) {
    link.href = document.getElementById(canvasId).toDataURL();
    link.download = filename;
}

/**
 * The event handler for the link's onclick event. We give THIS as a
 * parameter (=the link element), ID of the canvas and a filename.
 */
document.getElementById('download').addEventListener('click', function() {
    downloadCanvas(this, 'canvas', inputInitials.val() + '.' + inputYear.val() + '.png');
}, false);

/**
 * Draw something to canvas
 */















///**
// * Created by Tyler on 11/23/14.
// */
//

//
//var populate = function(input, target) {
//    input.keyup( function() {
//        var value = $( this ).val();
//        target.text( value );
//    }).keyup();
//};
//
//populate(inputInitials, userInitials);
//populate(inputYear, userYear);
//

//
//var data = '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">' +
//    '<foreignObject width="100%" height="100%">' +
//    '<div xmlns="http://www.w3.org/1999/xhtml" style="font-size:40px">' +
//    '<em>I</em> like' +
//    '<span style="color:white; text-shadow:0 0 2px blue;">' +
//    'cheese</span>' +
//    '</div>' +
//    '</foreignObject>' +
//    '</svg>';
//
//var svg = new Blob([data], {type: 'image/svg+xml;charset=utf-8'});
//
//

//

//
//
//
//
////window.onload = function() {
////    var canvas = document.getElementById("canvas");
////    var context = canvas.getContext("2d");
////    context.fillStyle = "green";
////    context.fillRect(50, 50, 100, 100);
////    // no argument defaults to image/png; image/jpeg, etc also work on some
////    // implementations -- image/png is the only one that must be supported per spec.
////}