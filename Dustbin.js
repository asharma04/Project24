class Dustbin {
    constructor(x,y){
        this.angle=0
        this.bbody=Bodies.rectangle(x,y,200,20,{isStatic:true})
        World.add(world,this.bbody)

        this.lbody=Bodies.rectangle(x-100,y-40,20,100,{isStatic:true})
        Matter.Body.setAngle(this.lbody,this.angle)
        World.add(world,this.lbody)

        this.rbody=Bodies.rectangle(x+100,y-40,20,100,{isStatic:true})
        Matter.Body.setAngle(this.rbody,-1*this.angle)
        World.add(world,this.rbody)
    }
    display(){
       var bpos=this.bbody.position
       push() 
       translate(bpos.x,bpos.y)
       rectMode(CENTER)
       angleMode(RADIANS)
       fill("white")
       
       rect(0,0,200,20)
       pop()
       var lpos=this.lbody.position
       push() 
       translate(lpos.x,lpos.y)
       rectMode(CENTER)
       angleMode(RADIANS)
       fill("white")
       rotate(this.angle)
       rect(0,0,20,100)
       pop()
       var rpos=this.rbody.position
       push() 
       translate(rpos.x,rpos.y)
       rectMode(CENTER)
       angleMode(RADIANS)
       fill("white")
       rotate(this.angle)
       rect(0,0,20,100)
       pop()
    }
}