const c = [1, 0, 1];
const b = [-2, 3, 5];

// задание 1
const sum = c.map((x, i) => x + b[i]);

console.log("c + b:", sum); // [-1, 3, 6]

// задание 2
const difference = c.map((x, i) => x - b[i]);

console.log("c - b:", difference); // [3, -3, -4]

// задание 3
const dotProduct = c.reduce((acc, x, i) => acc + x * b[i], 0);

console.log("c * b:", dotProduct); // 8

// задание 4
const cMagnitude = Math.sqrt(c.reduce((acc, x) => acc + x**2, 0));
const bMagnitude = Math.sqrt(b.reduce((acc, x) => acc + x**2, 0));

console.log("|c|:", cMagnitude); // Math.sqrt(2)
console.log("|b|:", bMagnitude); // Math.sqrt(34)

// задание 5
const scaledVector = c.map((x) => x * k);

console.log("k * c:", scaledVector); // [3.5, 0, 3.5]

