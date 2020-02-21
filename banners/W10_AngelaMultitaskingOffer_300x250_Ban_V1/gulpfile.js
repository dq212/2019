var gulp = require( 'gulp' ),
    connect = require( 'gulp-connect' ),
    open = require( 'gulp-open' ),
    compass = require( 'gulp-compass' ),
    plumber = require( 'gulp-plumber' ),
    jshint = require( 'gulp-jshint' ),
    watch = require( 'gulp-watch' ),
    clean = require( 'gulp-clean' ),
    copy = require( 'gulp-copy' ),
    inline = require( 'gulp-inline' ),
    uglify = require( 'gulp-uglify' ),
    minifyCSS = require( 'gulp-clean-css' ),
    replace = require( 'gulp-replace' ),
    htmlmin = require( 'gulp-htmlmin' ),
    image = require('gulp-image'),
    zip = require( 'gulp-zip' ),
    argv = require( 'yargs' ).argv,
    jasmine = require('gulp-jasmine'), 
    notify = require('gulp-notify'),
    del = require('del');

var src = './src',
    dist = './dist',
    baseURL = ( argv.production === undefined ) ? src : dist,
    port = ( argv.production === undefined ) ? 8000 : 8001,
    uri = 'http://localhost:' + port;

var fs = require('fs');
var _versions = JSON.parse(fs.readFileSync('env.json', 'utf8')).VERSIONS.split(',');

gulp.task( 'default', [ 'serve' ] );
gulp.task( 'serve', [ 'connect', 'open', 'watch' ] );
gulp.task( 'build',[ 'clean', 'copy','sass', 'inline', 'replace', 'htmlmin', 'compress', 'testProd', 'imageCompress', 'versionCopy', 'versionReplace'] );

gulp.task( 'test', function() {
    gulp.src('tests/test.js')
        .pipe(jasmine())
        .on('error', notify.onError({
            title: 'Jasmine Test Failed', 
            message: 'One or more tests failed, see cli for details.'
        }));
} );

//tests after build
gulp.task( 'testProd', ['compress'], function() {
    gulp.src('tests/test.js')
        .pipe(jasmine())
        .on('error', notify.onError({
            title: 'Jasmine Test Failed', 
            message: 'One or more tests failed, see cli for details.'
        }));
} );

gulp.task( 'connect', function() {
	connect.server( {
  		root: baseURL,
    	livereload: true,
    	port: port
  	} );
} );

gulp.task( 'open', function() {
	var options = {
		uri: uri,
		app: 'google chrome'
	};
	gulp.src( './' )
		.pipe( open( options ) );
});

gulp.task( 'html', function () {
	gulp.src( src + '/*.html' )
    	.pipe( connect.reload() );
});

gulp.task( 'sass', function( done ) {
	gulp.src( './sass/*.scss' )
		.pipe( plumber( {
			errorHandler: function ( error ) {
				console.log( error.message );
				this.emit( 'end' );
			}
		} ) )
    	.pipe( compass( {
    		css: src + '/css',
    		sass: './sass',
    		image: src + '/',
    		style: 'nested',
        generated_images_path: src + '/img'
    	} ) )
    	.on( 'error', function( error ) {
      		console.log( error.message ); 
    	} )
      .pipe( replace( 'sprites/', '' ) )
    	.pipe( gulp.dest( src + '/css' ) )
    	.on('end', function () { done(); });
});

gulp.task('moveGeneratedImages', ['sass'], function() {
  return gulp.src(src + '/img/sprites/**/*.png')
    .pipe(gulp.dest(src + '/img'));
});

gulp.task('cleanSprites', ['moveGeneratedImages'], function() {
  return del(src + '/img/sprites');
});

gulp.task( 'lint', function() {
	return gulp.src( src + '/js/*.js' )
    		   .pipe( jshint() )
    		   .pipe( jshint.reporter( 'default' ) )
               .pipe( connect.reload() );
});

gulp.task( 'watch', function() {
	gulp.watch( [ src + '/*.html' ], [ 'html' ] );
	gulp.watch( [ './sass/*.scss'], [ 'sass', 'moveGeneratedImages', 'cleanSprites' ] );
	gulp.watch( [ src + '/js/*.js'], [ 'lint' ] );
});

gulp.task( 'clean', function () {
	return gulp.src( [ dist + '/**/*' , './dist-alt/**/*'], { read: false } )
    		   .pipe( clean() );
});

gulp.task( 'copy', [ 'clean', 'cleanSprites' ], function() {
	return gulp.src( [src + '/*.{jpg,png}', src + '/img/**/*.{jpg,png,gif,svg}', src + '/manifest.js' ] )
  			   .pipe( copy( dist, { prefix: 2 } ) );
});

gulp.task( 'inline', [ 'sass' ], function( done ) {
	gulp.src( src + '/index.html' )
  		.pipe( inline( {
    		base: src,
    		js: uglify,
    		css: minifyCSS,
    		disabledTypes: [ 'img' ]
  	} ) )
  	.pipe( gulp.dest( dist ) )
  	.on('end', function () { done(); });
});

gulp.task( 'replace', [ 'inline' ], function( done ) {
	gulp.src( [ dist + '/index.html' ] )
    	.pipe( replace( '../img/', 'img/') )
        .pipe( replace( 'img/', './') )
    	.pipe( gulp.dest( dist ) )
    	.on('end', function () { done(); });
});

gulp.task('htmlmin', [ 'replace' ], function() {
  return gulp.src( dist + '/index.html' )
    		 .pipe( htmlmin( { collapseWhitespace: true, removeComments: true } ) )
    		 .pipe( gulp.dest( dist ) );
});

gulp.task( 'imageCompress', [ 'copy', 'sass' ], function (done) {
  gulp.src( dist + '/*.{jpg,png,svg,gif}' )
    .pipe( image({
      pngquant: true,
      optipng: false,
      zopflipng: false,
      jpegRecompress: true,
      jpegoptim: false,
      mozjpeg: false,
      gifsicle: true,
      svgo: true,
      concurrent: 10
    }))
    .pipe(gulp.dest( dist ))
    .on('end', function() { done(); });
});

gulp.task( 'compress', [ 'clean', 'copy','sass', 'inline', 'replace', 'htmlmin', 'imageCompress' ], function() {
	return gulp.src(  dist + '/*' )
			   .pipe( zip( 'W10_AngelaMultitaskingOffer_300x250_Ban_V1.zip' ) )
			   .pipe( gulp.dest( './' ) );
});

gulp.task( 'versionCopy', [ 'clean', 'copy','sass', 'inline', 'replace', 'htmlmin', 'imageCompress' ], function(done) {
    _versions.forEach(function(name, idx) {
        gulp.src( dist + '/*' )
            .pipe( copy('dist-alt/' + name + '-dist/') )
            .on('end', function() {
                if (idx === _versions.length - 1) done();
            });
    });
});

gulp.task( 'versionReplace', ['versionCopy'], function() {
    _versions.forEach(function(name) {
        var dist = './dist-alt/' + name + '-dist/dist';

        gulp.src( [dist + '/index.html'] )
            .pipe( replace('__versions', name) )
            .pipe( gulp.dest( dist ) );
    });
});
