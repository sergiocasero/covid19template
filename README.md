# covid19template

Este proyecto permite crear una web rápidamente para dar voz a las diferentes comunidades españolas de 
makers contar el COVID que trabajan bajo la iniciativa nacional https://coronavirusmakers.org

Instrucciones de despliegue en firebase:

## 1. Crea un proyecto de firebae
Crea el proyecto con el nombre de tu comunidad, recomendamos utilizar covid19comunidad, por ejemplo 
covid19extremadura.com, esto automáticamente te asignará el dominio covid19extremadura.web.app 
de forma gratuita. Posteriormente ve a la sección de hosting y habilítala

## 2. Personaliza la web
En la carpeta `public` encontrarás un fichero llamado `config.json`. Edita los valores de este archivo 
con la información de tu comunidad. También deberás reemplazar las imágenes por las de tu comunidad

## 3. Configuración del proyecto
```
npm install
npm i firebase-tools
firebase login // Inicia sesión y selecciona tu proyecto, elige "dist" como directorio de producción
npm run build // Generar proyecto de producción
firebase deploy // Subir el proyecto
```

## 4. Licencia
Puedes utilizar esta web sin problemas pero no puedes sacar beneficio económico de ello. Diseño e iconos realizados por HYAIB

<a href="http://creativecommons.org/licenses/by-nc-sa/4.0/" rel="license">
                    <img alt="Licencia Creative Commons" src="https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png"
                         style="border-width:0"/></a> Esta obra está bajo una
                <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/" rel="license">Licencia Creative Commons
                    Atribución-NoComercial-CompartirIgual 4.0 Internacional</a>.
