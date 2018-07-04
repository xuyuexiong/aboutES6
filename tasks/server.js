import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server';
import args from './util/args';

//创建一个任务
gulp.task('serve',()=>{
    //打开css文件
    return gulp.src('app/**/*.css')
        //拷贝到server/public文件夹
        .pipe(gulp.dest('server/public'))

})
