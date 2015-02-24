var App = App || { Model : {} };
App.Model.Circle = (function(){
    var _radius,
        Shape = App.Model.Shape;

    function Circle(x, y, radius) {
        Shape.call(this, x, y);
        // Shape.apply(this, [x, y]);
        // Shape.bind(this)(x, y);

        _radius = (typeof radius === 'number') ? radius : 1;
    }

    // Indicamos el "padre"
    Circle.prototype = Object.create(Shape.prototype);
    Circle.prototype.constructor = Circle;

    Circle.prototype.getRadius = function() {
        return _radius;
    };

    Circle.prototype.setRadius = function(radius) {
        _radius = (typeof radius === 'number') ? radius : _radius;
    };

    Circle.prototype.getArea = function() {
        return Math.PI * Math.pow(_radius, 2);
    };

    return Circle;
})();