Proyecto XML y JavaScript
Descripción
Este proyecto tiene como objetivo mostrar cómo se puede trabajar con XML utilizando JavaScript. Incluye ejemplos de cómo leer, manipular y mostrar datos XML en una página web.

Contenido
index.html: Página principal del proyecto.
styles.css: Archivo de estilos CSS.
script.js: Archivo JavaScript con funciones para manipular XML.
data.xml: Archivo XML con datos de ejemplo.

Instalación
Clona este repositorio:
 git clone https://github.com/tu-usuario/proyecto-xml-js.git
 
Abre el archivo index.html en tu navegador preferido.

Uso
Asegúrate de que todos los archivos estén en el mismo directorio.
Abre index.html en tu navegador.
Los datos del archivo data.xml se mostrarán en la página y podrás interactuar con ellos.

Ejemplos de Código
Leer XML con JavaScript
```javascript
// Ejemplo de cómo leer un archivo XML
const xhr = new XMLHttpRequest();
xhr.open("GET", "data.xml", true);
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const xml = xhr.responseXML;
        // Procesar el archivo XML aquí
    }
};
xhr.send();
