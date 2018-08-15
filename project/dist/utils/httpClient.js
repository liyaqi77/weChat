'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = get;
exports.post = post;
exports.put = put;
exports.del = del;
exports.parseResponse = parseResponse;

var _axios = require('./axios.js');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = true;

/***
 * GET 请求
 * @param url
 * @param responseType : 'json', 'text', 'file'
 * @param headers
 */
function get(url, responseType, headers) {
  if (!responseType) {
    responseType = 'json';
  }
  return (0, _axios2.default)({
    method: 'get',
    url: url,
    responseType: responseType,
    headers: headers
  }).then(parseResponse).catch(function (error) {
    if (debug) {
      console.log(error);
    }
  });
}

/***
 * POST 请求
 * @param url
 * @param data
 * @param responseType : 'json', 'text', 'file'
 * @param headers
 */
function post(url, data, responseType, headers) {
  if (!responseType) {
    responseType = 'json';
  }
  return (0, _axios2.default)({
    method: 'post',
    url: url,
    data: data,
    responseType: responseType,
    headers: headers
  }).then(parseResponse).catch(function (error) {
    if (debug) {
      console.log(error);
    }
  });
}

/***
 * PUT 请求
 * @param url
 * @param data
 * @param responseType : 'json', 'text', 'file'
 * @param headers
 */
function put(url, data, responseType, headers) {
  if (!responseType) {
    responseType = 'json';
  }
  return (0, _axios2.default)({
    method: 'post',
    url: url,
    data: data,
    responseType: responseType,
    headers: headers
  }).then(parseResponse).catch(function (error) {
    if (debug) {
      console.log(error);
    }
  });
}

/***
 * DELETE 请求
 * @param url
 * @param data
 * @param responseType : 'json', 'text', 'file'
 * @param headers
 */
function del(url, responseType, headers) {
  if (!responseType) {
    responseType = 'json';
  }
  return (0, _axios2.default)({
    method: 'delete',
    url: url,
    responseType: responseType,
    headers: headers
  }).then(parseResponse).catch(function (error) {
    if (debug) {
      console.log(error);
    }
  });
}

/**
 * 返回json数据
 * @param response
 * @returns {*}
 */
