'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserInfo = undefined;

var _config = require('./../common/config.js');

var _httpClient = require('./../utils/httpClient.js');

// import wepy from 'wepy'
function api(url) {
  return _config.API_HOST + url;
}
var getUserInfo = exports.getUserInfo = function getUserInfo(uid) {
  return (0, _httpClient.get)(api('/api/user/info'), 'json');
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJhcGkiLCJ1cmwiLCJBUElfSE9TVCIsImdldFVzZXJJbmZvIiwidWlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBQ0E7O0FBRkE7QUFHQSxTQUFTQSxHQUFULENBQWFDLEdBQWIsRUFBa0I7QUFDaEIsU0FBT0MsbUJBQVdELEdBQWxCO0FBQ0Q7QUFDTSxJQUFNRSxvQ0FBYyxTQUFkQSxXQUFjLENBQUNDLEdBQUQsRUFBUztBQUNsQyxTQUFPLHFCQUFJSixJQUFJLGdCQUFKLENBQUosRUFBMkIsTUFBM0IsQ0FBUDtBQUNELENBRk0iLCJmaWxlIjoiYXBpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IHsgQVBJX0hPU1QgfSBmcm9tICcuLi9jb21tb24vY29uZmlnJ1xyXG5pbXBvcnQgeyBnZXQgfSBmcm9tICcuLi91dGlscy9odHRwQ2xpZW50J1xyXG5mdW5jdGlvbiBhcGkodXJsKSB7XHJcbiAgcmV0dXJuIEFQSV9IT1NUICsgdXJsXHJcbn1cclxuZXhwb3J0IGNvbnN0IGdldFVzZXJJbmZvID0gKHVpZCkgPT4ge1xyXG4gIHJldHVybiBnZXQoYXBpKCcvYXBpL3VzZXIvaW5mbycpLCAnanNvbicpXHJcbn1cclxuIl19