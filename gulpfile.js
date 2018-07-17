/* eslint-disable import/no-commonjs */
var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');
var watch = require('gulp-watch');
var filter = require('gulp-filter');
var imageDataURI = require('gulp-image-data-uri');
var concat = require('gulp-concat');


const sprites = ['src/sprites/*.png', 'src/sprites/*.jpg', 'src/sprites/*.gif'];
gulp.task('sprites', function () {
  var filterPng = filter(['**.png'], {restore: true});
  var filterScss = filter(['**.scss'], {restore: true});
  var spriteData = gulp.src(sprites).pipe(spritesmith({
    imgName: 'sprites.png',
    cssName: 'sprites.scss',
    padding: 30,
    cssFormat: 'scss',
    // algorithm: 'diagonal',
  }));

  return spriteData
  .pipe(filterPng)
  .pipe(gulp.dest('src/.sprites'))
  .pipe(filterPng.restore)
  .pipe(filterScss)
  .pipe(gulp.dest('src/.sprites'));
});

gulp.task('sprites-base64', ['sprites'], function () {
  return gulp.src('src/.sprites/*.png')
  .pipe(imageDataURI({
    customClass: function(className) {
      if ('sprites' === className) {
        return 'sp';
      }
      return className;
    },
  }))
  .pipe(concat('sprites-base64.scss'))
  .pipe(gulp.dest('src/.sprites'));
});

gulp.task('default', ['sprites', 'sprites-base64']);
gulp.task('build', ['sprites', 'sprites-base64']);

gulp.task('watch', ['sprites'], () => {
  watch(sprites, { debounceDelay: 200 }, () => gulp.start('sprites'));
});

/* eslint-enable */
