var gulp = require('gulp');
var gulpif = require('gulp-if');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var refresh = require('gulp-refresh')

var dist = false;

gulp.task('js', function() {
	lint(
			[ 'src/main/localdev/js/application.js',
//				'src/main/javascript/util/*.js',
//				'src/main/javascript/conf/*.js',
//				'src/main/javascript/dm/*.js',
				'src/main/localdev/js/vm/base/*.js',
				'src/main/localdev/js/vm/*.js' 
				]).pipe(
						concat('application.min.js')).pipe(uglify({
		mangle : false,
		compress : false,
		output : {
			beautify : true,
			indent_level : 2
		}
	})).pipe(gulpif(dist, uglify())).pipe(gulp.dest('src/main/webapp/js'));
});

//Refresh GulpTask if changes occur
gulp.task('watchjs', () => {
  refresh.listen();
  gulp.watch('src/main/localdev/js/**',['js']);
})

gulp.task('watchcss', () => {
  refresh.listen();
  gulp.watch('src/main/localdev/scss/*.scss',['sass']);
})

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
	return gulp.src([ 'src/main/localdev/scss/*.scss' ]).pipe(sass()).pipe(
			gulp.dest("src/main/webapp/css"));
});

gulp.task('sass_ext', function() {
	return gulp.src([ 'node_modules/bootstrap/scss/bootstrap.scss' ]).pipe(
			sass()).pipe(gulp.dest("src/main/webapp/css/ext"));
});

// Move the javascript files into our /src/js folder
gulp.task('js_ext', function() {gulp
	return gulp.src(
			[ 'node_modules/bootstrap/dist/js/bootstrap.min.js',
				'node_modules/bootstrap/dist/js/bootstrap.min.js.map',
					'node_modules/jquery/dist/jquery.min.js',
					'node_modules/crossroads/dist/crossroads.min.js',
					'node_modules/signals/dist/signals.min.js',
					'node_modules/hasher/dist/js/hasher.min.js',
					'node_modules/popper.js/dist/umd/popper.min.js',
					'node_modules/popper.js/dist/umd/popper.min.js.map',
					'src/main/localdev/js/ext/knockout-3.4.2.js' ]).pipe(
			gulp.dest("src/main/webapp/js/ext"));
});

gulp.task('default', [ 'js', 'js_ext', 'sass', 'sass_ext','watchjs','watchcss' ]);

function lint(src) {
	var streams = src;
	if (typeof src === 'string' || Array.isArray(src)) {
		// noinspection JSUnresolvedFunction
		streams = gulp.src(src);
	}
	// noinspection JSUnresolvedFunction
	return streams.pipe(jshint('.jshintrc')).pipe(jshint.reporter('default'));
}