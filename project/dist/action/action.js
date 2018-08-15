'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserInfo = undefined;

var _api = require('./../api/api.js');

var api = _interopRequireWildcard(_api);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var getUserInfo = exports.getUserInfo = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(uid) {
    var result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return api.getUserInfo(uid);

          case 2:
            result = _context.sent;
            return _context.abrupt('return', result);

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function getUserInfo(_x) {
    return _ref.apply(this, arguments);
  };
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbi5qcyJdLCJuYW1lcyI6WyJhcGkiLCJnZXRVc2VySW5mbyIsInVpZCIsInJlc3VsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztJQUFZQSxHOzs7Ozs7QUFDTCxJQUFNQztBQUFBLHFFQUFjLGlCQUFNQyxHQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ0pGLElBQUlDLFdBQUosQ0FBZ0JDLEdBQWhCLENBREk7O0FBQUE7QUFDbkJDLGtCQURtQjtBQUFBLDZDQUVsQkEsTUFGa0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBZDs7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFOIiwiZmlsZSI6ImFjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFwaSBmcm9tICcuLi9hcGkvYXBpJ1xyXG5leHBvcnQgY29uc3QgZ2V0VXNlckluZm8gPSBhc3luYyh1aWQpID0+IHtcclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBhcGkuZ2V0VXNlckluZm8odWlkKVxyXG4gIHJldHVybiByZXN1bHRcclxufVxyXG4iXX0=