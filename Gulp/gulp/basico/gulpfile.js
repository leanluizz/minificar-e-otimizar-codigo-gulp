const gulp = require("gulp");
const series = gulp.series;
const paralel = gulp.parallel;


const antes1 = cb => {
    console.log('Tarefa 1 Completada');
    return cb()
} 

const antes2 = cb => {
    console.log('Tarefa 2 Completada');
    return cb()
} 


function copiar(cb) {
    gulp.src(["pastaA/arquivo1.txt","pastaA/arquivo2.txt"])
    .pipe(gulp.dest("pastaB"))
    console.log("Tarefa de copiar!");
    return cb()
}

const fim = cb => {
    console.log('Tarefa final Completada');
    return cb()
} 


module.exports.default = series(
    paralel(antes1, antes2, copiar),  
    fim
    
    );
