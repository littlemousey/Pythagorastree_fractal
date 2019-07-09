shrink = 0.5 * Math.sqrt(2);

var c = document.getElementById("myCanvas");
var drawing = c.getContext("2d");

var r = 0,
  g = 0,
  b = 0;

var length = 100;
var stop = 1;
drawing.fillStyle = rgb(r, g, b);
var depth = 0;

// Origin van canvas
drawing.translate(400, 400);
drawing.rotate(-Math.PI / 2);

// Teken de eerste
drawing.translate(length, 0);
drawing.fillRect(0, 0, length * shrink, length * shrink);

function recursion(length, depth) {
  drawing.fillStyle = rgb(depth * 5, depth * 25, depth * 5);
  // Teken de linker
  drawing.save();
  drawing.translate(length, 0);
  drawing.rotate(-Math.PI / 4);
  drawing.fillRect(0, 0, length * shrink, length * shrink);

  // Ga door links
  if (length > stop) {
    recursion(shrink * length, depth + 1);
  }

  drawing.restore();

  // Teken de rechter
  drawing.translate(length, length);
  drawing.rotate(Math.PI / 4);
  drawing.translate(0, -length * shrink);
  drawing.fillRect(0, 0, length * shrink, length * shrink);

  // Ga door rechts
  if (length > stop) {
    recursion(shrink * length, depth + 1);
  }
}

// Teken de rest
recursion(length * shrink, depth);

function rgb(r, g, b) {
  return "rgb(" + r + "," + g + "," + b + ")";
}
