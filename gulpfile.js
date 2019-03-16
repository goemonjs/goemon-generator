var gulp = require('gulp');

gulp.task('copy-template', function() {
  return gulp.src('./src/goemon/**/*')
    .pipe(gulp.dest('./app/template/'));
});

gulp.task('build', gulp.series('copy-template'));

gulp.task('default', gulp.series('build'));