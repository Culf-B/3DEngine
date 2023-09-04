cX = 200;
cY = 200;

sZ = 25;

function Cube(x, y, z, size, cX, cY, sZ)
{
  this.x = x;
  this.y = y;
  this.z = z;

  this.size = size;

  this.cX = cX;
  this.cY = cY;
  this.sZ = sZ;

  this.p1 = new Point(this.x - this.size / 2, this.y - this.size / 2, this.z - this.size / 2, cX, cY, sZ);
  this.p2 = new Point(this.x + this.size / 2, this.y - this.size / 2, this.z - this.size / 2, cX, cY, sZ);
  this.p3 = new Point(this.x - this.size / 2, this.y + this.size / 2, this.z - this.size / 2, cX, cY, sZ);
  this.p4 = new Point(this.x + this.size / 2, this.y + this.size / 2, this.z - this.size / 2, cX, cY, sZ);
  this.p5 = new Point(this.x - this.size / 2, this.y - this.size / 2, this.z + this.size / 2, cX, cY, sZ);
  this.p6 = new Point(this.x + this.size / 2, this.y - this.size / 2, this.z + this.size / 2, cX, cY, sZ);
  this.p7 = new Point(this.x - this.size / 2, this.y + this.size / 2, this.z + this.size / 2, cX, cY, sZ);
  this.p8 = new Point(this.x + this.size / 2, this.y + this.size / 2, this.z + this.size / 2, cX, cY, sZ);

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
    this.z = this.z + 1;
    if (this.z >= 0)
    {
      this.z -= 250;
    }
    pop();
  };
}

function setup() {
  createCanvas(400, 400);
  cube = new Cube(0, 0, 100, 50, cX, cY, sZ);
}



function draw() {
  background(220);

  cube.draw();

}