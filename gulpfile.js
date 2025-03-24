import { src, dest, watch } from 'gulp'
import  * as dartSass from 'sass'//importa sass
import gulpSass from 'gulp-sass'//importa el modulo de adaptacion de sass a gulp

const sass = gulpSass(dartSass)//Compilando Sass usando la dependencia

export function css(done){
    src("src/scss/app.scss")//ubicar el archivo de scss
        .pipe( sass() )//con pipe ordenamos como vamos a ejecutar las funciones 
        .pipe( dest('build/css') )
    done()
}


export function dev() {//traemos watch para escuchar archivos y sus cambios
    watch("src/scss/app.scss", css)//Observa este archivo y ejecuta la funcion de css
}
