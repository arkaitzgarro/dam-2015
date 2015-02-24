var App = App || { Model : {} };
App.Model.Square = (function(){
    var _width,
        Shape = App.Model.Shape;

    function Square(x, y, width) {
        Shape.call(this, x, y);

        _width = (typeof width === 'number') ? width : 1;
    }

    // Indicamos el "padre"
    Square.prototype = Object.create(Shape.prototype);
    Square.prototype.constructor = Square;

    Square.prototype.getWidth = function() {
        return _width;
    };

    Square.prototype.setWidth = function(width) {
        _width = (typeof width === 'number') ? width : _width;
    };

    Square.prototype.getArea = function() {
        return Math.pow(_width, 2);
    };

    return Square;
})();