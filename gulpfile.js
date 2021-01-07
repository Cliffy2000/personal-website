const { src, dest, parallel, series, watch } = require('gulp'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  bs = require('browser-sync'),
  reload = bs.reload,
  sass = require('gulp-dart-sass'),
  fileinclude = require('gulp-file-include');

function html() {
  return src('src/*.html')
    .pipe(
      fileinclude({
        prefix: '@@',
        basepath: '@file'
      })
    )
    .pipe(dest('dest'))
    .pipe(reload({ stream: true }));
}

function css() {
  return src('src/css/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(dest('dest/css'))
    .pipe(reload({ stream: true }));
}

function js() {
  return (
    src('src/js/*.js')
      .pipe(dest('dest/js'))
      .pipe(reload({ stream: true }))
  );
}

function serve() {
  bs.init({
    server: {
      baseDir: 'dest',
      ghostMode: false
    }
  });
  watch('src/css/*.{css,scss}', css);
  watch('src/**/*.html', html);
  watch('src/js/*.js', js);
}

exports.js = js;
exports.css = css;
exports.html = html;
exports.default = series(parallel(html, css, js), serve);
