var gulp = require('gulp'),
    del = require('del');

gulp.task('copy-template', function() {
  return gulp.src('./src/goemon/**/*')
    .pipe(gulp.dest('./app/template/'));
});

gulp.task('remove-tempalte', del.bind(null, ['app/template']));

gulp.task('build', gulp.series('remove-tempalte', 'copy-template'));

gulp.task('default', gulp.series('build'));