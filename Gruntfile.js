'use strict';

module.exports = function(grunt) {

    require('time-grunt')(grunt);


    var path = require('path');

    var config = {
        base: 'src',
        test: 'src/test',
        src: 'src/app',
        dist: 'dist',
        assets: 'assets',
        build_notifications: true
    };

    grunt.initConfig({
        config: config,
        watch: {
            options: {
                livereload: true
            },
            ts: {
                files: ['<%= config.src %>/**/*.ts'],
                tasks: [
                    'ts',
                    'clean:baseDirFile'
                ]
            },
            styles: {
                files: ['<%= config.src %>/**/*.scss'],
                tasks: [
                    'sass',
                    'postcss',
                    'cssmin'
                ]
            },
            assets: {
                files: [
                    '<%= config.src %>/<%= config.assets %>/**/*.*',
                    '!<%= config.src %>/<%= config.assets %>/**/*.scss'
                ],
                tasks: [
                    'copy:assets'
                ]
            },
            html: {
                files: [
                    '<%= config.src %>/**/*.html'
                ],
                tasks: [
                    'copy:html',
                    'htmlmin'
                ]
            }
        },
        connect: {
            server: {
                options: {
                    hostname: '0.0.0.0',
                    port: 3000,
                    base: {
                        path: './',
                        options: {
                            index: 'dist/index.html'
                        }
                    },
                    open: true,
                    livereload: true
                }
            }
        },
        // TypeScript tasks
        tslint: {
            options: {
                configuration: 'tslint.json'
            },
            files: {
                src: ['<%= config.src %>/**/*.ts']
            }
        },
        ts: {
            all: {
                tsconfig: true,
                files: [{
                    src: ['<%= config.base %>/**/*.ts'],
                    dest: '<%= config.dist %>',
                }]
            }
        },
        // SASS & CSS tasks
        sass: {
            all: {
                files: [{
                    expand: true,
                    cwd: '<%= config.src %>/<%= config.assets %>/css',
                    src: '**/*.scss',
                    dest: '<%= config.dist %>/<%= config.assets %>/css',
                    ext: '.css'
                }]
            }
        },
        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer')({
                        browsers: ['last 2 versions']
                    })
                ]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= config.dist %>/<%= config.assets %>/css',
                    src: '**/*.css',
                    dest: '<%= config.dist %>/<%= config.assets %>/css'
                }]
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: '<%= config.dist %>/assets/css',
                    src: ['**/*.css'],
                    dest: '<%= config.dist %>/assets/css',
                    ext: '.css'
                }]
            }
        },
        // HTML
        prettify: {
            options: {
                indent: 2,
                condense: true,
                indent_char: ' ',
                indent_scripts: 'normal'
            },
            files: {
                expand: true,
                cwd: '<%= config.src %>',
                ext: '.html',
                src: ['**/*.html'],
                dest: '<%= config.src %>'
            },
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    caseSensitive: true,
                    collapseWhitespace: false,
                    minifyJS: false
                },
                files: [{
                    expand: true,
                    cwd: '<%= config.dist %>',
                    src: '**/*.html',
                    dest: '<%= config.dist %>',
                    ext: '.html'
                }]
            }
        },
        // Copy assets
        copy: {
            html: {
                files: [{
                    expand: true,
                    cwd: '<%= config.src %>',
                    src: ['**/*.html'],
                    dest: '<%= config.dist %>'
                }]
            },
            assets: {
                files: [{
                    expand: true,
                    cwd: '<%= config.src %>/<%= config.assets %>',
                    src: ['**/*.*', '!**/*.scss'],
                    dest: '<%= config.dist %>/<%= config.assets %>'
                }]
            },
            modules: {
                files: [{
                    expand: true,
                    cwd: 'node_modules',
                    src: [],
                    dest: '<%= config.dist %>'
                }]
            },
        },
        // Clean
        clean: {
            dist: {
                expand: true,
                cwd: '<%= config.dist %>',
                src: ['**/*.*']
            },
            baseDirFile: {
                expand: true,
                src: ['**/.baseDir.ts']
            }
        },
        // Angular 2 Bundle with Deps
        concat: {
            vendor: {
                files: {
                    '<%= config.dist %>/vendor/bundle.js': [
                        'node_modules/angular2/bundles/angular2-polyfills.js',
                        'node_modules/systemjs/dist/system.src.js',
                        'node_modules/rxjs/bundles/Rx.js',
                        'node_modules/underscore/underscore-min.js',
                        'node_modules/angular2/bundles/angular2.dev.js',
                        'node_modules/angular2/bundles/router.dev.js',
                        'node_modules/angular2/bundles/http.dev.js'
                    ]
                }
            }
        },
        // Minify Angular 2 Bundle
        uglify: {
            bundle: {
                options: {
                    sourceMap: true
                },
                files: {
                    '<%= config.dist %>/vendor/bundle.js': '<%= config.dist %>/vendor/bundle.js'
                }
            }
        },
        notify_hooks: {
            options: {
                tslint_enabled: true
            }
        },
        generate: {
            options: {
                dest: 'src'
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },
        express: {
            api: {
                options: {
                    port: 8888,
                    hostname: 'localhost',
                    server: path.resolve(__dirname, 'server/routes.js'),
                    serverreload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-prettify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-tslint');
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-generate');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-express');

    grunt.task.run('notify_hooks');


    grunt.registerTask('api', ['express', 'express-start']);

    grunt.registerTask('server', [
        'clean:dist',
        'concat:vendor',
        'uglify',
        'ts',
        'sass',
        'postcss',
        'cssmin',
        'copy:html',
        'htmlmin',
        'copy:assets',
        'clean:baseDirFile',
        'connect:server',
        'watch'
    ]);

    grunt.registerTask('html', ['prettify']);

    // testing with karma
    grunt.registerTask('test', [
        'ts',
        'karma'
    ]);


    grunt.registerTask('build', [
        'clean:dist',
        'concat:vendor',
        'uglify',
        'ts',
        'sass',
        'postcss',
        'cssmin',
        'copy:html',
        'htmlmin',
        'copy:assets',
        'clean:baseDirFile'
    ]);

    grunt.registerTask('default', ['server']);

};
