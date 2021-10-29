const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var ball;
var rope;

function setup(){
    createCanvas(3000, 800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(625,500,1250,20)


    box1 = new Box(750,440,100,100);
    box2 = new Box(750,440,100,100);
    box3 = new Box(750,440,100,100);

    box4 = new Box(875,440,100,100);
    box5 = new Box(875,440,100,100);
    box6 = new Box(875,440,100,100);
    box7 = new Box(875,440,100,100);

    box8 = new Box(1000,440,100,100);
    box9 = new Box(1000,440,100,100);
    box10 = new Box(1000,440,100,100);


    ball = new Ball(500,400,100,100);


    rope = new Rope(ball.body,{x:500,y:0});
}

function draw(){
    background(180);
    Engine.update(engine);

    ground.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();

    ball.display();

    rope.display();

    //console.log(ball.body);
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

/*function mouseReleased(){
    rope.fly();
}*/