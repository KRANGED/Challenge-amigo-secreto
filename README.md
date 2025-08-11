# Challenge-amigo-secreto

#  Amigo Secreto

Este proyecto es una aplicación web sencilla para gestionar un juego de **Amigo Secreto**.  
Permite agregar nombres a una lista y, posteriormente, sortear aleatoriamente uno de ellos.

# Funcionalidades

- Agregar nombres a una lista de amigos.
- Mostrar la lista de amigos en pantalla.
- Sortear aleatoriamente un amigo secreto.
- Limpiar y actualizar la lista visualmente cada vez que se agrega un nuevo nombre.
- Manejo de validaciones para evitar nombres vacíos y sorteos sin participantes.

# 🛠 Tecnologías usadas

- **HTML5** → Estructura de la interfaz.
- **CSS3** → Estilos y diseño visual.
- **JavaScript** → Lógica para agregar amigos, mostrar lista y realizar el sorteo.

# Estructura del proyecto

```
.
├── index.html      # Página principal
├── style.css       # Estilos de la aplicación
├── app.js          # Lógica de la aplicación
├── assets/         # Imágenes y recursos
└── README.md       # Documentación
```

# Uso

1. Clonar o descargar el repositorio.
2. Abrir el archivo `index.html` en un navegador.
3. En el campo de texto, escribir un nombre y presionar **Añadir**.
4. Repetir para todos los participantes.
5. Presionar **Sortear amigo** para elegir uno al azar.

#  Ejemplo de uso

Ingresamos el nombre del amigo en la caja y presionamos el botón "Añadir".
![Captura de ejemplo 1](paso1.png)

Se registra un nuevo nombre y observamos la lista actual de los amigos registrados.
![Captura de ejemplo 2](paso1.png)


Se realiza el sorteo con las personas registradas oprimiendo el botón de "Sortear amigo".
![Captura de ejemplo 3](paso1.png)

# Diagrama de flujo

```mermaid
flowchart TD
    A[Usuario ingresa nombre] --> B{Nombre vacio?}
    B -- Si --> C[Mostrar alerta]
    B -- No --> D[Agregar nombre al array amigos]
    D --> E[Actualizar lista HTML]
    E --> F{Presiona Sortear amigo?}
    F -- Si --> G{Lista vacia?}
    G -- Si --> H[Mostrar alerta de lista vacia]
    G -- No --> I[Generar indice aleatorio]
    I --> J[Mostrar amigo secreto en pantalla]
```
## Notas

- Si se intenta agregar un nombre vacío, se mostrará una alerta.
- No se puede sortear si no hay nombres en la lista.
- El índice aleatorio se genera asegurando que siempre esté dentro del rango de elementos.
- En esta versión solo se puede realizar el sorteo de forma correcta una sola vez, no cuenta con una función para reiniciar el programa.

# Licencia

Este proyecto es de uso libre para fines educativos y personales.
