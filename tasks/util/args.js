import yargs from 'yargs';

const args = yargs 
    //区分环境
    .option('production',{
        boolean:true,
        default:false,
        describe:'min all scripts'
    })
    //控制是否监听
    .option('watch',{
        boolean:true,
        default:false,
        describe:'watch all scripts'
    })
    //是否需要输出详细的日志
    .option('verbose',{
        boolean:true,
        default:false,
        describe:'log'
    })
    //是否需要资源映射
    .option('sourcemaps',{
        describe:'force the creation of sroucemaps'
    })
    //设置服务器端口
    .option('port',{
        string:true,
        default:8080,
        describe:'server port'
    })

    .argv  

export default args;