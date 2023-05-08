function setup(){
	createCanvas(400, 400)
}

function draw(){
	background(220,220,220)
	
	stroke (0)

	point(30,50)
	point(0,0)
	point(31,50)
	
	//senza traccia
	noStroke()
	fill (255,255,0)
	rect(120,120,90)
	
	rect (150,150,90)
	
	point(32,50)
	
	point(33,50)

	fill (0,180,240,128)
	ellipse(200,240,80,80)
	

	stroke(0,200,0)
	strokeWeight (3)
	fill (255,0,0)
	rect(0,200,45,90)
	
	//funzione che disegna un segmento
	line (50,60,200,280)

	noFill()
	triangle (310,90, 390,160, 240,180)
	
}


//per trovare un errore inspector, Js console, ReferenceError, file/linea