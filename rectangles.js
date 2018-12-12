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

//================================================================

// Predicate (color)
let hasColor = predicate => item => item.color === predicate;

let filterByColor = predicate => items => items.filter(hasColor(predicate));
let calculate = operation => items => items.map(operation);
let sum = items => items.reduce( (sum, current) => sum + current);

let flow = (color, operation, items) => sum(calculate(operation)(filterByColor(color)(items)));

//================================================================
// Operations

let area = item => item.width * item.height;
let perimeter = item => 2 * (item.width + item.height);

//================================================================

console.log(
    flow("black", area, rectangles),
    flow("black", perimeter, rectangles)
);
