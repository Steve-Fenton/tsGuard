var gulp = require('gulp');

gulp.task('default', function () {
    gulp.src('./src/*.d.ts')
        .pipe(gulp.dest('./dist/src'));

    gulp.src('./src/*.js')
        .pipe(gulp.dest('./dist/src'));

    gulp.src('./README.md')
        .pipe(gulp.dest('./dist'));

    gulp.src('./package.json')
        .pipe(gulp.dest('./dist'));
});