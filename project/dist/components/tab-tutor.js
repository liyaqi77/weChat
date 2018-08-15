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

var TabQuestion = function (_wepy$component) {
  _inherits(TabQuestion, _wepy$component);

  function TabQuestion() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TabQuestion);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TabQuestion.__proto__ || Object.getPrototypeOf(TabQuestion)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      content: Array
    }, _this.methods = {
      issueitems: function issueitems(e) {
        var id = e.currentTarget.dataset.id;
        _wepy2.default.navigateTo({
          url: 'quest_detail?id=' + id
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return TabQuestion;
}(_wepy2.default.component);

exports.default = TabQuestion;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYi10dXRvci5qcyJdLCJuYW1lcyI6WyJUYWJRdWVzdGlvbiIsInByb3BzIiwiY29udGVudCIsIkFycmF5IiwibWV0aG9kcyIsImlzc3VlaXRlbXMiLCJlIiwiaWQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIndlcHkiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsVzs7Ozs7Ozs7Ozs7Ozs7Z01BQ25CQyxLLEdBQVE7QUFDTkMsZUFBU0M7QUFESCxLLFFBR1JDLE8sR0FBVTtBQUNSQyxrQkFBWSxvQkFBVUMsQ0FBVixFQUFhO0FBQ3ZCLFlBQUlDLEtBQUtELEVBQUVFLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCRixFQUFqQztBQUNBRyx1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLLHFCQUFxQkw7QUFEWixTQUFoQjtBQUdEO0FBTk8sSzs7OztFQUo2QkcsZUFBS0csUzs7a0JBQXpCYixXIiwiZmlsZSI6InRhYi10dXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJRdWVzdGlvbiBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICBwcm9wcyA9IHtcclxuICAgIGNvbnRlbnQ6IEFycmF5XHJcbiAgfVxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBpc3N1ZWl0ZW1zOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBsZXQgaWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZFxyXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDogYHF1ZXN0X2RldGFpbD9pZD1gICsgaWRcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19