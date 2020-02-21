var readdir = require( 'readdir' );
var inquirer = require( 'inquirer' );
var mozjpeg = require( 'imagemin-mozjpeg' );
var pngquant = require('imagemin-pngquant');

module.exports = function (grunt) {
    'use strict';
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-prompt');
    grunt.loadNpmTasks('grunt-inline');
    grunt.loadNpmTasks('grunt-replace');

    grunt.initConfig({
        clean: { 'files': ['./dist'] },
        connect: {
            'src': {
                'options': {
                    'port': 8000,
                    'base': './src',
                    'keepalive': true,
                    'hostname': '*'
                }
            },
            'dist': {
                'options': {
                    'port': 8001,
                    'base': './dist',
                    'keepalive': true,
                    'hostname': '*'
                }
            }
        },
        copy: {
            'assets': {
                'expand': true,
                'cwd': './src',
                'src': '**/*.{jpg,png,gif}',
                'dest': './dist',
                'flatten': true,
                'filter': 'isFile'
            }
        },
        compress: {
            'delivery': {
                'options': {
                    'archive': 'StateStreet_GLD_300x250.zip'
                },
                'expand': true,
                'cwd': './dist',
                'src': ['**/*'],
                'dest': './'
            }
        },
        htmlmin: {
            'dist': {
                'options': {
                    'removeComments': true,
                    'collapseWhitespace': false
                },
                'files': { './dist/index.html': './dist/index.html' }
            }
        },
        replace: {
            'dist': {
                'options': {
                    'usePrefix': false,
                    'patterns': [
                        {
                            'match': 'img/',
                            'replacement': ''
                        }
                    ]
                },
                'files': [
                    {
                        'expand': true, 
                        'flatten': true, 
                        'src': ['./dist/index.html'], 
                        'dest': './dist/'
                    }
                ]
            }
        },
        sass: {
            'options': {
                'sourcemap': 'none',
                'noCache': true,
                'compass': true
            },
            'files': {
                'expand': true,
                'cwd': './sass',
                'src': ['*.scss'],
                'dest': './src/css',
                'ext': '.css'
            }
        },
        jshint: {
            'all': ['./src/js/*.js'],
            'options': {
                'camelcase': false,
                'curly': false,
                'eqeqeq': true,
                'immed': true,
                'newcap': true,
                'noarg': true,
                'sub': true,
                'undef': true,
                'eqnull': true,
                'browser': true,
                'maxlen': 150,
                'unused': true,
                'globals': {
                    'module': false,
                    'console': true
                }
            }
        },
        watch: {
            'sass': {
                'files': ['./sass/**/*.{scss,sass}'],
                'tasks': 'sass'
            },
            'jshint': {
                'files': ['./src/js/**/*.js'],
                'tasks': 'jshint'
            }
        },
        inline: {
            'options': {
                'cssmin': true,
                'uglify': {
                    'compress': { 'drop_console': true },
                    'mangle': true
                }
            },
            'dist': {
                'src': './src/index.html',
                'dest': './dist/index.html'
            }
        },
        prompt: {
            'imagemin': {
                'options': {
                    'questions': [{
                        'config': 'files',
                        'type': 'checkbox',
                        'message': 'Select assets to optimize:',
                        'choices': function () {
                            var choices = [];
                            var files = readdir.readSync( 'assets/', [ '**.jpg', '**.png', '**.gif', '**.svg' ] );

                            choices.push( {
                                name: '---- ALL ----',
                                value: files
                            });

                            for ( var i = 0; i < files.length; i++ ) {
                                choices.push( {
                                    name: files[ i ],
                                    value: files[ i ]
                                } );
                            }

                            choices.push( new inquirer.Separator() );

                            return choices;
                        },
                        'validate': function ( input ) {
                            var done = this.async();

                            if ( input.length ) {
                                done( true );
                            } else {
                                done( "Please select at least one asset" );
                            }
                        },
                        'filter': function ( input ) {
                            // check if all is selected and return as input
                            for( var i = 0; i < input.length; i++ ) {
                                if ( Array.isArray( input[i] ) ) {
                                    return input[i];
                                }
                            }

                            return input;
                        }
                    },
                    {
                        'config': 'compression_quality',
                        'type': 'input',
                        'message': 'Image compression quality (0-100):',
                        'default': 80,
                        'validate': function ( input ) {
                            var done = this.async();

                            if ( input < 0 || input > 100 ) {
                                done( "Please enter a value between 0 and 100" );
                            } else {
                                done( true );
                            }
                        }
                    }],
                    'then': function ( results, done ) {
                        grunt.config.merge({
                            imagemin: {
                                src: {
                                    options: {
                                        use: [
                                            mozjpeg( { quality: results.compression_quality } ), 
                                            pngquant ( { quality: results.compression_quality } )
                                        ]
                                    },
                                    files: [{
                                        src: results.files
                                    }]
                                }
                            }
                        });

                        done();

                        return true;
                    }
                }
            }
        },
        imagemin: {
            'src': {
              'options': {
                'use': [mozjpeg({quality: 80}), pngquant({quality: 80})]
              },
              'files': [{
                'expand': true,
                'cwd': './assets/',
                'src': [],
                'dest': './src/img/'
              }]
            }
        }
    });
    
    grunt.registerTask('build', [
        'clean',
        'sass',
        'inline',
        'htmlmin',
        'replace',
        'copy',
        'compress'
    ]);
    
    grunt.registerTask('optimize', [ 
        'prompt', 
        'imagemin'
    ]);
    
    grunt.registerTask('default', ['watch']);
};