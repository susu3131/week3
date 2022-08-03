const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const autoprefixer = require('autoprefixer');
const browserSync = require('browser-sync').create();
const minimist = require('minimist');
//設置開發狀態
let envOptions = {
    string: 'env',
    default: {
        env: 'develop'
    }
};
let options = minimist(process.argv.slice(2), envOptions)
//目前開發狀態
console.log(options);

// copyPWA
gulp.task('copyPWA', () => {
    return gulp.src('./app/manifest.json')
        .pipe(gulp.src('./app/sw.js'))
        .pipe(gulp.dest('./public/'));
});

//remove public
gulp.task('clean', function () {
    return gulp.src('./public', { read: false })
        .pipe($.clean());
});

//pug
gulp.task('pug', function buildHTML() {
    return gulp.src('./app/**/*.pug')
        .pipe($.plumber())
        .pipe($.data(function () {
            let menu = require('./app/assets/data/menu.json');
            let source = {
                'menu': menu
            };
            return source;
        }))
        .pipe($.pug({
            //若為false將會去除空格
            pretty: false
        }))
        .pipe(gulp.dest('./public/'))
        .pipe(browserSync.stream())
});
//sass編譯
gulp.task('sass', function () {
    //針對瀏覽器加入前輟
    let plugins = [
        autoprefixer(),
    ];

    return gulp.src('./app/assets/style/**/*.scss')
        .pipe($.plumber())
        .pipe($.sourcemaps.init())
        .pipe($.sass({
            outputStyle: 'nested',
            includePaths: ['./node_modules/bootstrap/scss']
        }).on('error', $.sass.logError))
        //壓縮CSS
        .pipe($.postcss(plugins))
        //壓縮CSS
        .pipe($.if(options.env === 'prod', $.cleanCss()))
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest('./public/css'))
        .pipe(browserSync.stream())
});
//JS編譯
gulp.task('babel', () =>
    gulp.src(['./app/assets/js/**/jquery-3.3.1.min.js', './app/assets/js/**/*.js'])
        .pipe($.sourcemaps.init())
        .pipe($.babel({
            presets: ['@babel/env']
        }))
        .pipe($.concat('all.js'))
        .pipe($.if(options.env === 'prod', $.uglify({
            //壓縮
            compress: {
                //刪除console
                drop_console: true
            },
        })))
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest('./public/js'))
        .pipe(browserSync.stream())
);
//壓縮image
gulp.task('image-min', () =>
    gulp.src(['./app/assets/images/*','./app/assets/images/*/**'])
        .pipe($.if(options.env === 'prod', $.image()))
        .pipe(gulp.dest('./public/images'))
);

//Static server
gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "./public"
        }
    });
});
gulp.task('deploy', function () {
    return gulp.src('./public/**/*')
        .pipe($.ghPages());
});

//watch
gulp.task('watch', gulp.parallel('browser-sync', function () {
    gulp.watch('./app/**/*.pug', gulp.series('pug'));
    gulp.watch('./app/assets/style/**/*.scss', gulp.series('sass'));
    gulp.watch('./app/assets/js/*.js', gulp.series('babel'));
    gulp.watch('./app/sw.js', gulp.series('copyPWA'));
}))

gulp.task('bulid', gulp.series($.sequence('clean', 'pug', 'sass', 'babel', 'copyPWA', 'image-min')))
//4.0要加入gulp.series
//default gulp
gulp.task('default', gulp.series('pug', 'sass', 'babel', 'copyPWA','image-min', 'watch'))