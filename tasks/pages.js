import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

//创建一个任务
gulp.task('pages',()=>{
    //打开ejs文件
    return gulp.src('app/**/*.ejs')
        //拷贝到server文件夹
        .pipe(gulp.dest('server'))
        //监听是否需要热更新
        .pipe(gulpif(args.watch,livereload()))

})

