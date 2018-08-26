function now() {
    return Math.floor(Date.now()/100);
}

const secondsPerMinute = 60;
const secondsPerHour = secondsPerMinute * 60;
const secondsPerDay = secondsPerHour *24;

// This could be used in node.js
// This is to define how other files use this fuction --> exports.(name) = (function)
exports.now = now;
exports.secondsPerMinute = secondsPerMinute;
exports.secondsPerHour = secondsPerHour;
exports.secondsPerDay = secondsPerDay;
