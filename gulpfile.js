// 加载gulp
const gulp = require('gulp');
const sass = require('gulp-sass');
const cssUglify = require('gulp-minify-css');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');

// sacc转css
gulp.task('defaults', function () {
  gulp.src('css/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'));
});

//css压缩
gulp.task('css',function(){
    gulp.src('css/*.css')
        .pipe(cssUglify())
        .pipe(gulp.dest('dist/css'))
})

//js压缩
gulp.task('script', function() {
    gulp.src('js/*.js')
        .pipe(uglify({ mangle: false }))
        .pipe(gulp.dest('dist/js'))
})

//压缩html
gulp.task('htmls',function(){
     var options = {
        collapseWhitespace:true
    };
    gulp.src('index.html')
           .pipe(htmlmin(options))
           .pipe(gulp.dest('dist/'));   
});

//4.0高版本后 gulp.watch('css/*.css',['css']); swatch 报错 ----》数组改成 gulp.series('css')
gulp.task('watch',function(){
    gulp.watch('css/*.scss',gulp.series('defaults'));
    gulp.watch('css/*.css',gulp.series('css'));
    gulp.watch('js/*.js',gulp.series('script'));
    gulp.watch('index.html',gulp.series('htmls'));
})