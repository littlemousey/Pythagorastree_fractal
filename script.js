shrink = 0.5*Math.sqrt(2);

var c = document.getElementById('myCanvas');
var drawing = c.getContext('2d');

var r = 0, g = 0, b = 0;

var length = 100;
var stop = 5;
drawing.fillStyle = rgb(r, g, b);
var count = 0;

//origin van canvas op 300,300 zetten
drawing.translate(500,500);
drawing.rotate(-Math.PI/4);


function recursion(length){
	drawing.fillStyle = rgb (count * 40, g, b);
	// Teken de linkse
	//drawing.restore();
 	drawing.save();
 	drawing.translate(length,0);
 	drawing.rotate(-Math.PI/4);
 	//teken linkerkant (bestond al)
 	drawing.fillRect(0,0,length*shrink,length*shrink);

 	// Ga door links
  	if(length > stop){
		//nieuw
		//recursionRight(shrink*length);

		count ++;
		recursion(shrink * length);
		count --;

	};

	drawing.restore();

	// Teken de rechtse
	drawing.translate(length,length);
	drawing.rotate(Math.PI/4);
	drawing.translate(0,-length*shrink);
 	drawing.fillRect(0,0,length*shrink,length*shrink);

 	// Ga door rechts
  	if(length > stop){
		count ++;
		recursion(shrink * length);
		count --;
	};
};

function recursionRight(length){
	//teken rechterkant (nieuw ans)
	//drawing.rotate(Math.PI/4);
 	drawing.fillRect(length,0,length*shrink,length*shrink);
};

// Teken de eerste

drawing.translate(length,0);
drawing.rotate(-Math.PI/4);
drawing.fillRect(0,0,length*shrink,length*shrink);


// Teken de rest
recursion(length * shrink);

function rgb(r, g, b) {
	return 'rgb(' + r + ',' + g + ',' + b + ')';
}