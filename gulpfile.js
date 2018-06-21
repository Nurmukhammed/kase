var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglifyjs');

gulp.task('sass', function() {
    return gulp.src(['./public/sass/**/*.sass', './public/sass/**/*.scss'])
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('./public/css/'))
});

gulp.task('css-libs', function(){
    return gulp.src([
        './public/css/common.css'
    ])
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./public/compressed'));
});

gulp.task('scripts', function() {
    return gulp.src([
        './public/js/vendor/ng.min.js',
        './public/js/vendor/ng-route.min.js',
        './public/js/vendor/angular-translate.min.js',
        './public/js/vendor/jquery-2.1.1.min.js',
        './public/js/vendor/slick.js',
        './public/js/vendor/angular.slick.js'
    ])
        .pipe(concat('index.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./public/compressed'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'index.html'
        },
        notify: false
    });
});

gulp.task('watch', ['sass', 'css-libs', 'scripts'], function() {
    gulp.watch(['./public/sass/**/*.sass', './public/sass/**/*.scss'], ['sass']);
    gulp.watch('./*.html', browserSync.reload);
    gulp.watch('./public/js/**/*.js', browserSync.reload);
});

gulp.task('default', ['watch']);