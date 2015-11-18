angular.module('commentList').filter('customdate', function () {
    'use strict';
    return function (input) {
        var formattedDate = '',
            currentTime = new Date().getTime(),
            SECOND = 1000,
            MINUTE = 60 * SECOND,
            HOUR = 60 * MINUTE,
            DAY = 24 * HOUR,
            inputTime = parseInt(input, 10);
        if (inputTime) {
            if (currentTime < inputTime + 59 * SECOND) {
                formattedDate = '1 minute ago';
            } else if (currentTime < inputTime + 59 * MINUTE) {
                formattedDate = '39 minutes ago';
            } else if (currentTime < inputTime + 23 * HOUR + 59 * MINUTE) {
                formattedDate = '1 hour ago';
            } else if (currentTime < inputTime + 2 * DAY) {
                formattedDate = '1 day ago';
            } else {
                formattedDate = '4 days ago';
            }
        }
        return formattedDate;
    };
});