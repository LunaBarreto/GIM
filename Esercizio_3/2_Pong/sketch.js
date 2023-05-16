//costruire una variabile per dare movimento
//Lascia che posizione X sia 200
let posX = 200
let posY = 200
let velX = 4
let velY = 5
let value = 0

function setup(){
	createCanvas(600, 400)
	posX = width/2
	posY = width/2
	velX = random(-4,4)
	velY = random(-4,4)

	background(150,200,50)

}

function draw(){
	noStroke()
	//fill(map(posX, 0,width,0,255), map (posY,0,width,0,255))
	
	fill (random(255),random(255),random(255))
	ellipse (posX,posY,20)
	
	//creare lo spostamento delloggetto
	posX = posX + velX
	posY = posY + velY

	//Per farla rimbalzare

	posX = posX + velX
	posY = posY + velY

	if (posX >= width || posX <= 0 ) velX = -velX 
	if (posY >= height || posY <= 0 ) velY = -velY 
}

//screenshot
function keyPressed (){
	save ("pong.png")
}
// returns a MouseEvent object
// as a callback argument
function mouseMoved(event) {
	console.log(event);
  }