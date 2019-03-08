

var draw = false;
var coords = [];
var canvas = document.getElementById('drawcanvas');
var context = canvas.getContext('2d');
canvas.addEventListener('click', function (event) {
    coords = [];
    draw = !draw;
});
canvas.addEventListener('mousemove', function (event) {
    if (draw) {
        context = canvas.getContext("2d");
        var coord = { 'x': event.x - this.offsetLeft, 'y': event.y - thisoffsetTop };
        coords.push(coord);
        var max = coords.length - 1;
        if (typeof coords[max - 1] !== "undefined") {
            var curr = coords[max], prev = coords[max - 1];
            context.beginPath();
            context.moveTo(prev.x, prev.y);
            context.lineTo(curr.x, curr.y);
            context.stroke();
        }
    }
});
                    
                        
function start() {
	console.log("Hi!")
}



