const {series} = require("gulp");
const gulp = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const sass = require("gulp-sass")(require('sass'));
const uglifycss = require("gulp-uglifycss");


function TaskOne(){
  return gulp.src("src/sass/index.scss")
  .pipe(sass().on("error", sass.logError))
  .pipe(uglifycss({"uglyComments": true}))
  .pipe(concat("estilo.min.css"))
  .pipe(gulp.dest("build/css"))
}

function TaskTwo() {
    return gulp.src("src/index.html")
    .pipe(uglifycss())
    .pipe(concat("min.index.html"))
    .pipe(gulp.dest("build"))
}

exports.default = series(
    TaskOne,
    TaskTwo
    );
