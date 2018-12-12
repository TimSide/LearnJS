function rectangle(color, width, height) {
    this.color = color;
    this.width = width;
    this.height = height;
}

let rectangles = [
    new rectangle("black", 1, 2),
    new rectangle("red", 3, 3),
    new rectangle("red", 2, 2),
    new rectangle("black", 1, 2),
    new rectangle("black", 2, 1)
];

function rectanglesOfColor(color) {
    return function(item) {
        return item.filter(isColor(color));
    };
}

function isColor(color) {
    return function (item) {
        return item.color === color;
    }
}

console.log(
    rectanglesOfColor("red")(rectangles)
);
