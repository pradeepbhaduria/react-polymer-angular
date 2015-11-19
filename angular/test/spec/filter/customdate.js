/*jslint vars: true, plusplus: true, devel: true, nomen: true*/
/*global define: false, describe: false, module,inject, beforeEach: false, afterEach: false, it: false, expect: false */
describe('Filter: customdate', function () {
    'use strict';
    var $filter,
        currentTime = new Date().getTime(),
        SECOND = 1000,
        MINUTE = 60 * SECOND,
        HOUR = 60 * MINUTE,
        DAY = 24 * HOUR;
    beforeEach(function () {
        module('comment');
        inject(function (_$filter_) {
            $filter = _$filter_;
        });
    });

    it('should change time to 1 min ago', function () {
        expect($filter('customdate')(currentTime)).toEqual('1 minute ago');
    });

    it('should change time to 1 hour ago', function () {
        expect($filter('customdate')(currentTime - 4 * HOUR)).toEqual('1 hour ago');
    });

    it('should change time to 1 day ago', function () {
        expect($filter('customdate')(currentTime - DAY)).toEqual('1 day ago');
    });

    it('should change time to 4 days ago', function () {
        expect($filter('customdate')(currentTime - 6 * DAY)).toEqual('4 days ago');
    });
});