function parseResponse(response) {
  // 检查状态
  if (response.status >= 200 && response.status < 400) {
    return response.data;
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0dHBDbGllbnQuanMiXSwibmFtZXMiOlsiZ2V0IiwicG9zdCIsInB1dCIsImRlbCIsInBhcnNlUmVzcG9uc2UiLCJkZWJ1ZyIsInVybCIsInJlc3BvbnNlVHlwZSIsImhlYWRlcnMiLCJtZXRob2QiLCJ0aGVuIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwicmVzcG9uc2UiLCJzdGF0dXMiXSwibWFwcGluZ3MiOiI7Ozs7O1FBVWdCQSxHLEdBQUFBLEc7UUF1QkFDLEksR0FBQUEsSTtRQXdCQUMsRyxHQUFBQSxHO1FBd0JBQyxHLEdBQUFBLEc7UUFxQkFDLGEsR0FBQUEsYTs7QUF0R2hCOzs7Ozs7QUFFQSxJQUFJQyxRQUFRLElBQVo7O0FBRUE7Ozs7OztBQU1PLFNBQVNMLEdBQVQsQ0FBY00sR0FBZCxFQUFtQkMsWUFBbkIsRUFBaUNDLE9BQWpDLEVBQTBDO0FBQy9DLE1BQUksQ0FBQ0QsWUFBTCxFQUFtQjtBQUNqQkEsbUJBQWUsTUFBZjtBQUNEO0FBQ0QsU0FBTyxxQkFBTTtBQUNYRSxZQUFRLEtBREc7QUFFWEgsU0FBS0EsR0FGTTtBQUdYQyxrQkFBY0EsWUFISDtBQUlYQyxhQUFTQTtBQUpFLEdBQU4sRUFLSkUsSUFMSSxDQUtDTixhQUxELEVBS2dCTyxLQUxoQixDQUtzQixVQUFVQyxLQUFWLEVBQWlCO0FBQzVDLFFBQUlQLEtBQUosRUFBVztBQUNUUSxjQUFRQyxHQUFSLENBQVlGLEtBQVo7QUFDRDtBQUNGLEdBVE0sQ0FBUDtBQVVEOztBQUVEOzs7Ozs7O0FBT08sU0FBU1gsSUFBVCxDQUFlSyxHQUFmLEVBQW9CUyxJQUFwQixFQUEwQlIsWUFBMUIsRUFBd0NDLE9BQXhDLEVBQWlEO0FBQ3RELE1BQUksQ0FBQ0QsWUFBTCxFQUFtQjtBQUNqQkEsbUJBQWUsTUFBZjtBQUNEO0FBQ0QsU0FBTyxxQkFBTTtBQUNYRSxZQUFRLE1BREc7QUFFWEgsU0FBS0EsR0FGTTtBQUdYUyxVQUFNQSxJQUhLO0FBSVhSLGtCQUFjQSxZQUpIO0FBS1hDLGFBQVNBO0FBTEUsR0FBTixFQU1KRSxJQU5JLENBTUNOLGFBTkQsRUFNZ0JPLEtBTmhCLENBTXNCLFVBQVVDLEtBQVYsRUFBaUI7QUFDNUMsUUFBSVAsS0FBSixFQUFXO0FBQ1RRLGNBQVFDLEdBQVIsQ0FBWUYsS0FBWjtBQUNEO0FBQ0YsR0FWTSxDQUFQO0FBV0Q7O0FBRUQ7Ozs7Ozs7QUFPTyxTQUFTVixHQUFULENBQWNJLEdBQWQsRUFBbUJTLElBQW5CLEVBQXlCUixZQUF6QixFQUF1Q0MsT0FBdkMsRUFBZ0Q7QUFDckQsTUFBSSxDQUFDRCxZQUFMLEVBQW1CO0FBQ2pCQSxtQkFBZSxNQUFmO0FBQ0Q7QUFDRCxTQUFPLHFCQUFNO0FBQ1hFLFlBQVEsTUFERztBQUVYSCxTQUFLQSxHQUZNO0FBR1hTLFVBQU1BLElBSEs7QUFJWFIsa0JBQWNBLFlBSkg7QUFLWEMsYUFBU0E7QUFMRSxHQUFOLEVBTUpFLElBTkksQ0FNQ04sYUFORCxFQU1nQk8sS0FOaEIsQ0FNc0IsVUFBVUMsS0FBVixFQUFpQjtBQUM1QyxRQUFJUCxLQUFKLEVBQVc7QUFDVFEsY0FBUUMsR0FBUixDQUFZRixLQUFaO0FBQ0Q7QUFDRixHQVZNLENBQVA7QUFXRDs7QUFFRDs7Ozs7OztBQU9PLFNBQVNULEdBQVQsQ0FBY0csR0FBZCxFQUFtQkMsWUFBbkIsRUFBaUNDLE9BQWpDLEVBQTBDO0FBQy9DLE1BQUksQ0FBQ0QsWUFBTCxFQUFtQjtBQUNqQkEsbUJBQWUsTUFBZjtBQUNEO0FBQ0QsU0FBTyxxQkFBTTtBQUNYRSxZQUFRLFFBREc7QUFFWEgsU0FBS0EsR0FGTTtBQUdYQyxrQkFBY0EsWUFISDtBQUlYQyxhQUFTQTtBQUpFLEdBQU4sRUFLSkUsSUFMSSxDQUtDTixhQUxELEVBS2dCTyxLQUxoQixDQUtzQixVQUFVQyxLQUFWLEVBQWlCO0FBQzVDLFFBQUlQLEtBQUosRUFBVztBQUNUUSxjQUFRQyxHQUFSLENBQVlGLEtBQVo7QUFDRDtBQUNGLEdBVE0sQ0FBUDtBQVVEOztBQUVEOzs7OztBQUtPLFNBQVNSLGFBQVQsQ0FBd0JZLFFBQXhCLEVBQWtDO0FBQ3ZDO0FBQ0EsTUFBSUEsU0FBU0MsTUFBVCxJQUFtQixHQUFuQixJQUEwQkQsU0FBU0MsTUFBVCxHQUFrQixHQUFoRCxFQUFxRDtBQUNuRCxXQUFPRCxTQUFTRCxJQUFoQjtBQUNEO0FBQ0YiLCJmaWxlIjoiaHR0cENsaWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICcuL2F4aW9zJ1xuXG52YXIgZGVidWcgPSB0cnVlXG5cbi8qKipcbiAqIEdFVCDor7fmsYJcbiAqIEBwYXJhbSB1cmxcbiAqIEBwYXJhbSByZXNwb25zZVR5cGUgOiAnanNvbicsICd0ZXh0JywgJ2ZpbGUnXG4gKiBAcGFyYW0gaGVhZGVyc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0ICh1cmwsIHJlc3BvbnNlVHlwZSwgaGVhZGVycykge1xuICBpZiAoIXJlc3BvbnNlVHlwZSkge1xuICAgIHJlc3BvbnNlVHlwZSA9ICdqc29uJ1xuICB9XG4gIHJldHVybiBheGlvcyh7XG4gICAgbWV0aG9kOiAnZ2V0JyxcbiAgICB1cmw6IHVybCxcbiAgICByZXNwb25zZVR5cGU6IHJlc3BvbnNlVHlwZSxcbiAgICBoZWFkZXJzOiBoZWFkZXJzXG4gIH0pLnRoZW4ocGFyc2VSZXNwb25zZSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgaWYgKGRlYnVnKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG4gIH0pXG59XG5cbi8qKipcbiAqIFBPU1Qg6K+35rGCXG4gKiBAcGFyYW0gdXJsXG4gKiBAcGFyYW0gZGF0YVxuICogQHBhcmFtIHJlc3BvbnNlVHlwZSA6ICdqc29uJywgJ3RleHQnLCAnZmlsZSdcbiAqIEBwYXJhbSBoZWFkZXJzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwb3N0ICh1cmwsIGRhdGEsIHJlc3BvbnNlVHlwZSwgaGVhZGVycykge1xuICBpZiAoIXJlc3BvbnNlVHlwZSkge1xuICAgIHJlc3BvbnNlVHlwZSA9ICdqc29uJ1xuICB9XG4gIHJldHVybiBheGlvcyh7XG4gICAgbWV0aG9kOiAncG9zdCcsXG4gICAgdXJsOiB1cmwsXG4gICAgZGF0YTogZGF0YSxcbiAgICByZXNwb25zZVR5cGU6IHJlc3BvbnNlVHlwZSxcbiAgICBoZWFkZXJzOiBoZWFkZXJzXG4gIH0pLnRoZW4ocGFyc2VSZXNwb25zZSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgaWYgKGRlYnVnKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG4gIH0pXG59XG5cbi8qKipcbiAqIFBVVCDor7fmsYJcbiAqIEBwYXJhbSB1cmxcbiAqIEBwYXJhbSBkYXRhXG4gKiBAcGFyYW0gcmVzcG9uc2VUeXBlIDogJ2pzb24nLCAndGV4dCcsICdmaWxlJ1xuICogQHBhcmFtIGhlYWRlcnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHB1dCAodXJsLCBkYXRhLCByZXNwb25zZVR5cGUsIGhlYWRlcnMpIHtcbiAgaWYgKCFyZXNwb25zZVR5cGUpIHtcbiAgICByZXNwb25zZVR5cGUgPSAnanNvbidcbiAgfVxuICByZXR1cm4gYXhpb3Moe1xuICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgIHVybDogdXJsLFxuICAgIGRhdGE6IGRhdGEsXG4gICAgcmVzcG9uc2VUeXBlOiByZXNwb25zZVR5cGUsXG4gICAgaGVhZGVyczogaGVhZGVyc1xuICB9KS50aGVuKHBhcnNlUmVzcG9uc2UpLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgIGlmIChkZWJ1Zykge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfVxuICB9KVxufVxuXG4vKioqXG4gKiBERUxFVEUg6K+35rGCXG4gKiBAcGFyYW0gdXJsXG4gKiBAcGFyYW0gZGF0YVxuICogQHBhcmFtIHJlc3BvbnNlVHlwZSA6ICdqc29uJywgJ3RleHQnLCAnZmlsZSdcbiAqIEBwYXJhbSBoZWFkZXJzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWwgKHVybCwgcmVzcG9uc2VUeXBlLCBoZWFkZXJzKSB7XG4gIGlmICghcmVzcG9uc2VUeXBlKSB7XG4gICAgcmVzcG9uc2VUeXBlID0gJ2pzb24nXG4gIH1cbiAgcmV0dXJuIGF4aW9zKHtcbiAgICBtZXRob2Q6ICdkZWxldGUnLFxuICAgIHVybDogdXJsLFxuICAgIHJlc3BvbnNlVHlwZTogcmVzcG9uc2VUeXBlLFxuICAgIGhlYWRlcnM6IGhlYWRlcnNcbiAgfSkudGhlbihwYXJzZVJlc3BvbnNlKS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICBpZiAoZGVidWcpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgIH1cbiAgfSlcbn1cblxuLyoqXG4gKiDov5Tlm55qc29u5pWw5o2uXG4gKiBAcGFyYW0gcmVzcG9uc2VcbiAqIEByZXR1cm5zIHsqfVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZXNwb25zZSAocmVzcG9uc2UpIHtcbiAgLy8g5qOA5p+l54q25oCBXG4gIGlmIChyZXNwb25zZS5zdGF0dXMgPj0gMjAwICYmIHJlc3BvbnNlLnN0YXR1cyA8IDQwMCkge1xuICAgIHJldHVybiByZXNwb25zZS5kYXRhXG4gIH1cbn1cbiJdfQ==