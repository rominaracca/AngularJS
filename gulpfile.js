// Importamos gulp
var gulp = require('gulp');

// Importamos los plugins necesarios
var jshint = require('gulp-jshint');  //Ayuda a detectar errores y potenciales problemas en el codigo
var connect = require('gulp-connect');  //Levanta un server
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var open = require('gulp-open');
var runSequence = require('run-sequence');

// Link task
gulp.task('lint', function() {
    return gulp.src('app/**/*.js')    //Con RETURN indico a gulp que es una tarea asincrona
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Connect
gulp.task('connect', function() {
  connect.server({
    port: 9000,
    livereload: true    //permite la recarga de pagina
  });
});


// Watch Files For Changes
gulp.task('watch', function() {
  //cuando escuche cualquier cambio en los archivos del primer array, lla ma a las tareasque posee el segundo array
    gulp.watch('app/**/*.js', ['lint', 'scripts']);
    gulp.watch('app/**/*.scss', ['sass']);
    gulp.watch(['*.html', 'app/**/*.html'], ['html']);
    gulp.watch('dist/**/*.*', ['livereload']);
});


// Recargar el servidor si hay cambios en el HTML
gulp.task('html', function () {
    gulp.src(['*.html', 'app/**/*.html'])
        .pipe(connect.reload());
});
// ejecutando #gulp connect watch


// Concat JS task
//Concatena los archivos de src en un nuevo archivo llamado angularProject.js y lo coloca en el destino dist/js
// No es necesqrio crear el archivo ni el directorio destino. Se hace solo al ejecutar #gulp script
gulp.task('scripts', function() {
    return gulp.src(['app/**/*.module.js', 'app/**/*.js'])  //concatena los script en el orden de recorrido del array
        .pipe(concat('angularProject.js'))
        .pipe(gulp.dest('dist/js'));
        // .pipe(connect.reload());
});


// Sass task
gulp.task('sass', function() {
    return gulp.src(['app/**/*.scss', '!app/sass/_*.scss']) //concatena los css y le digo que ignore los _*.sccs (css parciales. Por convencion los archivos parciales sass comienzan con guion bajo. Esparecido a las clases UTIL que se usan en Java)
        .pipe(concat('angularProject.scss'))
        .pipe(sass({outputStyle: 'expanded'}))  //compila el scss con el formato de salida: nested, expanded, compact, compressed
        //https://web-design-weekly.com/2014/06/15/different-sass-output-styles/
        .pipe(gulp.dest('dist/css'));
        // .pipe(connect.reload());
});

//livereload
gulp.task('livereload', function() {
  gulp.src('dist/**/*.*')
    .pipe(connect.reload());
});


//minifica el codigo del archivo que le pasamos en el mismo archivo
gulp.task('compressJs', function() {
  return gulp.src('dist/**/*.js')
    .pipe(uglify())
    .pipe(rename("js/angularProject.min.js"))
    .pipe(gulp.dest('dist/'));
});

//minifica el codigo del archivo que le pasamos en el mismo archivo
gulp.task('compressCss', function() {
  return gulp.src('dist/**/*.css') //concatena los css y le digo que ignore los _*.sccs (css parciales. Por convencion los archivos parciales sass comienzan con guion bajo. Esparecido a las clases UTIL que se usan en Java)
      .pipe(concat('angularProject.min.scss'))
      .pipe(sass({outputStyle: 'compressed'}))  //compila el scss con el formato de salida: nested, expanded, compact, compressed
      .pipe(gulp.dest('dist/css'));
});

gulp.task('compress', ['compressJs', 'compressCss']);

// Abre una pestaña con el archivo index en el browser por default
gulp.task('open', function(){
  gulp.src('./index.html')
  .pipe(open({uri: 'http://localhost:9000/'}));
});

// Default Task
// Si se ejecuta gulp sin ningun parametro entonces GULP ejecuta lq tarea default
gulp.task('default', function (callback) {
  runSequence( ['lint', 'scripts', 'sass'],
              'compress',
               callback);
  });

// La tarea "serve" ejecuta la lista de tareas que estan en el array
// para ejecutarla en la consola coloco #gulp serve
gulp.task('serve', ['default', 'connect', 'watch', 'open']);
