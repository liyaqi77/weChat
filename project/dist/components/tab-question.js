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
        var path = e.currentTarget.dataset.id;
        var id = JSON.stringify(path);
        _wepy2.default.navigateTo({
          url: 'quest_detail?id=' + id
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return TabQuestion;
}(_wepy2.default.component);

exports.default = TabQuestion;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYi1xdWVzdGlvbi5qcyJdLCJuYW1lcyI6WyJUYWJRdWVzdGlvbiIsInByb3BzIiwiY29udGVudCIsIkFycmF5IiwibWV0aG9kcyIsImlzc3VlaXRlbXMiLCJlIiwicGF0aCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaWQiLCJKU09OIiwic3RyaW5naWZ5Iiwid2VweSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxXOzs7Ozs7Ozs7Ozs7OztnTUFDbkJDLEssR0FBUTtBQUNOQyxlQUFTQztBQURILEssUUFHUkMsTyxHQUFVO0FBQ1JDLGtCQUFZLG9CQUFVQyxDQUFWLEVBQWE7QUFDdkIsWUFBSUMsT0FBT0QsRUFBRUUsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JDLEVBQW5DO0FBQ0EsWUFBSUEsS0FBS0MsS0FBS0MsU0FBTCxDQUFlTCxJQUFmLENBQVQ7QUFDQU0sdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSyxxQkFBcUJMO0FBRFosU0FBaEI7QUFHRDtBQVBPLEs7Ozs7RUFKNkJHLGVBQUtHLFM7O2tCQUF6QmhCLFciLCJmaWxlIjoidGFiLXF1ZXN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYlF1ZXN0aW9uIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gIHByb3BzID0ge1xyXG4gICAgY29udGVudDogQXJyYXlcclxuICB9XHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIGlzc3VlaXRlbXM6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGxldCBwYXRoID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWRcclxuICAgICAgbGV0IGlkID0gSlNPTi5zdHJpbmdpZnkocGF0aClcclxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6IGBxdWVzdF9kZXRhaWw/aWQ9YCArIGlkXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==