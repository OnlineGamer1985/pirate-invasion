class CannonBall {
    constructor(x, y) {
        var options={
            isStatic:true
        }
        this.radius = 30
        this.body = Bodies.circle(x, y, this.radius,options)
        World.add(world, this.body)
        this.image = loadImage('./assets/cannonball.png')
    }
    fire() {
        var newAngle=cannon.angle-28
        //convert radience to degrees 
        newAngle=newAngle*57.2957795
        var velocity=p5.Vector.fromAngle(newAngle)
        Matter.Body.setStatic(this.body,false)
        Matter.Body.setVelocity(this.body,{ x:velocity.x/57.2957795,y:velocity.y/57.2957795})
    }

    display() {
        image(this.image, this.body.position.x, this.body.position.y, this.radius, this.radius)
    }

}