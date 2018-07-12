import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

//创建一个任务
gulp.task('css', () => {
    //打开css文件
    return gulp.src('app/**/*.css')
        //拷贝到server/public文件夹
        .pipe(gulp.dest('server/public'))

})