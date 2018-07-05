import gulp from 'gulp';
import gulpif from 'gulp-if';
import gutil from 'gulp-util';
import args from './util/args';

//创建一个任务
gulp.task('browser', (cb) => {
    //判断如果不是监听状态下，返回回调函数
    if (!args.watch) return cb();

    //监听app目录下的所有js文件，发生变化启动scripts构建脚本
    gulp.watch('app/**/*.js', ['scripts'])
    //监听app目录下的所有ejs文件，发生变化启动scripts构建脚本
    gulp.watch('app/**/*.ejs', ['pages'])
    //监听app目录下的所有css文件，发生变化启动scripts构建脚本
    gulp.watch('app/**/*.css', ['css'])
})