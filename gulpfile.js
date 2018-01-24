gulp.task('less', function() {
       gulp.src('src/style/*.less')
           .pipe(less())
           .pipe(gulp.dest(function(f) {
               return f.base;
           }))
    });
    
    gulp.task('default', ['less'], function() {
    
       gulp.watch('src/style/*.less', ['less']);
    })