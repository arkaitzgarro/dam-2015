(function(){
    var s1 = new App.Model.Shape();
    s1.move(5,5);
    console.log(s1.getX());
    console.log(s1.getY());

    var s2 = new App.Model.Shape(10, 10);
    s2.move(5,5);
    console.log(s2);
    console.log(s2.getX());
    console.log(s2.getY());
    
    s2.setY(0);
    console.log(s2.getX());
    console.log(s2.getY());

    var c = new App.Model.Circle(10, 10, 1);
    console.log(c.getX());
    console.log(c.getY());
    console.log(c.getArea());

    var sq = new App.Model.Square(10, 10, 4);
    console.log(sq.getX());
    console.log(sq.getY());
    console.log(sq.getArea());

    var rt = new App.Model.Rectangle(10, 10, 4, 5);
    console.log(rt.getX());
    console.log(rt.getY());
    console.log(rt.getWidth());
    console.log(rt.getHeight());
    console.log(rt.getArea());
})();