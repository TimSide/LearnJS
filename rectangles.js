function Rectangle(color, width, height) {
    this.color = color;
    this.width = width;
    this.height = height;
}

let rectangles = [
    new Rectangle("black", 2, 3),
    new Rectangle("black", 3, 3),
    new Rectangle("green", 2, 2),
    new Rectangle("yellow", 1, 2),
    new Rectangle("green", 2, 1)
];

function calculateValuesOfRectangles(items) {
    return function (color) {
        return function (operation) {
            return calculate(getRectanglesOfColor(items)(color))(operation);
        }
    };
}

//================================================================

// Predicate
function isColor(color) {
    return function (item) {
        return item.color === color;
    }
}

function getRectanglesOfColor(items) {
    return function (color) {
        return items.filter(isColor(color))
    }
}

function calculate(items) {
    return function (operation) {

        let result = 0;
        for (let item of items) {
            result += operation(item);
        }
        return result;
    }
}

//================================================================
// Operations

let square = function (item) {
    return item.width * item.height;
};

let perimeter = function (item) {
    return 2 * (item.width + item.height)
};

//================================================================

function findValue(rectangles, color, operation) {
    console.log(operation.name, 'of', color.toString(), 'rectangles =');

    return calculateValuesOfRectangles(rectangles)(color)(operation)
}

//================================================================

console.log(
    findValue(rectangles, 'black', square)
);

console.log(
    findValue(rectangles, 'black', perimeter)
);
