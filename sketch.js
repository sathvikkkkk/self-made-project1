let apple;
var basket;
var tree;
var tree_img;
var apple_img;
var basket_img;

var vy = 0;
var g = 0.05;

function preload()
{

  tree_img = loadImage("tree2.jpg");
  apple_img = loadImage("apple.png");
  basket_img = loadImage("basket.png");
}

function setup() {
  createCanvas(1000,700);
  frameRate(100);
 apple = createSprite(100,50,30,30);
 apple.addImage(apple_img);
 apple.scale = 0.2;
 
 basket = createSprite(100,595,30,30);
 basket.addImage(basket_img);
 basket.scale = 0.5;



 
 rectMode(CENTER);
  
}

function draw() {
  background(50);  
  image(tree_img,0,0);
  push()
  fill(400);
  pop();

  vy +=g;
  apple.position.y+=vy;
  
  drawSprites();
}