
var gulp = require('gulp');
var browserSync=require('browser-sync');
var gulpSass=require('gulp-sass');
var gulpJade=require('gulp-jade');


gulp.task('watch',['styles'] ,function () {
    gulp.watch(['src/js/*.js','src/scss/*.scss','src/jade/*.jade'], ['styles','views','js',browserSync.reload]);
});

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: './public' 
        }
    });
});

gulp.task('js', function(){
    gulp.src('src/js/*.js')
        .pipe(gulp.dest('./public/js'));
});

gulp.task('styles', function () {
    gulp.src('src/scss/*.scss')
    .pipe(gulpSass()) 
    .pipe(gulp.dest('./public/css'));
});

gulp.task('views', function () {
    gulp.src('src/jade/*.jade')
    .pipe(gulpJade()) 
    .pipe(gulp.dest('./public'));
});

gulp.task('default',['server','watch']);
