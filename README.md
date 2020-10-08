# Usar ResembleJS para comparar los screenshots tomados - Preguntas

## Reflexión: Ve usted algún problema con los screenshots tomados por Cypress al intentar hacer Visual Regression Testing ? Agregue su respuesta al documento de la entrega

Al tomar algunos screenshots hay que asegurarse que la UI se encuentra en el estado que la prueba requiere, por que en varios test paso que 
no habia cargado la parte final de la prueba y ya habia tomado el screenshots. Por lo cual concluimos que puede llegar a ser flaky test.

## ¿Qué información puedo obtener de una imagen al usar resembleJS y que significado tiene cada uno de los componentes de la respuesta?.
Obtiene información de los colores RGB y el brillo. Los elementos de la respuesta son la representación de lo que se ve fisicamente en la imagen.

## ¿Qué información puedo obtener al comparar dos imagenes?

Entrega un porcentaje que indica que tan diferente es una imagen de otra, las dimensiones, diferencia y la url


## ¿Qué opciones se pueden seleccionar al realizar la comparación ?

Ignore Nothing

Ignore Less

Ignore Colors

Ignore Antialiasing

Ignore Alpha

Use Original Size

Scale to same size

Pink/yellow for differences

Opaque/Transparent

Flat/movement/flat with diff intensity/movement with diff intensity/diff portion from the input


# Resultados Pruebas Taller 2
En la ejecución de las pruebas se encontraron los siguientes resultados

## Prueba 1 Diferencia; 97.05%
![alt-text](https://github.com/lui5f3r/resemblejstaller2/blob/master/screenshots/punto1.js/output.png)

## Prueba 2 Diferencia; 12.69% 
![alt-text](https://github.com/lui5f3r/resemblejstaller2/blob/master/screenshots/punto2.js/output.png)

## Prueba 3 Diferencia; 9.50%
![alt-text](https://github.com/lui5f3r/resemblejstaller2/blob/master/screenshots/punto4.js/output.png)

