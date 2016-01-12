// Karma configuration
// Generated on Tue Aug 11 2015 17:15:50 GMT+0300 (Jerusalem Daylight Time)

// import {
//     SAUCE_LAUNCHERS
// }
// from './browsers.config.js';

// let karmaConfig = {};



// let sauceLabsConfig = {
//     testName: 'NG2 Lab - UNIT',
//     startConnect: false,
//     recordVideo: false,
//     recordScreenshots: false,
//     options: {
//         'selenium-version': '2.45.0',
//         'command-timeout': 600,
//         'idle-timeout': 600,
//         'max-duration': 5400
//     }
// };


// if (process.env.TRAVIS) {
//     sauceLabsConfig.build = `TRAVIS #${process.env.TRAVIS_BUILD_NUMBER} (${process.env.TRAVIS_BUILD_ID})`;
//     sauceLabsConfig.tunnelIdentifier = process.env.TRAVIS_JOB_NUMBER;
//     // TODO: remove once SauceLabs supports websockets.
//     // This speeds up the capturing a bit, as browsers don't even try to use websocket.
//     karmaConfig.transports = ['polling'];
// }




module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: './',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        files: [
            'node_modules/zone.js/dist/zone-microtask.js',
            'node_modules/zone.js/dist/long-stack-trace-zone.js',
            'node_modules/zone.js/dist/jasmine-patch.js',
            'node_modules/es6-module-loader/dist/es6-module-loader.js',
            'node_modules/traceur/bin/traceur-runtime.js', // Required by PhantomJS2, otherwise it shouts ReferenceError: Can't find variable: require
            'node_modules/traceur/bin/traceur.js',
            'node_modules/systemjs/dist/system.src.js',
            'node_modules/reflect-metadata/Reflect.js', {
                pattern: 'node_modules/angular2/**/*.js',
                included: false,
                watched: false
            }, {
                pattern: 'node_modules/rxjs/**/*.js',
                included: false,
                watched: false
            }, {
                pattern: 'dist/**/*.js',
                included: false,
                serve: true,
                watched: false,
            }, {
                pattern: 'node_modules/systemjs/dist/system-polyfills.js',
                included: false,
                watched: false
            }, // PhantomJS2 (and possibly others) might require it
            'test-bootstrap.js'
        ],


        // list of files to exclude
        exclude: [
            'dist/app/bootstrap.js',
            'node_modules/angular2/**/*_spec.js'
        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {},

        // preprocessors: {
        //     '**/*.js': ['sourcemap']
        // },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'html', 'coverage'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher

        //browsers: ['PhantomJS', 'Chrome'], // 'PhantomJS' doeesn't work wth traceur

        browsers: ['Chrome'],


        customLaunchers: {
            Chrome_travis_ci: {
                base: 'Chrome',
                flags: ['--no-sandbox']
            }
        },


        // the default configuration
        htmlReporter: {
            templatePath: null
        },


        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            'dist/**/*.js': ['coverage']
        },

        // optionally, configure the reporter
        coverageReporter: {
            type: 'html',
            dir: 'coverage/'
        },

        // customLaunchers: SAUCE_LAUNCHERS,
        // sauceLabs: sauceLabsConfig,


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        plugins: [
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher',
            'karma-jasmine-html-reporter',
            'karma-html-reporter',
            'karma-coverage'
        ]
    })
};


// if (process.env.APPVEYOR) {
//     config.browsers = ['IE'];
//     config.singleRun = true;
//     config.browserNoActivityTimeout = 90000; // Note: default value (10000) is not enough
// }

// if (process.env.TRAVIS || process.env.CIRCLECI) {
//     config.browsers = ['Chrome_travis_ci'];
//     config.singleRun = true;
// }
