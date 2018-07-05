import gulp from 'gulp';
import gulpSequence from 'gulp-sequence';

//创建一个任务
gulp.task('build', gulpSequence('clean', 'css', 'pages', 'scripts', ['browser', 'serve']));
