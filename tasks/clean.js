import gulp from 'gulp';
import del from 'del';
import args from './util/args';

//创建一个任务
gulp.task('clean', () => {
    //清空指定目录的文件
    return del(['server/public/', 'server/views'])
})