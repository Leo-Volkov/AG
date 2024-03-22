const c = [1, 0, 1];
const b = [-2, 3, 5];
const k = 3.5;

// задание 1
const sum = c.map((x, i) => x + b[i]);

console.log("Задание 1:", sum); // [-1, 3, 6]

// задание 2
const difference = c.map((x, i) => x - b[i]);

console.log("Задание 2:", difference); // [3, -3, -4]

// задание 3
let result3 = [];
for (let i = 0; i < c.length; i++) {
    result3.push(c[i] * b[i]);
}

console.log("Задание 3:", result3); // [-2, 0, 5]

// задание 4
const cMagnitude = Math.sqrt(c.reduce((acc, x) => acc + x**2, 0));
const bMagnitude = Math.sqrt(b.reduce((acc, x) => acc + x**2, 0));

console.log("Задание 4:", cMagnitude * bMagnitude); // 8.717797887081348

console.log();

// задание 5
let result5 = []

for (let i = 0; i < c.length; i++) {
    result5.push(k * c[i]);
}
console.log("Задание 5:", result5); //[3.5, 0, 3.5]