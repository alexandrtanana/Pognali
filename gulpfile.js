const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const sass = require("gulp-sass")(require('sass'));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sync = require("browser-sync").create();
const gulpStylelint = require('gulp-stylelint');
const w3cjs = require('gulp-w3cjs');


// Styles

const styles = () => {
  return gulp.src("source/sass/style.scss")
  .pipe(gulpStylelint({
    reporters: [
      {formatter: 'string', console: true}
    ]
  }))
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("source/css"))
    .pipe(sync.stream());
}
// const cssLint = () => {
//   return gulp.src("source/sass/style.scss")
//     .pipe(gulpStylelint({
//       reporters: [
//         {formatter: 'string', console: true}
//       ]
//     }));
// }

// exports.cssLint = cssLint;
exports.styles = styles;




// HTML

const htmlLint = () => {
    return gulp.src('source/*.html')
        .pipe(w3cjs())
};
exports.htmlLint = htmlLint;


// Server

const server = (done) => {
  sync.init({
    server: {
      baseDir: 'source'
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

exports.server = server;

// Watcher

const watcher = () => {
  gulp.watch("source/sass/**/*.scss", gulp.series("styles"));
  gulp.watch("source/*.html").on("change", sync.reload);
}

exports.default = gulp.series(
  styles, server, watcher
);
