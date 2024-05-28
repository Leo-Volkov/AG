#иМПОРТИРУЕМ БИБЛИОТЕКИ
import matplotlib.pyplot as plt
import numpy as np 
# x = np.linspace(-10, 10, 40)
# y = -2/x
# z = np.linspace(-10, 10, 2)
# w = [0 , 0]
# plt.plot(z,w, color='red')
# plt.plot(w,z, color='red')
# plt.plot(x, y, color='blue', marker='o', markersize=3)
# plt.xlabel('Ось абцисс')
# plt.ylabel('Ось ординат')
# plt.title('График по точкам')
# plt.grid(True)
# plt.show()

#задание 3
import matplotlib.pyplot as plt
import numpy as np
angles = np.arange(0, 2*np.pi, np.pi/100)
sine_values = np.cos(angles*4)
cosine_values = np.cos(angles) *4
fig, ax = plt.subplots()

ax.plot(angles, sine_values, label="Косинус")
ax.plot(angles, cosine_values, label="Косинус")
ax.set_title("График косинусов")
ax.set_xlabel("Радианы")
ax.set_ylabel("Значение")
ax.xaxis.set_major_formatter(lambda x, _: f"{x:.1f}π")
plt.legend()
plt.grid(True)
plt.show()