'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserInfo = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getUserInfo = exports.getUserInfo = function getUserInfo(uid) {
  return _wepy2.default.request({
    url: 'http://localhost:8080/api/getUserInfo',
    method: 'GET'
  }).then(function (res) {
    return res.data;
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJnZXRVc2VySW5mbyIsInVpZCIsIndlcHkiLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwidGhlbiIsInJlcyIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7O0FBQ08sSUFBTUEsb0NBQWMsU0FBZEEsV0FBYyxDQUFDQyxHQUFELEVBQVM7QUFDbEMsU0FBT0MsZUFBS0MsT0FBTCxDQUFhO0FBQ2xCQyxTQUFLLHVDQURhO0FBRWxCQyxZQUFRO0FBRlUsR0FBYixFQUdKQyxJQUhJLENBR0M7QUFBQSxXQUFPQyxJQUFJQyxJQUFYO0FBQUEsR0FIRCxDQUFQO0FBSUQsQ0FMTSIsImZpbGUiOiJhcGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5leHBvcnQgY29uc3QgZ2V0VXNlckluZm8gPSAodWlkKSA9PiB7XHJcbiAgcmV0dXJuIHdlcHkucmVxdWVzdCh7XHJcbiAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL2dldFVzZXJJbmZvJyxcclxuICAgIG1ldGhvZDogJ0dFVCdcclxuICB9KS50aGVuKHJlcyA9PiByZXMuZGF0YSlcclxufVxyXG4iXX0=