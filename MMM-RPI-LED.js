Module.register("MMM-RPI-LED", {
    defaults: {
        ledMode: 0
    },

    start: function start() {
        this.sendSocketNotification(Enums.NOTIFICATIONS.CONFIG, this.config);
    },

    getScripts: function getScripts() {
        return [
            this.file('shared/enums.js')
        ]
    }
});