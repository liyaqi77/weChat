'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mine = function (_wepy$component) {
  _inherits(Mine, _wepy$component);

  function Mine() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Mine);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Mine.__proto__ || Object.getPrototypeOf(Mine)).call.apply(_ref, [this].concat(args))), _this), _this.props = {}, _this.methods = {
      bindFormSubmit: function bindFormSubmit(e) {
        console.log(e.detail.value.textarea);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Mine;
}(_wepy2.default.component);

exports.default = Mine;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmUuanMiXSwibmFtZXMiOlsiTWluZSIsInByb3BzIiwibWV0aG9kcyIsImJpbmRGb3JtU3VibWl0IiwiZSIsImNvbnNvbGUiLCJsb2ciLCJkZXRhaWwiLCJ2YWx1ZSIsInRleHRhcmVhIiwid2VweSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsSyxHQUFRLEUsUUFDUkMsTyxHQUFVO0FBQ1JDLHNCQUFnQix3QkFBU0MsQ0FBVCxFQUFZO0FBQzFCQyxnQkFBUUMsR0FBUixDQUFZRixFQUFFRyxNQUFGLENBQVNDLEtBQVQsQ0FBZUMsUUFBM0I7QUFDRDtBQUhPLEs7Ozs7RUFGc0JDLGVBQUtDLFM7O2tCQUFsQlgsSSIsImZpbGUiOiJtaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1pbmUgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcbiAgcHJvcHMgPSB7fVxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBiaW5kRm9ybVN1Ym1pdDogZnVuY3Rpb24oZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlLmRldGFpbC52YWx1ZS50ZXh0YXJlYSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19