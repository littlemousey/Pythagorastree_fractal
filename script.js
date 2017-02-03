shrink = 0.5*Math.sqrt(2);

var c = document.getElementById('myCanvas');
var drawing = c.getContext('2d');

var r = 0, g = 0, b = 0;

var length = 100;
var stop = 5;
drawing.fillStyle = rgb(r, g, b);
var depth = 0;

// Origin van canvas
drawing.translate(500,500);
drawing.rotate(-Math.PI/4);


function recursion(length, depth){
	drawing.fillStyle = rgb (depth * 40, g, b);
	console.log(depth);
	// Teken de linker
 	drawing.save();
 	drawing.translate(length,0);
 	drawing.rotate(-Math.PI/4);
 	drawing.fillRect(0,0,length*shrink,length*shrink);

 	// Ga door links
  	if(length > stop){
		recursion(shrink * length, depth + 1);

	};

	drawing.restore();

	// Teken de rechter
	drawing.translate(length,length);
	drawing.rotate(Math.PI/4);
	drawing.translate(0,-length*shrink);
 	drawing.fillRect(0,0,length*shrink,length*shrink);

 	// Ga door rechts
  	if(length > stop){
		recursion(shrink * length, depth + 1);
	};
};

// Teken de eerste
drawing.translate(length,0);
drawing.rotate(-Math.PI/4);
drawing.fillRect(0,0,length*shrink,length*shrink);


// Teken de rest
recursion(length * shrink, depth);

function rgb(r, g, b) {
	return 'rgb(' + r + ',' + g + ',' + b + ')';
}