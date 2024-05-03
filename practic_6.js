// Функция для вычисления расстояния между двумя точками
function distance(x1, y1, z1, x2, y2, z2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const dz = z2 - z1;
  return Math.sqrt(dx * dx + dy * dy + dz * dz);
};

// Координаты точек
const points = [
  [-1, 4, -2], // Q
  [1, 1, -1], // R
  [9, -4, -2], // J
  [5, -9, 7] // O
];

// Массивы для хранения минимального и максимального расстояния
let minDistance = Infinity;
let maxDistance = -Infinity;

// Перебор всех пар точек
for (let i = 0; i < points.length; i++) {
  for (let j = i + 1; j < points.length; j++) {
    const [x1, y1, z1] = points[i];
    const [x2, y2, z2] = points[j];

    // Вычисление расстояния
    const dist = distance(x1, y1, z1, x2, y2, z2);

    // Обновление минимального и максимального расстояния
    minDistance = Math.min(minDistance, dist);
    maxDistance = Math.max(maxDistance, dist);

    // Вывод информации о паре точек Q и O
    if (i + 1 == 1 && j + 1 == 4) {
        console.log(`Расстояние между Q и O: ${dist}`);
    };
  };
};

// Вывод результата
console.log(`Наименьшее расстояние: ${minDistance}`);
console.log(`Наибольшее расстояние: ${maxDistance}`);