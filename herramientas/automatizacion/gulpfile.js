const gulp = require('gulp')
const browserSync = require('browser-sync').create();


gulp.task('build', (cb) => {
    console.log('contruyendo el sitio');
  
    setTimeout(cb, 2000)
})


gulp.task('serve', () => {
	browserSync.init({
		server: './www',
		port: 8000
	});

	gulp.watch('www/*.html').on('change', browserSync.reload);
});