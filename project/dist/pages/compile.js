'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _action = require('./../action/action.js');

var _module = require('./../common/module.js');

var _base = require('./../mixins/base.js');

var _base2 = _interopRequireDefault(_base);

var _ota = require('./../utils/ota.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Compile = function (_wepy$page) {
  _inherits(Compile, _wepy$page);

  function Compile() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Compile);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Compile.__proto__ || Object.getPrototypeOf(Compile)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '编辑资料'
    }, _this.mixins = [_base2.default], _this.data = {
      editTmp: _module.edit,
      editresult: {},
      wxUserInfo: null,
      user: '',
      pic: '',
      array: [],
      interest: ['前端js', 'vue', 'react', 'jquery'],
      index: 0,
      ind: 0,
      hobby: '前端JS',
      selecYear: '1年',
      list: [{
        text: '名字',
        isHpic: false,
        titbar: 'Johnny'
      }, {
        text: '头像',
        titbar: '',
        img: '../images/pic.jpg',
        isHpic: true
      }, {
        text: '职位',
        isHpic: false,
        titbar: '阿里巴巴北京电商'
      }, {
        text: '位置',
        isHpic: false,
        titbar: '北京市、朝阳区'
      }]
    }, _this.methods = {
      bindPickerChange: function bindPickerChange(e) {
        this.index = e.detail.value;
        this.selecYear = this.array[this.index];
      },
      bindPicker: function bindPicker(e) {
        this.ind = e.detail.value;
        this.hobby = this.interest[this.ind];
      },
      bindDateChange: function bindDateChange(e) {
        this.setData({
          date: e.detail.value
        });
      },
      bindTimeChange: function bindTimeChange(e) {
        this.setData({
          time: e.detail.value
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Compile, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(option) {
        var json, user;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _action.getUserInfo)(123456789);

              case 2:
                json = _context.sent;

                if (!(json.img === '')) {
                  _context.next = 8;
                  break;
                }

                _context.next = 6;
                return this.getUserInfo();

              case 6:
                user = _context.sent;
                // 请求微信获取的跟人信息
                json.img = user.userInfo.avatarUrl;

              case 8:
                this.array = (0, _ota.toArray)(10);
                this.hobby = Object.values(json.tags);
                this.interest.push(this.hobby);
                this.selecYear = json.seniority + '年';
                this.editresult = (0, _ota.deleteObjKeys)(json, _module.edit);
                this.$apply();

              case 14:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad(_x) {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return Compile;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Compile , 'pages/compile'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBpbGUuanMiXSwibmFtZXMiOlsiQ29tcGlsZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJtaXhpbnMiLCJiYXNlTWl4aW4iLCJkYXRhIiwiZWRpdFRtcCIsImVkaXQiLCJlZGl0cmVzdWx0Iiwid3hVc2VySW5mbyIsInVzZXIiLCJwaWMiLCJhcnJheSIsImludGVyZXN0IiwiaW5kZXgiLCJpbmQiLCJob2JieSIsInNlbGVjWWVhciIsImxpc3QiLCJ0ZXh0IiwiaXNIcGljIiwidGl0YmFyIiwiaW1nIiwibWV0aG9kcyIsImJpbmRQaWNrZXJDaGFuZ2UiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJiaW5kUGlja2VyIiwiYmluZERhdGVDaGFuZ2UiLCJzZXREYXRhIiwiZGF0ZSIsImJpbmRUaW1lQ2hhbmdlIiwidGltZSIsIm9wdGlvbiIsImpzb24iLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwiYXZhdGFyVXJsIiwiT2JqZWN0IiwidmFsdWVzIiwidGFncyIsInB1c2giLCJzZW5pb3JpdHkiLCIkYXBwbHkiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLE87Ozs7Ozs7Ozs7Ozs7O3dMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLE0sR0FBUSxDQUFDQyxjQUFELEMsUUFjUkMsSSxHQUFPO0FBQ0xDLGVBQVNDLFlBREo7QUFFTEMsa0JBQVksRUFGUDtBQUdMQyxrQkFBWSxJQUhQO0FBSUxDLFlBQU0sRUFKRDtBQUtMQyxXQUFLLEVBTEE7QUFNTEMsYUFBTyxFQU5GO0FBT0xDLGdCQUFVLENBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZ0IsT0FBaEIsRUFBeUIsUUFBekIsQ0FQTDtBQVFMQyxhQUFPLENBUkY7QUFTTEMsV0FBSyxDQVRBO0FBVUxDLGFBQU8sTUFWRjtBQVdMQyxpQkFBVyxJQVhOO0FBWUxDLFlBQU0sQ0FDSjtBQUNFQyxjQUFNLElBRFI7QUFFRUMsZ0JBQVEsS0FGVjtBQUdFQyxnQkFBUTtBQUhWLE9BREksRUFNSjtBQUNFRixjQUFNLElBRFI7QUFFRUUsZ0JBQVEsRUFGVjtBQUdFQyxhQUFLLG1CQUhQO0FBSUVGLGdCQUFRO0FBSlYsT0FOSSxFQVlKO0FBQ0VELGNBQU0sSUFEUjtBQUVFQyxnQkFBUSxLQUZWO0FBR0VDLGdCQUFRO0FBSFYsT0FaSSxFQWlCSjtBQUNFRixjQUFNLElBRFI7QUFFRUMsZ0JBQVEsS0FGVjtBQUdFQyxnQkFBUTtBQUhWLE9BakJJO0FBWkQsSyxRQW9DUEUsTyxHQUFVO0FBQ1JDLHdCQUFrQiwwQkFBU0MsQ0FBVCxFQUFZO0FBQzVCLGFBQUtYLEtBQUwsR0FBYVcsRUFBRUMsTUFBRixDQUFTQyxLQUF0QjtBQUNBLGFBQUtWLFNBQUwsR0FBaUIsS0FBS0wsS0FBTCxDQUFXLEtBQUtFLEtBQWhCLENBQWpCO0FBQ0QsT0FKTztBQUtSYyxrQkFBWSxvQkFBU0gsQ0FBVCxFQUFZO0FBQ3RCLGFBQUtWLEdBQUwsR0FBV1UsRUFBRUMsTUFBRixDQUFTQyxLQUFwQjtBQUNBLGFBQUtYLEtBQUwsR0FBYSxLQUFLSCxRQUFMLENBQWMsS0FBS0UsR0FBbkIsQ0FBYjtBQUNELE9BUk87QUFTUmMsc0JBQWdCLHdCQUFTSixDQUFULEVBQVk7QUFDMUIsYUFBS0ssT0FBTCxDQUFhO0FBQ1hDLGdCQUFNTixFQUFFQyxNQUFGLENBQVNDO0FBREosU0FBYjtBQUdELE9BYk87QUFjUkssc0JBQWdCLHdCQUFTUCxDQUFULEVBQVk7QUFDMUIsYUFBS0ssT0FBTCxDQUFhO0FBQ1hHLGdCQUFNUixFQUFFQyxNQUFGLENBQVNDO0FBREosU0FBYjtBQUdEO0FBbEJPLEs7Ozs7OzsyRkFqREdPLE07Ozs7Ozs7dUJBQ1EseUJBQVksU0FBWixDOzs7QUFBYkMsb0I7O3NCQUNGQSxLQUFLYixHQUFMLEtBQWEsRTs7Ozs7O3VCQUNJLEtBQUtjLFdBQUwsRTs7O0FBQWIxQixvQjtBQUFnQztBQUN0Q3lCLHFCQUFLYixHQUFMLEdBQVdaLEtBQUsyQixRQUFMLENBQWNDLFNBQXpCOzs7QUFFRixxQkFBSzFCLEtBQUwsR0FBYSxrQkFBUSxFQUFSLENBQWI7QUFDQSxxQkFBS0ksS0FBTCxHQUFhdUIsT0FBT0MsTUFBUCxDQUFjTCxLQUFLTSxJQUFuQixDQUFiO0FBQ0EscUJBQUs1QixRQUFMLENBQWM2QixJQUFkLENBQW1CLEtBQUsxQixLQUF4QjtBQUNBLHFCQUFLQyxTQUFMLEdBQWdCa0IsS0FBS1EsU0FBTCxHQUFpQixHQUFqQztBQUNBLHFCQUFLbkMsVUFBTCxHQUFrQix3QkFBYzJCLElBQWQsRUFBb0I1QixZQUFwQixDQUFsQjtBQUNBLHFCQUFLcUMsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWhCaUNDLGVBQUtDLEk7O2tCQUFyQjlDLE8iLCJmaWxlIjoiY29tcGlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQge2dldFVzZXJJbmZvfSBmcm9tICcuLi9hY3Rpb24vYWN0aW9uJ1xyXG5pbXBvcnQge2VkaXR9IGZyb20gJy4uL2NvbW1vbi9tb2R1bGUnXHJcbmltcG9ydCBiYXNlTWl4aW4gZnJvbSAnLi4vbWl4aW5zL2Jhc2UnXHJcbmltcG9ydCB7ZGVsZXRlT2JqS2V5cywgdG9BcnJheX0gZnJvbSAnLi4vdXRpbHMvb3RhJ1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21waWxlIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn57yW6L6R6LWE5paZJ1xyXG4gIH1cclxuICBtaXhpbnMgPVtiYXNlTWl4aW5dXHJcbiAgYXN5bmMgb25Mb2FkKG9wdGlvbikge1xyXG4gICAgY29uc3QganNvbiA9IGF3YWl0IGdldFVzZXJJbmZvKDEyMzQ1Njc4OSkgLy8g6K+35rGC5o6l5Y+j6I635Y+W55qE5Liq5Lq65L+h5oGvXHJcbiAgICBpZiAoanNvbi5pbWcgPT09ICcnKSB7XHJcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB0aGlzLmdldFVzZXJJbmZvKCkgLy8g6K+35rGC5b6u5L+h6I635Y+W55qE6Lef5Lq65L+h5oGvXHJcbiAgICAgIGpzb24uaW1nID0gdXNlci51c2VySW5mby5hdmF0YXJVcmxcclxuICAgIH1cclxuICAgIHRoaXMuYXJyYXkgPSB0b0FycmF5KDEwKVxyXG4gICAgdGhpcy5ob2JieSA9IE9iamVjdC52YWx1ZXMoanNvbi50YWdzKVxyXG4gICAgdGhpcy5pbnRlcmVzdC5wdXNoKHRoaXMuaG9iYnkpXHJcbiAgICB0aGlzLnNlbGVjWWVhciA9anNvbi5zZW5pb3JpdHkgKyAn5bm0J1xyXG4gICAgdGhpcy5lZGl0cmVzdWx0ID0gZGVsZXRlT2JqS2V5cyhqc29uLCBlZGl0KVxyXG4gICAgdGhpcy4kYXBwbHkoKVxyXG4gIH1cclxuICBkYXRhID0ge1xyXG4gICAgZWRpdFRtcDogZWRpdCxcclxuICAgIGVkaXRyZXN1bHQ6IHt9LFxyXG4gICAgd3hVc2VySW5mbzogbnVsbCxcclxuICAgIHVzZXI6ICcnLFxyXG4gICAgcGljOiAnJyxcclxuICAgIGFycmF5OiBbXSxcclxuICAgIGludGVyZXN0OiBbJ+WJjeerr2pzJywgJ3Z1ZScsICdyZWFjdCcsICdqcXVlcnknXSxcclxuICAgIGluZGV4OiAwLFxyXG4gICAgaW5kOiAwLFxyXG4gICAgaG9iYnk6ICfliY3nq69KUycsXHJcbiAgICBzZWxlY1llYXI6ICcx5bm0JyxcclxuICAgIGxpc3Q6IFtcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6ICflkI3lrZcnLFxyXG4gICAgICAgIGlzSHBpYzogZmFsc2UsXHJcbiAgICAgICAgdGl0YmFyOiAnSm9obm55J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogJ+WktOWDjycsXHJcbiAgICAgICAgdGl0YmFyOiAnJyxcclxuICAgICAgICBpbWc6ICcuLi9pbWFnZXMvcGljLmpwZycsXHJcbiAgICAgICAgaXNIcGljOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiAn6IGM5L2NJyxcclxuICAgICAgICBpc0hwaWM6IGZhbHNlLFxyXG4gICAgICAgIHRpdGJhcjogJ+mYv+mHjOW3tOW3tOWMl+S6rOeUteWVhidcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6ICfkvY3nva4nLFxyXG4gICAgICAgIGlzSHBpYzogZmFsc2UsXHJcbiAgICAgICAgdGl0YmFyOiAn5YyX5Lqs5biC44CB5pyd6Ziz5Yy6J1xyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfVxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBiaW5kUGlja2VyQ2hhbmdlOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgIHRoaXMuaW5kZXggPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB0aGlzLnNlbGVjWWVhciA9IHRoaXMuYXJyYXlbdGhpcy5pbmRleF1cclxuICAgIH0sXHJcbiAgICBiaW5kUGlja2VyOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgIHRoaXMuaW5kID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgdGhpcy5ob2JieSA9IHRoaXMuaW50ZXJlc3RbdGhpcy5pbmRdXHJcbiAgICB9LFxyXG4gICAgYmluZERhdGVDaGFuZ2U6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBkYXRlOiBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIGJpbmRUaW1lQ2hhbmdlOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgdGltZTogZS5kZXRhaWwudmFsdWVcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19