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
// Operations

let area = item => item.width * item.height;
let perimeter = item => 2 * (item.width + item.height);

//================================================================

// Predicate (color)
let hasColor = color => item => item.color === color;

let filterByColor = predicate => items => items.filter(hasColor(predicate));
let calculate = operation => items => items.map(operation);
let sum = items => items.reduce((sum, current) => sum + current);

let flow = (color, operation, items) => sum(calculate(operation)(filterByColor(color)(items)));
let flow2 = (color, operation, items) => items.filter(hasColor(color)).map(operation).reduce((sum, current) => sum + current);

console.log(
    flow('black', area, rectangles),
    flow2('black', area, rectangles)
);

// let flow = (f1,f2,f3) => {
//     return data => f3(calculate(f2)(filterByColor(f1)(data)));
// };
// console.log(
//     flow(
//         filter(hasColor('black')),
//         calculate(area),
//         sum()
//     )(data)
// );

//================================================================











