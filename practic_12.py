import matplotlib.pyplot as plt
import numpy as np
x = np.linspace(-6, 6, 12)
y = -4*x+2
plt.plot(x, y, color='pink')
plt.xlabel('Ось абцисс')
plt.ylabel('Ось ординат')
plt.title('График по точкам')
plt.grid(True)
plt.show()