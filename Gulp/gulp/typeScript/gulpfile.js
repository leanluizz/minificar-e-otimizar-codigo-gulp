const { series } = require("gulp");
const gulp = require("gulp");
const gulpTS = require("gulp-typescript");
const tsconfig = gulpTS.createProject("tsconfig.json");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");

function TaskOne() {
    
    return tsconfig.src()
     .pipe(tsconfig())
     .pipe(uglify())
     .pipe(concat("min-ts-app-produto"))
     .pipe(gulp.dest("build-concat"))
}



exports.default = series(TaskOne)
