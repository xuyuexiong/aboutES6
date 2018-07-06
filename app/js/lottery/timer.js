class Timer {
    countdown(end, update, handle) {
        const now = new Date().getTime();
        const self = this;
        if (now - end > 0) {
            handle.call(self);
        } else {
            let last_time = end - now;
        }
    }
}