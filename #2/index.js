var height = parseFloat($("img").eq(0).css('height').split('px')[0]) * 3.5;
var width = parseFloat($("img").eq(0).css('width').split('px')[0]) * 3.5;

$("img").eq(0).css({
   'height': height,
   'width': width
})

$("img:gt(3)").remove();