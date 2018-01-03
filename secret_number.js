'use strict';
module.exports = function() {
    let result = Math.floor((Math.random() * 1000000) +1);
    return function () {
        return result;
    }
};
