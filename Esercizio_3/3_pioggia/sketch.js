function setup(){
	createCanvas(windowWidth, windowHeight)

}

function draw(){
	background(0,0,50)

	//creare un ciclo, i->variante
	for (let i=0; i<200; i=i+1) {

	let spessore = random (0,3)
	let lunghezza = random (20,100)
	let posX = random (-200,windowWidth)
	let posY = random (-200, windowWidth)
	
	stroke (255)
	strokeWeight (spessore)
	line (posX,posY, posX, posY + lunghezza) 

}

	 
}	
	
	