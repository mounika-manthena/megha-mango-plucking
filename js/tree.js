class Tree
{
    constructor(x,y,width,height)
    {
        var options ={
            isStatic: true
        }

        this.thickness = 10;
        this.body = Bodies.rectangle(x,y,width,this.thickness,options);
        this.width = width;
        this.height = height;
       
        this.image = loadImage("images/tree.png");
        World.add(world,this.body);
    }

    display()
    {
        var pos = this.body.position;

        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
    }
}