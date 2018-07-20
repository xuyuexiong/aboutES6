//倒计时模块
class Timer {
    /**
     * 
     * @param {string} end [结束时间]
     * @param {string} update [时间更新回调]
     * @param {string} handle [倒计时结束的回调]
     */
    countdown(end, update, handle) {
        //取当前时间
        const now = new Date().getTime();
        const self = this;

        if (now - end > 0) {
            handle.call(self);
        } else {
            //离截止时间的剩余时间
            let last_time = end - now;
            let px_d = 1000 * 60 * 60 * 24;//一天的毫秒
            let px_h = 1000 * 60 * 60;//一小时的毫秒
            let px_m = 1000 * 60;//一分钟的毫秒
            let px_s = 1000;
            //剩余时间包含多少天
            let d = Math.floor(last_time / px_d);
            //剩余时间包含多少小时
            let h = Math.floor((last_time - d * px_d) / px_h);
            //剩余时间包含多少分钟
            let m = Math.floor((last_time - d * px_d - h * px_h) / px_m);
            //剩余时间包含多少秒
            let s = Math.floor((last_time - d * px_d - h * px_h - m * px_m) / px_s);

            let r = [];
            if (d > 0) {
                r.push(`<em>${d}</em>天`);
            }
            if (r.length || h > 0) {
                r.push(`<em>${h}</em>时`);
            }
            if (r.length || m > 0) {
                r.push(`<em>${m}</em>分`);
            }
            if (r.length || s > 0) {
                r.push(`<em>${s}</em>秒`);
            }
            self.last_time = r.join('');
            update.call(self, r.join(''));
            //每秒轮询一次该方法
            setTimeout(function () {
                self.countdown(end, update, handle);
            }, 1000)
        }
    }
}

export default Timer