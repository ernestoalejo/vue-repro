
const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');


gulp.task('default', function() {
  var bundle = browserify({entries: ['index.js']});
  return bundle
    .transform('vueify')
    .transform('babelify', {
      presets: ['es2015'],
      extensions: ['.js', '.vue'],
      plugins: [
        'transform-runtime',
        'transform-object-rest-spread',
      ],
    })
    .bundle()
    .on('error', function(err) {
      throw err;
    })
    .pipe(source('app.js'))
    .pipe(gulp.dest('.'));
});
