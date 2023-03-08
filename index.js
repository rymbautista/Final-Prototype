let frog,ball,hat,cookie,book,painting;
let happy = 100;
let hunger = 100;

function setup() {
  frameRate(60);
  createCanvas(windowWidth, windowHeight);
  frog = new Sprite();
	frog.width = 50;
	frog.height = 60;
    frog.x = 150;
    frog.y = windowHeight-(windowHeight/16);
  frog.color = '#4CAF50';
  ball = new Sprite();
    ball.diameter = 50;
    ball.x = windowWidth/4;
    ball.y = windowHeight/2.2-25;
    ball.color = '#F44336';
  hat = new Sprite();
    hat.diameter = 50;
    hat.x = windowWidth/4 +100;
    hat.y = windowHeight/2.2-25;
    hat.color = '#3668F4';
  book = new Sprite();
    book.diameter = 50;
    book.x = windowWidth/4;
    book.y = windowHeight/1.5-25;
    book.color = '#B78537';
  cookie = new Sprite();
    cookie.diameter = 50;
    cookie.x = windowWidth/4 +100;
    cookie.y = windowHeight/1.5-25;
    cookie.color = '#EF9F60';
	painting = new Sprite();
	painting.x = windowWidth/2;
	painting.y = 150-45;
	painting.width = 300;
	painting.height = 150;
	painting.color = '#EF9F60';
	painting.layer = 1;
    painting.collider = 'none';
  fly = new Sprite();
    fly.x = windowWidth/2;
    fly.y = 150-45;
    fly.diameter = 20;
    fly.color = '#6D6A67';
  
  squareSequence();
}

async function squareSequence() {  
  await frog.moveTo(windowWidth- 100, windowHeight-(windowHeight/16));
  await frog.moveTo(windowWidth - 150, windowHeight-(windowHeight/16+30));
  await frog.moveTo(200, windowHeight-(windowHeight/16+30));
  await frog.moveTo(150,windowHeight-(windowHeight/16))
  squareSequence();
}

function draw() {
  clear();
  background(220);
  noStroke;
  fill('white'); 
  fly.position.x = mouseX;
  fly.position.y = mouseY;
  
  happy -= 1/60;
  
  console.log(fly.overlaps(book));
  if (fly.overlaps(book)) {
    hunger -= 10;
    happy += 5;
    console.log("the book is overlapped");
  }
  if (fly.overlaps(ball)) {
    hunger -= 10;
    happy += 5;
    console.log("the ball is overlapped");
  }
  
  if (fly.overlaps(frog)) {
    hunger -= 1;
    happy += 1;
    console.log("the frog is overlapped");
  }
  
  if (fly.overlaps(cookie)) {
    hunger += 5;
    console.log("the cookie is overlapped");
  }
  
  if (fly.overlaps(hat)) {
    happy += 5;
    console.log("the hat is overlapped");
  }
  
  if (happy > 100) {
    happy = 100;
  }
  if (happy > 100) {
    happy = 100;
  }
  
  if (hunger < 0) {
    hunger = 0;
  }
  if (hunger < 0) {
    hunger = 0;
  }
  
  rect(windowWidth/2+20,windowHeight/3,200,windowHeight);//Door
  rect(0,windowHeight-(windowHeight/10),windowWidth,windowHeight/10) //Floor
  ellipse(windowWidth/3,windowHeight-(windowHeight/20),300,30) //Rug
  quad(0,0,windowWidth/10,0,windowWidth/10,windowHeight-(windowHeight/10),0,windowHeight); //Left Wall
  quad((windowWidth-(windowWidth/10)), 0, windowWidth,0, windowWidth, windowHeight,windowWidth-(windowWidth/10), windowHeight-(windowHeight/10)); //Right Wall
  rect(windowWidth/5,windowHeight/2.2,200,25);  //Top Shelf
  rect(windowWidth/5,windowHeight/1.5,200,25);  //Bottom Shelf
  fill('green');
  rect(10,10,happy,25); //Happy bar
  fill('rgb(221,183,78)');
  rect(10,45,hunger,25); //Hunger Bar
  noFill();
  rect(10,10,100,25); //Happy bar outline
  rect(10,45,100,25); //Hunger Bar outline
  fill('black');
  textSize(23);
  text(Math.floor(happy), 12, 12, [100], [25]); //happy points
  text(hunger, 12, 47, [100], [25]); //hunger points
  //rect(windowWidth/2-150,30,300,150); //painting  
  cookie.x = windowWidth/4 +100;
    cookie.y = windowHeight/1.5-25;
  drawSprites();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}