class Rubber {
	constructor(x,y,r){

		var options={
			'restitution':0.3,
			'friction':5,
			'density':1,
}
this.body= Bodies.circle(this.x,this.y,(this.r-20)/2,options);
this.x=x;
this.y=y;
this.r=r;
World.add(world,this.body);

	}

	display(){

		var pos=this.body.position;
		push();
		translate(pos.x,pos.y);
		fill("blue");
		strokeWeight(4);
		stroke("black");
		rectMode(CENTER);
		ellipse(0,0,this.r);
		pop();
	}
}































