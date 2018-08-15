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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.data = {
      user: {
        username: 'Johnny',
        bean: 100,
        attention: 100,
        income: 1000,
        image: '../images/pic.jpg',
        loactionOne: '北京市、朝阳区、望京',
        loactionTwo: '阿里巴巴北京电商事业部、前端负责人',
        loactionThree: '精通多套前端框架、熟悉后端技术、从业经验14年、参与过多个大型互联网项目'

      } }, _this.methods = {
      jump: function jump(path) {
        _wepy2.default.navigateTo({
          url: path + '?title=' + path
        });
      },
      applyfor: function applyfor(path) {
        _wepy2.default.navigateTo({
          url: '/pages/apply?path=' + path
        });
      },
      editClick: function editClick() {
        _wepy2.default.navigateTo({
          url: '/pages/compile'
        });
      },
      incomeClick: function incomeClick() {
        _wepy2.default.navigateTo({
          url: '/pages/income'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwiZGF0YSIsInVzZXIiLCJ1c2VybmFtZSIsImJlYW4iLCJhdHRlbnRpb24iLCJpbmNvbWUiLCJpbWFnZSIsImxvYWN0aW9uT25lIiwibG9hY3Rpb25Ud28iLCJsb2FjdGlvblRocmVlIiwibWV0aG9kcyIsImp1bXAiLCJwYXRoIiwid2VweSIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJhcHBseWZvciIsImVkaXRDbGljayIsImluY29tZUNsaWNrIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTLEUsUUFDVEMsSSxHQUFPO0FBQ0xDLFlBQU07QUFDSkMsa0JBQVUsUUFETjtBQUVKQyxjQUFNLEdBRkY7QUFHSkMsbUJBQVcsR0FIUDtBQUlKQyxnQkFBUSxJQUpKO0FBS0pDLGVBQU8sbUJBTEg7QUFNSkMscUJBQWEsWUFOVDtBQU9KQyxxQkFBYSxtQkFQVDtBQVFKQyx1QkFBZTs7QUFSWCxPQURELEUsUUFZUEMsTyxHQUFVO0FBQ1JDLFlBQU0sY0FBU0MsSUFBVCxFQUFlO0FBQ25CQyx1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFRSCxJQUFILGVBQW1CQTtBQURWLFNBQWhCO0FBR0QsT0FMTztBQU1SSSxnQkFBVSxrQkFBU0osSUFBVCxFQUFlO0FBQ3ZCQyx1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLLHVCQUF1Qkg7QUFEZCxTQUFoQjtBQUdELE9BVk87QUFXUkssaUJBQVcscUJBQVc7QUFDcEJKLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BZk87QUFnQlJHLG1CQUFhLHVCQUFXO0FBQ3RCTCx1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRDtBQXBCTyxLOzs7O0VBZHVCRixlQUFLTSxJOztrQkFBbkJyQixLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7fVxuICBkYXRhID0ge1xuICAgIHVzZXI6IHtcbiAgICAgIHVzZXJuYW1lOiAnSm9obm55JyxcbiAgICAgIGJlYW46IDEwMCxcbiAgICAgIGF0dGVudGlvbjogMTAwLFxuICAgICAgaW5jb21lOiAxMDAwLFxuICAgICAgaW1hZ2U6ICcuLi9pbWFnZXMvcGljLmpwZycsXG4gICAgICBsb2FjdGlvbk9uZTogJ+WMl+S6rOW4guOAgeacnemYs+WMuuOAgeacm+S6rCcsXG4gICAgICBsb2FjdGlvblR3bzogJ+mYv+mHjOW3tOW3tOWMl+S6rOeUteWVhuS6i+S4mumDqOOAgeWJjeerr+i0n+i0o+S6uicsXG4gICAgICBsb2FjdGlvblRocmVlOiAn57K+6YCa5aSa5aWX5YmN56uv5qGG5p6244CB54af5oKJ5ZCO56uv5oqA5pyv44CB5LuO5Lia57uP6aqMMTTlubTjgIHlj4LkuI7ov4flpJrkuKrlpKflnovkupLogZTnvZHpobnnm64nXG5cbiAgICB9fVxuICBtZXRob2RzID0ge1xuICAgIGp1bXA6IGZ1bmN0aW9uKHBhdGgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYCR7cGF0aH0/dGl0bGU9YCArIHBhdGhcbiAgICAgIH0pXG4gICAgfSxcbiAgICBhcHBseWZvcjogZnVuY3Rpb24ocGF0aCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgL3BhZ2VzL2FwcGx5P3BhdGg9YCArIHBhdGhcbiAgICAgIH0pXG4gICAgfSxcbiAgICBlZGl0Q2xpY2s6IGZ1bmN0aW9uKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnL3BhZ2VzL2NvbXBpbGUnXG4gICAgICB9KVxuICAgIH0sXG4gICAgaW5jb21lQ2xpY2s6IGZ1bmN0aW9uKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnL3BhZ2VzL2luY29tZSdcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG4iXX0=