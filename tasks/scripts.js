import gulp from 'gulp';
import gulpif from 'gulp-if';
import concat from 'gulp-concat';
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';
import named from 'vinyl-named';
import livereload from 'gulp-livereload';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import { log, colors } from 'gulp-util';
import args from './util/args';

//创建一个脚本编译任务
gulp.task('scripts', () => {
    return gulp.src(['app/js/index.js'])
        //改变默认错误处理机制 
        .pipe(plumber({
            errorHandler: function () {

            }
        }))
        //文件重新命名
        .pipe(named())
        //对js文件进行编译
        .pipe(gulpWebpack({
            module: {
                loaders: [{
                    test: /\.js$/,
                    loader: 'babel-loader'
                }]
            }
        }), null, (err, stats) => {
            log(`Finished '${colors.cyan('scripts')}'`, stats.toString({
                chunks: false
            }))
        })
        //文件编译完成后放置位置的设置
        .pipe(gulp.dest('server/public/js'))
        //压缩之后的备份重命名
        .pipe(rename({
            basename: 'cp',
            extname: '.min.js'
        }))
        //压缩的功能
        .pipe(uglify({ compress: { properties: false }, output: { 'quote_keys': true } }))
        //存储位置设置
        .pipe(gulp.dest('server/public/js'))
        //监听文件，变化之后刷新文件
        .pipe(gulpif(args.watch, livereload()))
})