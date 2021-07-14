'use strict'

// ------------------------------------------------------------------------------------------
//
// Main project GULP file
//
// ------------------------------------------------------------------------------------------
//
// GROUPED TASKS
//
//      - svg                   Parses all SVG and SASS
//      - default               Parses all
//      - watch                 Activates BrowserSync and tracks changes
//
// ------------------------------------------------------------------------------------------
//
// SINGLE TASKS
//
//      - sass                  Go through all folders and merge all non-critical SCSS
//      - criticalSass          Go through all folders and merge all critical SCSS
//      - sassvg                Creates sassvg file for import in CSS files
//      - svgSprite             Creates SVG sprite for include in HTML
//      - js                    Go through all folders and merge all non-critical JS
//      - criticalJs            Go through all folders and merge all critical JS
//
// ------------------------------------------------------------------------------------------


/**
 * Load gulpconfig
 */
let config = require('./gulpconfig.json');


/**
 * Load base Gulp
 *
 * @type {Gulp|{}}
 */
const gulp = require('gulp'),
    sass = require('gulp-sass'), // Sass implementation
    cleanCss = require('gulp-clean-css'), // Minifies CSS
    bulkSass = require('gulp-sass-bulk-import'), // Enables bulk import of sass files
    browserSync = require('browser-sync').create(), // Enables browser sync
    sassvg = require('gulp-sassvg'), // Creates a mixin with SVG files
    babel = require('gulp-babel'), // Allows usage of next gen JS
    concat = require('gulp-concat'), // Allows concatination of files
    jslint = require('gulp-jslint'), // Lints JS
    uglify = require('gulp-uglify'), // Minify JavaScript
    mediaQuery = require('gulp-group-css-media-queries'), // Group CSS by media queries
    svgstore = require('gulp-svgstore'), // Combine svg files into one
    svgmin = require('gulp-svgmin'), // Minify SVG
    plumber = require('gulp-plumber'), // Prevent pipe breaking caused by errors from gulp plugins
    size = require('gulp-size'), // Display the size of your project
    cssDepthCheck = require('gulp-cssdepth-check'), // Checks for maximum CSS depth
    gulpIgnore = require('gulp-ignore'); // Process for cleaning unneeded files


/**
 * TASK: sass
 *
 * Loads main scss files
 *
 * Returns /dist/css/main.min.css
 */
gulp.task('sass', function () {

    let ignoreCondition = '!**/*critical*';
    let stream = gulp
        .src(
            [
                './src/scss/main.scss',
                './src/scss/_constants.scss'
            ],
            {
                allowEmpty: true
            }
        )
        .pipe(gulpIgnore.include(ignoreCondition))
        .pipe(plumber())
        .pipe(bulkSass())
        .pipe(sass(config.sassOptions).on('error', sass.logError));

    if (config.debug === true) {
        stream.pipe(mediaQuery({
            'showSelectors': false
        }));
    } else {
        stream.pipe(mediaQuery({
            'showSelectors': false
        }))
    }
    if (config.debug === true) {
        stream
            .pipe(
                cssDepthCheck(
                    {
                        'showSelectors': false
                    }
                )
            );
    }

    if (config.debug === false) {
        stream.pipe(concat('main.min.css'))
            .pipe(cleanCss())
            .pipe(gulp.dest(config.path.distPath + 'css/'));
    } else {
        stream.pipe(concat('main.min.css'))
            .pipe(gulp.dest(config.path.distPath + 'css/'));
    }

    if (config.debug === true) {
        stream.pipe(size());
    }

    stream.pipe(browserSync.stream())

    return stream;
});


/**
 * TASK: critical
 *
 * Loads critical SCSS
 *
 * Returns /dist/css/critical.min.css
 */
gulp.task('criticalSass', function () {
    let stream = gulp
        .src(
            [
                './src/scss/critical.scss',
                './src/scss/_constants.scss',
                './src/scss/critical/*',
                './src/scss/pages/*'
            ],
            {
                allowEmpty: false
            }
        )
        .pipe(plumber())
        .pipe(bulkSass())
        .pipe(sass(config.sassOptions).on('error', sass.logError))

    if (config.debug === true) {
        stream.pipe(mediaQuery({
            'showSelectors': true
        }));
    } else {
        stream.pipe(mediaQuery({
            'showSelectors': false
        }));
    }
    if (config.debug === true) {
        stream
            .pipe(cssDepthCheck(
                cssDepthCheck(
                    {
                        'showSelectors': true
                    }
                )
            ));
    }
    if (config.debug === false) {
        stream.pipe(cleanCss({level: 2}));
    }

    if (config.debug === false) {
        stream.pipe(concat('critical.min.css'))
            .pipe(cleanCss())
            .pipe(gulp.dest(config.path.distPath + 'css/'));
    } else {
        stream.pipe(concat('critical.min.css'))
            .pipe(gulp.dest(config.path.distPath + 'css/'));
    }

    if (config.debug === true) {
        stream.pipe(size());
    }

    stream.pipe(browserSync.stream());

    return stream;
});


