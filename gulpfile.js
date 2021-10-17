var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass')(require('sass'));
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();


function css_style(done) {
  gulp.src('source/sass/style.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({
    errorLogToConsole: true,
    outputStyle: 'compressed'
  }))
  .on('error', console.error.bind(console))
  .pipe(autoprefixer({
    overrideBrowserslist: ['last 5 versions'],
    cascade: false
  }))
  .pipe(rename({suffix: '.min'}))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest('source/css/'))
  .pipe(browserSync.stream());
  done();
}

function sync(done) {
  browserSync.init({
    server: {
      baseDir: './source'
    },
    port: 3000
  });
  done()
}

function browserReload(done) {
  browserSync.reload();
  done();
}

function print(done) {
  console.log('Hi!');
  done();
}

function watchSass(){
  gulp.watch('source/sass/**/style.scss',css_style);
}

function watchFiles(){
  gulp.watch('source/sass/**/style.scss',css_style);
  gulp.watch('./**/*.html',browserReload);
  gulp.watch('./**/*.js',browserReload);
}

// gulp.task(css_style);
// gulp.task(print);

gulp.task('default', gulp.parallel(watchFiles, sync));
gulp.task(sync);
