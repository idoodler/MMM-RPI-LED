var NodeHelper = require("node_helper"),
    RpiLeds = require('rpi-leds'),
    leds = new RpiLeds(),
    Enums = require("./shared/enums.js");

module.exports = NodeHelper.create({
    socketNotificationReceived: function socketNotificationReceived(notification, payload) {
        if (notification === Enums.NOTIFICATIONS.CONFIG) {
            switch (payload.ledMode) {
                case Enums.LED_MODES.OFF:
                    leds.power.turnOff();
                    leds.status.turnOff();
                    break;
                case Enums.LED_MODES.HEART_BEAT:
                    leds.power.turnOff();
                    leds.status.heartbeat();
                    break;
                default:
                    console.warn("LED Mode " + payload.ledMode + " is not known! 0 = LEDs OFF, 1 = Heart beat");
            }
        }
    }
});