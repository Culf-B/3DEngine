cX = 200;
cY = 200;

sZ = 400;

function Cube(x, y, z, size, cX, cY, sZ)
{
  this.x = x;
  this.y = y;
  this.z = z;

  this.size = size;

  this.scaleX = 1;
  this.scaleY = 1;
  this.scaleZ = 1;

  this.cX = cX;
  this.cY = cY;
  this.sZ = sZ;

  this.p1 = new Point(this.x - this.size * this.scaleX / 2, this.y - this.size * this.scaleY / 2, this.z - this.size * this.scaleZ / 2, cX, cY, sZ);
  this.p2 = new Point(this.x + this.size * this.scaleX / 2, this.y - this.size * this.scaleY / 2, this.z - this.size * this.scaleZ / 2, cX, cY, sZ);
  this.p3 = new Point(this.x - this.size * this.scaleX / 2, this.y + this.size * this.scaleY / 2, this.z - this.size * this.scaleZ / 2, cX, cY, sZ);
  this.p4 = new Point(this.x + this.size * this.scaleX / 2, this.y + this.size * this.scaleY / 2, this.z - this.size * this.scaleZ / 2, cX, cY, sZ);
  this.p5 = new Point(this.x - this.size * this.scaleX / 2, this.y - this.size * this.scaleY / 2, this.z + this.size * this.scaleZ / 2, cX, cY, sZ);
  this.p6 = new Point(this.x + this.size * this.scaleX / 2, this.y - this.size * this.scaleY / 2, this.z + this.size * this.scaleZ / 2, cX, cY, sZ);
  this.p7 = new Point(this.x - this.size * this.scaleX / 2, this.y + this.size * this.scaleY / 2, this.z + this.size * this.scaleZ / 2, cX, cY, sZ);
  this.p8 = new Point(this.x + this.size * this.scaleX / 2, this.y + this.size * this.scaleY / 2, this.z + this.size * this.scaleZ / 2, cX, cY, sZ);

  this.connectPoints = function(pA, pB)
  {
    line(pA.calcX(), pA.calcY(), pB.calcX(), pB.calcY());
  };

  this.draw = function()
  {
    this.p1.draw();
    this.p2.draw();
    this.p3.draw();
    this.p4.draw();
    this.p5.draw();
    this.p6.draw();
    this.p7.draw();
    this.p8.draw();
   
    this.connectPoints(this.p1, this.p2);
    this.connectPoints(this.p2, this.p4);
    this.connectPoints(this.p4, this.p3);
    this.connectPoints(this.p3, this.p1);

    this.connectPoints(this.p1, this.p5);
    this.connectPoints(this.p2, this.p6);
    this.connectPoints(this.p3, this.p7);
    this.connectPoints(this.p4, this.p8);

    this.connectPoints(this.p5, this.p6);
    this.connectPoints(this.p6, this.p8);
    this.connectPoints(this.p8, this.p7);
    this.connectPoints(this.p7, this.p5);
  };
  this.move = function(x, y, z)
  {
    this.x = x;
    this.y = y;
    this.z = z;

    this.p1.move(this.x - this.size * this.scaleX / 2, this.y - this.size * this.scaleY / 2, this.z - this.size * this.scaleZ / 2);
    this.p2.move(this.x + this.size * this.scaleX / 2, this.y - this.size * this.scaleY / 2, this.z - this.size * this.scaleZ / 2);
    this.p3.move(this.x - this.size * this.scaleX / 2, this.y + this.size * this.scaleY / 2, this.z - this.size * this.scaleZ / 2);
    this.p4.move(this.x + this.size * this.scaleX / 2, this.y + this.size * this.scaleY / 2, this.z - this.size * this.scaleZ / 2);
    this.p5.move(this.x - this.size * this.scaleX / 2, this.y - this.size * this.scaleY / 2, this.z + this.size * this.scaleZ / 2);
    this.p6.move(this.x + this.size * this.scaleX / 2, this.y - this.size * this.scaleY / 2, this.z + this.size * this.scaleZ / 2);
    this.p7.move(this.x - this.size * this.scaleX / 2, this.y + this.size * this.scaleY / 2, this.z + this.size * this.scaleZ / 2);
    this.p8.move(this.x + this.size * this.scaleX / 2, this.y + this.size * this.scaleY / 2, this.z + this.size * this.scaleZ / 2);
  };
  this.scale = function(x, y, z)
  {
    this.scaleX = x;
    this.scaleY = y;
    this.scaleZ = z;
  };
}

function Point(x, y, z, cX, cY, sZ)
{
  this.x = x;
  this.y = y;
  this.z = z;

  this.cX = cX;
  this.cY = cY;

  this.sZ = sZ;

  this.calcX = function()
  {
    return (this.x * this.sZ) / this.z + this.cX;
  };
  this.calcY = function()
  {
    return (this.y * this.sZ) / this.z + this.cY;
  };

  this.dx = this.calcX();
  this.dy = this.calcY();

  this.draw = function()
  {
    push();
    strokeWeight(5);
    point(this.calcX(), this.calcY());
    pop();
  };

  this.move = function(x, y, z)
  {
    this.x = x;
    this.y = y;
    this.z = z;
  };
}

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  cube = new Cube(0, 0, 100, 350, cX, cY, sZ);

  sliderX = createSlider(-1000, 1000, 0);
  sliderX.position(0, 0);
  sliderY = createSlider(-1000, 1000, 0);
  sliderY.position(0, 15);
  sliderZ = createSlider(sZ + cube.size / 2, 5000, 0);
  sliderZ.position(0, 30);

  slidersX = createSlider(0, 10, 1, 0.1);
  slidersX.position(200, 0);
  slidersY = createSlider(0, 10, 1, 0.1);
  slidersY.position(200, 15);
  slidersZ = createSlider(0, 10, 1, 0.1);
  slidersZ.position(200, 30);
}



function draw() {
  background(220);

  cube.draw();
  cube.move(sliderX.value(), sliderY.value(), sliderZ.value());
  cube.scale(slidersX.value(), slidersY.value(), slidersZ.value());
}