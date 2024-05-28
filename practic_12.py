# Волков Лев, Бокун Алексей

# инпорт библеотек
import matplotlib.pyplot as plt 
import numpy as np

# Определение параметров функции

a = int(input('Амплитуда sin-функции: '))  # Амплитуда sin-функции
d = int(input('Амплитуда cos-функции: '))  # Амплитуда cos-функции
c = int(input('Сдвиг sin-функции по оси x: '))  # Сдвиг sin-функции по оси x
h = int(input('Сдвиг cos-функции по оси y: '))  # Сдвиг cos-функции по оси y
f = int(input('Коэффициент при x в cos-функции: '))  # Коэффициент при x в cos-функции
g = int(input('Коэффициент при x^2 в cos-функции: '))  # Коэффициент при x^2 в cos-функции

# Определение диапазона значений x
xmin = int(input('Минемальный диапазона значений x: '))
xmax = int(input('Максимальный диапазона значений x: '))
x = np.linspace(xmin, xmax, 500)  # Массив значений x

# Вычисление значений y
y = a*np.sin(d*x + c) - d*np.cos(g*x**2 + f*x + h)

# Построение графика
plt.plot(x, y, label='y=asin(dx+c)-dcos(gx^2+fx+h)')  # Линия графика
plt.axhline(0, color='red', linestyle='--', label='y=0')  # Ось x
plt.axvline(0, color='red', linestyle='--', label='x=0')  # Ось y
plt.xlabel('x')
plt.ylabel('y')
plt.title('График функции y=asin(dx+c)-dcos(gx^2+fx+h)')
plt.legend()  # Отображение легенды
plt.grid(True)  # Сетка

# Изменение цвета графика
plt.plot(x, y, color='blue', label=f'y=asin(dx+c)-dcos(gx^2+fx+h)')  # Линия графика (синий цвет)

plt.show()  # Отображение графика