/**
 * TASK: sassvg
 *
 * Creates _sassvg.scss files in ./src/scss/svg which can be imported in SCSS files
 * Useful for calling icons in CSS via .myclass { background: sassvg('myicon); }
 *
 * Returns _sassvg.scss and _sassvg-data.scss in folder /dist/src/svg
 */
gulp.task('sassvg', function () {
    return gulp
        .src(
            [
                './src/svg/**/*.svg'
            ]
        )
        .pipe(plumber())
        .pipe(sassvg({
            outputFolder: './src/svg',
            optimizeSvg: true
        }))
        .pipe(browserSync.stream());
});


/**
 * TASK: svgsprite
 *
 * Creates a SVG sprite of SVG icons by cascading through intbuilder and inttheme folders
 * Fetches also icons in Content Elements
 *
 * Use in HTML
 * <svg class="myclass">
 *     <use href="/assets/icons/svg.svg#my-icon-name"></use>
 * </svg>
 *
 * Returns data in folder /dist/img/svg
 */
gulp.task('svgsprite', function () {
    return gulp
        .src(
            [
                './src/svg/**/*.svg'
            ]
        )
        .pipe(plumber())
        .pipe(svgmin(function (file) {
            return {
                plugins: [{
                    cleanupIDs: {
                        minify: true
                    }
                }]
            }
        }))
        .pipe(svgstore())
        .pipe(gulp.dest(config.path.distPath + 'img/svg/'))
        .pipe(browserSync.stream());
});


/**
 * TASK: js
 *
 * Returns /dist/js/main.min.js
 */
gulp.task('js', function () {
    let ignoreCondition = '!**/*critical*';

    let stream = gulp
        .src(
            [
                './src/js/main/*',
                './src/js/main.js',
            ],
            {
                allowEmpty: true
            }
        )
        .pipe(gulpIgnore.include(ignoreCondition))
        .pipe(plumber())
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(concat('main.min.js'))
        .pipe(jslint())
        .pipe(gulp.dest(config.path.distPath + 'js'));

    if (config.debug === true) {
        stream.pipe(uglify())
            .pipe(size());
    }

    stream.pipe(browserSync.stream());

    return stream;
});


/**
 * TASK: criticalJs
 *
 * Returns /dist/js/critical.min.js
 */
gulp.task('criticalJs', function () {
    let stream = gulp
        .src(
            [
                './src/js/critical/*',
                './src/js/critical.js'
            ],
            {
                allowEmpty: true
            }
        )
        .pipe(plumber())
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(concat('critical.min.js'))
        .pipe(jslint())
        .pipe(gulp.dest(config.path.distPath + 'js'));

    if (config.debug === true) {
        stream.pipe(uglify())
            .pipe(size());
    }

    stream.pipe(browserSync.stream());

    return stream;
});


// ----------------------------------------------------------------------------------------------------------------------
// GROUP TASKS
// ----------------------------------------------------------------------------------------------------------------------

/**
 * TASK: default
 *
 * Combines all tasks
 *
 * Returns void
 */
gulp.task(
    'default',
    gulp.series(
        'sassvg',
        // 'svgsprite',
        'criticalSass',
        'sass',
        'criticalJs',
        'js',
    )
);

/**
 * TASK: svg
 *
 * Combines SVG relevant tasks
 *
 * Returns void
 */
gulp.task(
    'svg',
    gulp.series(
        'sassvg',
        'svgsprite',
        'sass',
        'criticalSass'
    )
);


/**
 * TASK: watch
 *
 * Watches all files
 *
 * Returns void
 */
gulp.task('watch', function () {
    browserSync.init({
        //proxy: config.proxy
        server: {
            baseDir: "./dist/"
        }
    })
    ;
    // Watch all non-critical SCSS files
    gulp.watch(
        [
            './src/scss/main.scss',
            './src/scss/base/**/*.scss',
            './src/scss/_mixins.scss',
            './src/scss/content/**/*.scss',
            './src/scss/partials/**/*.scss',
            './src/scss/_constants.scss'
        ],
        gulp.series('sass')
    ).on('change', browserSync.reload);

    // Watch all critical SCSS files
    gulp.watch(
        [
            './src/scss/critical.scss',
            './src/scss/base/_base_critical.scss',
            './src/scss/pages/**/*.scss',
            './src/scss/_constants.scss'
        ],
        gulp.series('criticalSass')
    ).on('change', browserSync.reload);

    // Watch all non-critical JS files
    gulp.watch(
        [
            './src/js/main.js'
        ],
        gulp.series('js')
    ).on('change', browserSync.reload);

    // Watch all critical JS files
    gulp.watch(
        [
            './src/js/critical.js'
        ],
        gulp.series('criticalJs')
    ).on('change', browserSync.reload);

    // Watch SVG folders
    gulp.watch(
        [
            './src/svg/**/*.svg'
        ],
        gulp.series('sassvg')
    ).on('change', browserSync.reload);
});
