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
      list: ['发起活动', '平台审核', '通知粉丝', '付费报名', '见面'],
      active: ['活动主题', '活动时间', '活动地点', '活动价格', '活动名额']
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/offline_act'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9mZmxpbmVfYWN0LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwicHJvcHMiLCJkYXRhIiwibGlzdCIsImFjdGl2ZSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxLLEdBQU8sRSxRQUNQQyxJLEdBQUs7QUFDSEMsWUFBTSxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLE1BQWpCLEVBQXlCLE1BQXpCLEVBQWlDLElBQWpDLENBREg7QUFFSEMsY0FBUSxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLE1BQWpCLEVBQXlCLE1BQXpCLEVBQWlDLE1BQWpDO0FBRkwsSzs7OztFQUY0QkMsZUFBS0MsSTs7a0JBQW5CTixLIiwiZmlsZSI6Im9mZmxpbmVfYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBwcm9wcz0ge31cclxuICBkYXRhPXtcclxuICAgIGxpc3Q6IFsn5Y+R6LW35rS75YqoJywgJ+W5s+WPsOWuoeaguCcsICfpgJrnn6XnsonkuJ0nLCAn5LuY6LS55oql5ZCNJywgJ+ingemdoiddLFxyXG4gICAgYWN0aXZlOiBbJ+a0u+WKqOS4u+mimCcsICfmtLvliqjml7bpl7QnLCAn5rS75Yqo5Zyw54K5JywgJ+a0u+WKqOS7t+agvCcsICfmtLvliqjlkI3pop0nXVxyXG4gIH1cclxufVxyXG4iXX0=