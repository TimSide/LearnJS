function rectangle(color, width, height) {
    this.color = color;
    this.width = width;
    this.height = height;
}

let rectangles = [
    new rectangle("black", 2, 3),
    new rectangle("red", 3, 3),
    new rectangle("red", 2, 2),
    new rectangle("black", 1, 2),
    new rectangle("black", 2, 1)
];

function calculateValuesOfRectangles(color) {
    return function (items) {
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

function isColor(color) {
    return function (item) {
        return item.color === color;
    }
}

//=============================================

let square = function (item) {
    return item.width * item.height;
};

let perimeter = function (item) {
    return 2 * (item.width + item.height)
};

//=============================================

console.log(
    // Select rectangles with color
    calculateValuesOfRectangles("red")(rectangles)(square),
    calculateValuesOfRectangles("red")(rectangles)(perimeter)
);