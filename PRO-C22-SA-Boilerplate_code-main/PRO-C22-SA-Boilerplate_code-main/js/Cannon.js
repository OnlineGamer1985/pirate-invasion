class Cannon {
  //Constructor is used for creating objects
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.canon_image = loadImage("assets/canon.png")
    this.cannonbase_image = loadImage("assets/cannonBase.png")
  }
  display() {
    console.log(this.angle)

    if (keyIsDown(RIGHT_ARROW) && this.angle < 70) {
      this.angle = this.angle + 1
    }

    if (keyIsDown(LEFT_ARROW) && this.angle > -30) {
      this.angle = this.angle - 1
    }

    push()
    translate(this.x, this.y)
    rotate(this.angle)
    imageMode(CENTER)
    //for to create cannon top
    image(this.canon_image, 0, 10, this.width, this.height)
    //to create the cannon bottom
    pop()
    image(this.cannonbase_image, 60, 20, 200, 200)

  }


}
