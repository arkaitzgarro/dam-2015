var App = App || { Model : {} };
App.Model.Rectangle = (function(){
    var _height,
        Square = App.Model.Square;

    function Rectangle(x, y, width, height) {
        Square.call(this, x, y, width);

        _height = (typeof height === 'number') ? height : 1;
    }

    // Indicamos el "padre"
    Rectangle.prototype = Object.create(Square.prototype);
    Rectangle.prototype.constructor = Rectangle;

    Rectangle.prototype.getHeight = function() {
        return _height;
    };

    Rectangle.prototype.setHeight = function(height) {
        _height = (typeof height === 'number') ? height : _height;
    };

    Rectangle.prototype.getArea = function() {
        // return _height * Square.prototype.getArea.call(this);
        return _height * this.getWidth();
    };

    return Rectangle;
})();