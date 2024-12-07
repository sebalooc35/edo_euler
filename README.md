 # Solver de Ecuaciones Diferenciales Ordinarias con Métodos de Euler

 Este proyecto es una aplicación web interactiva que permite resolver ecuaciones diferenciales ordinarias (EDOs) utilizando los métodos de **Euler** y **Euler mejorado**. Proporciona una interfaz gráfica amigable para ingresar datos, graficar las soluciones y analizar resultados.

 ---

 ## Características principales

 1. **Resolución numérica de EDOs:**
    - Implementación de los métodos de Euler y Euler mejorado.
    - Aproximaciones para EDOs de primer orden.

 2. **Soporte para soluciones exactas:**
    - Permite graficar la solución exacta junto con la solución numérica para comparar.
    - Funcionalidad opcional: si no se proporciona una solución exacta, solo se grafica la aproximación.

 3. **Gráficos interactivos:**
    - Representación gráfica de los resultados usando Chart.js.
    - Comparación visual entre soluciones exactas y aproximadas.

 4. **Tabla de datos colapsable:**
    - Muestra los valores de \(x\), \(y\) aproximado, y \(y\) exacto (si se proporciona).
    - Puede colapsarse para mejorar la experiencia visual.

 5. **Interfaz moderna y responsiva:**
    - Diseñada con HTML, CSS y JavaScript.
    - Estética mejorada para facilitar su uso.

 ---

 ## Requisitos

 ### **Herramientas necesarias**
 - Navegador web moderno.
 - Conexión a internet para cargar las bibliotecas externas:
   - [Chart.js](https://www.chartjs.org/)
   - [Math.js](https://mathjs.org/)

 ---

 ## Instalación

 1. **Clonar el repositorio:**
    ```bash
    git clone https://github.com/usuario/repositorio.git
    ```

 2. **Abrir el archivo `index.html` en un navegador:**
    - Navega a la carpeta del proyecto.
    - Haz doble clic en el archivo `index.html` para abrirlo en tu navegador.

 3. **Asegúrate de incluir el archivo `style.css` y la imagen del logo:**
    - Coloca el archivo `logo galileo.png` en el mismo directorio que `index.html`.

 ---

 ## Uso de la aplicación

 ### **Pasos para resolver una EDO:**

 1. **Ingresar la ecuación diferencial:**
    - En el campo "Ecuación (dy/dx)", escribe la ecuación diferencial (por ejemplo, `2*y`).

 2. **Proporcionar la solución exacta (opcional):**
    - En el campo "Solución exacta (y)", escribe la solución exacta si está disponible (por ejemplo, `exp(2*x)`).

 3. **Configurar los parámetros iniciales:**
    - Establece \(x_0\), \(y_0\), el tamaño de paso \(h\), y el número de pasos.

 4. **Seleccionar el método:**
    - Escoge entre "Euler" o "Euler Mejorado" en el menú desplegable.

 5. **Hacer clic en "Solucionar":**
    - La aplicación calculará y mostrará:
      - Gráfica con las soluciones aproximada y exacta (si aplica).
      - Tabla de resultados que puedes expandir o colapsar.

 ---

 ## Estructura del proyecto

 ```
 project/
 |-- index.html        # Archivo principal de la interfaz
 |-- style.css         # Estilos de la aplicación
 |-- script.js         # Lógica principal de la aplicación
 |-- logo galileo.png  # Logo de la Universidad Galileo
 ```

 ---

 ## Tecnologías utilizadas

 - **HTML5**: Estructura de la interfaz.
 - **CSS3**: Diseño responsivo y estilos.
 - **JavaScript**: Lógica y funcionalidad interactiva.
 - **Chart.js**: Gráficas interactivas.
 - **Math.js**: Evaluación de funciones matemáticas.

 ---

 ## Créditos

 - **Desarrollado por:** [Tu nombre o equipo]
 - **Inspirado en:** Universidad Galileo.

 ---

 ## Licencia

 Este proyecto está bajo la licencia [MIT](https://opensource.org/licenses/MIT). Puedes utilizarlo, modificarlo y distribuirlo libremente respetando los términos de la licencia.

