import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server';
import args from './util/args';

//创建一个任务
gulp.task('serve', (cb) => {
    //判断如果不是监听状态下，返回回调函数
    if (!args.watch) return cb();

    //如果是监听状态，创建一个服务器
    var server = liveserver.new(['--harmony', 'server/bin/www']);
    server.start();

    //监听服务器下的所有文件，如果发生改变，自动刷新浏览器
    gulp.watch(['server/public/**/*.js', 'server/views/**/*.ejs'], function (file) {
        //通知服务器，该文件发生改变
        server.notify.apply(server, [file]);
    })

    //监听需要重启服务的文件
    gulp.watch(['server/routes/**/*.js','server/app.js'],function(){
        server.start.bind(server)()
    });
})
