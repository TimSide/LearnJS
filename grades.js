let data = [-2, -1, 0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15];

let filter = (predicate) => (items) => items.filter(predicate);

let between = (min, max) => item => min <= item && item <= max;

let between1and5 = between(1, 5);
let between1and10 = between(1, 10);

function getFilteredData(predicate, data){
    return filter(predicate)(data);
}

console.log(
    getFilteredData(between1and5, data)
);

console.log(
    data.filter(between1and10)
);
