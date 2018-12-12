function rectangle(color, width, height) {
    this.color = color;
    this.width = width;
    this.height = height;
}

let rectangles = [
    new rectangle("black", 2, 3),
    new rectangle("black", 3, 3),
    new rectangle("green", 2, 2),
    new rectangle("yellow", 1, 2),
    new rectangle("green", 2, 1)
];

function calculateValuesOfRectangles(items) {
    return function (color) {
        return function (operation) {
            let result = 0;

            for (let item of items.filter(isColor(color))
                ) {
                result += operation(item);
            }
            return result;
        }
    };
}

// Predicate
function isColor(color) {
    return function (item) {
        return item.color === color;
    }
}


//=============================================
// Operations

let square = function (item) {
    return item.width * item.height;
};

let perimeter = function (item) {
    return 2 * (item.width + item.height)
};

//=============================================

function findValue(rectangles, color, operation) {
    return calculateValuesOfRectangles(rectangles)(color)(operation)
}

console.log(
    findValue(rectangles, 'black', square)
);

console.log(
    findValue(rectangles, 'black', perimeter)
);
