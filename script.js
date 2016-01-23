shrink = 0.5*Math.sqrt(2);

var c = document.getElementById("myCanvas");
var drawing = c.getContext("2d");

var length = 100;
var stop = 10;
drawing.fillStyle = "#ff9900";

//origin van canvas op 300,300 zetten
drawing.translate(300,300);
drawing.rotate(-Math.PI/4);


function recursion(length){
	// Teken de linkse
	drawing.restore();
 	drawing.translate(length,0);
 	drawing.rotate(-Math.PI/4);
 	//teken linkerkant (bestond al)
 	drawing.fillRect(0,0,length*shrink,length*shrink);
 	//teken rechterkant (nieuw ans)
 	drawing.fillRect(length,0,length*shrink,length*shrink);
 	drawing.save();

 	// Ga door links
  	if(length > stop){
		recursion(shrink * length);
	};
/*
	// Teken de rechtse
	drawing.restore();
	drawing.rotate(Math.PI/4);
	drawing.translate(0,length);
	drawing.rotate(-Math.PI/4);
 	drawing.fillRect(0,0,length*shrink,length*shrink);
 	drawing.save();

 	// Ga door rechts
  	if(length > stop){
		recursion(shrink * length);
	};  
	*/	
};

// Teken de eerste

drawing.translate(length,0);
drawing.rotate(-Math.PI/4);
drawing.fillRect(0,0,length*shrink,length*shrink);


// Teken de rest
recursion(length *shrink);