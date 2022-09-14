var color=Randomizer.nextColor();
var RADIUS=150;
var minus=5;

function start(){
    var circle=new Circle(RADIUS);
    circle.setPosition(getWidth()/2, getHeight()/2);
    circle.setColor(color);
    addEventListener(circle);
    RADIUS-=minus;
    var circle=new Circle(RADIUS);
    circle.setPosition(getWidth()/2, getHeight()/2);
    circle.setColor(color);
    addEventListener(circle);
}
