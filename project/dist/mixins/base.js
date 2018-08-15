'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/***
 * 注意：
 * 1. 默认式混合：对于组件data数据，components组件，events事件以及其它自定义方法采用默认式混合，即如果组件未声明该数据，组件，事件，自定义方法等，那么将混合对象中的选项将注入组件这中。对于组件已声明的选项将不受影响。
 * 2. 兼容式混合：对于组件methods响应事件，以及小程序页面事件将采用兼容式混合，即先响应组件本身响应事件，然后再响应混合对象中响应事件。
 */
var BaseMixin = function (_wepy$mixin) {
  _inherits(BaseMixin, _wepy$mixin);

  function BaseMixin() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, BaseMixin);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BaseMixin.__proto__ || Object.getPrototypeOf(BaseMixin)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      userInfo: ''
    }, _this.methods = {
      tap: function tap() {
        console.log('mixin method tap');
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BaseMixin, [{
    key: 'getUserInfo',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var user;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _wepy2.default.getUserInfo();

              case 2:
                user = _context.sent;
                return _context.abrupt('return', user);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getUserInfo() {
        return _ref2.apply(this, arguments);
      }

      return getUserInfo;
    }()
  }]);

  return BaseMixin;
}(_wepy2.default.mixin);

exports.default = BaseMixin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2UuanMiXSwibmFtZXMiOlsiQmFzZU1peGluIiwiZGF0YSIsInVzZXJJbmZvIiwibWV0aG9kcyIsInRhcCIsImNvbnNvbGUiLCJsb2ciLCJ3ZXB5IiwiZ2V0VXNlckluZm8iLCJ1c2VyIiwibWl4aW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7OztBQUNBOzs7OztJQUtxQkEsUzs7Ozs7Ozs7Ozs7Ozs7NExBQ25CQyxJLEdBQU87QUFDTEMsZ0JBQVU7QUFETCxLLFFBR1BDLE8sR0FBVTtBQUNSQyxTQURRLGlCQUNGO0FBQ0pDLGdCQUFRQyxHQUFSLENBQVksa0JBQVo7QUFDRDtBQUhPLEs7Ozs7Ozs7Ozs7Ozs7dUJBTVdDLGVBQUtDLFdBQUwsRTs7O0FBQWJDLG9CO2lEQUNDQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBWDRCRixlQUFLRyxLOztrQkFBdkJWLFMiLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4vKioqXG4gKiDms6jmhI/vvJpcbiAqIDEuIOm7mOiupOW8j+a3t+WQiO+8muWvueS6jue7hOS7tmRhdGHmlbDmja7vvIxjb21wb25lbnRz57uE5Lu277yMZXZlbnRz5LqL5Lu25Lul5Y+K5YW25a6D6Ieq5a6a5LmJ5pa55rOV6YeH55So6buY6K6k5byP5re35ZCI77yM5Y2z5aaC5p6c57uE5Lu25pyq5aOw5piO6K+l5pWw5o2u77yM57uE5Lu277yM5LqL5Lu277yM6Ieq5a6a5LmJ5pa55rOV562J77yM6YKj5LmI5bCG5re35ZCI5a+56LGh5Lit55qE6YCJ6aG55bCG5rOo5YWl57uE5Lu26L+Z5Lit44CC5a+55LqO57uE5Lu25bey5aOw5piO55qE6YCJ6aG55bCG5LiN5Y+X5b2x5ZON44CCXG4gKiAyLiDlhbzlrrnlvI/mt7flkIjvvJrlr7nkuo7nu4Tku7ZtZXRob2Rz5ZON5bqU5LqL5Lu277yM5Lul5Y+K5bCP56iL5bqP6aG16Z2i5LqL5Lu25bCG6YeH55So5YW85a655byP5re35ZCI77yM5Y2z5YWI5ZON5bqU57uE5Lu25pys6Lqr5ZON5bqU5LqL5Lu277yM54S25ZCO5YaN5ZON5bqU5re35ZCI5a+56LGh5Lit5ZON5bqU5LqL5Lu244CCXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VNaXhpbiBleHRlbmRzIHdlcHkubWl4aW4ge1xuICBkYXRhID0ge1xuICAgIHVzZXJJbmZvOiAnJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgdGFwKCkge1xuICAgICAgY29uc29sZS5sb2coJ21peGluIG1ldGhvZCB0YXAnKVxuICAgIH1cbiAgfVxuICBhc3luYyBnZXRVc2VySW5mbygpIHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgd2VweS5nZXRVc2VySW5mbygpXG4gICAgcmV0dXJuIHVzZXJcbiAgfVxufVxuIl19