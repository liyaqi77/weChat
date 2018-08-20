'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserInfo = undefined;

var _config = require('./../common/config.js');

var _httpClient = require('./../utils/httpClient.js');

function api(url) {
  return _config.API_HOST + url;
}
var getUserInfo = exports.getUserInfo = function getUserInfo(uid) {
  return (0, _httpClient.get)(api('/api/user/info/uid/' + uid), 'json');
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJhcGkiLCJ1cmwiLCJBUElfSE9TVCIsImdldFVzZXJJbmZvIiwidWlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0EsU0FBU0EsR0FBVCxDQUFhQyxHQUFiLEVBQWtCO0FBQ2hCLFNBQU9DLG1CQUFXRCxHQUFsQjtBQUNEO0FBQ00sSUFBTUUsb0NBQWMsU0FBZEEsV0FBYyxDQUFDQyxHQUFELEVBQVM7QUFDbEMsU0FBTyxxQkFBSUosNEJBQTBCSSxHQUExQixDQUFKLEVBQXNDLE1BQXRDLENBQVA7QUFDRCxDQUZNIiwiZmlsZSI6ImFwaS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQSV9IT1NUIH0gZnJvbSAnLi4vY29tbW9uL2NvbmZpZydcclxuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnLi4vdXRpbHMvaHR0cENsaWVudCdcclxuZnVuY3Rpb24gYXBpKHVybCkge1xyXG4gIHJldHVybiBBUElfSE9TVCArIHVybFxyXG59XHJcbmV4cG9ydCBjb25zdCBnZXRVc2VySW5mbyA9ICh1aWQpID0+IHtcclxuICByZXR1cm4gZ2V0KGFwaShgL2FwaS91c2VyL2luZm8vdWlkLyR7dWlkfWApLCAnanNvbicpXHJcbn1cclxuIl19