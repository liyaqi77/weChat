'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.props = {}, _this.data = {
      arr: ['手机', '平板', '电磁炉', '电视', '开始', '洗衣机', '电脑', '冰箱', '衣柜'],
      timer: null,
      n: 0
    }, _this.methods = {
      btn: function btn(e) {
        this.n = Math.floor(Math.random() * this.arr.length);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/mine'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmUuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9wcyIsImRhdGEiLCJhcnIiLCJ0aW1lciIsIm4iLCJtZXRob2RzIiwiYnRuIiwiZSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxLLEdBQU8sRSxRQUNQQyxJLEdBQUs7QUFDSEMsV0FBSyxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsS0FBYixFQUFvQixJQUFwQixFQUEwQixJQUExQixFQUFnQyxLQUFoQyxFQUF1QyxJQUF2QyxFQUE2QyxJQUE3QyxFQUFtRCxJQUFuRCxDQURGO0FBRUhDLGFBQU8sSUFGSjtBQUdIQyxTQUFHO0FBSEEsSyxRQUtMQyxPLEdBQVU7QUFDUkMsU0FEUSxlQUNKQyxDQURJLEVBQ0Q7QUFDTCxhQUFLSCxDQUFMLEdBQVNJLEtBQUtDLEtBQUwsQ0FBV0QsS0FBS0UsTUFBTCxLQUFnQixLQUFLUixHQUFMLENBQVNTLE1BQXBDLENBQVQ7QUFDRDtBQUhPLEs7Ozs7RUFQdUJDLGVBQUtDLEk7O2tCQUFuQmQsSyIsImZpbGUiOiJtaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBwcm9wcz0ge31cclxuICBkYXRhPXtcclxuICAgIGFycjogWyfmiYvmnLonLCAn5bmz5p2/JywgJ+eUteejgeeCiScsICfnlLXop4YnLCAn5byA5aeLJywgJ+a0l+iho+acuicsICfnlLXohJEnLCAn5Yaw566xJywgJ+iho+afnCddLFxyXG4gICAgdGltZXI6IG51bGwsXHJcbiAgICBuOiAwXHJcbiAgfVxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBidG4oZSkge1xyXG4gICAgICB0aGlzLm4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmFyci5sZW5ndGgpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==