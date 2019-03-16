var gulp = require('gulp'),
    del = require('del');

gulp.task('copy-template', function() {
  return gulp.src('./src/goemon/**/*')
    .pipe(gulp.dest('./generators/app/templates/'));
});

gulp.task('remove-tempalte', del.bind(null, ['app/goemon']));

gulp.task('build', gulp.series('remove-tempalte', 'copy-template'));

gulp.task('default', gulp.series('build'));