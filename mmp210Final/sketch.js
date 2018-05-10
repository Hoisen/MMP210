var bg;

function preload(){
	bg = loadImage("quantum.jpg");
}


function setup() {
 	createCanvas(1350, 600);
  	pixelDensity(1);
	img.loadPixels();
	loadPixels();
}

function draw() {
	background("black");
	background(bg);



  for (var x = 0; x < img.width; x++){
for (var y = 0; y < img.height; y++){
	var loc = (x + y*img.width)*4;
	var r,g,b;
	r = img.pixels[loc];
	var maxdist = 50;
	var d = dist(x, y, mouseX, mouseY);
	var adjustbrightness = 255*(maxdist-d)/maxdist;
	r += adjustbrightness;
	r = constrain(r, 0, 255);
	var pixloc = (y*width + x)*4;
	pixels[pixloc] = r;
	pixels[pixloc+1] = r; 
	pixels[pixloc+2] = r;
	pixels[pixloc+3] = 255;
}
}
	updatePixels();
}

