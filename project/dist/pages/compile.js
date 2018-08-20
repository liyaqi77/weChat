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
      editresult: [],
      wxUserInfo: null,
      user: '',
      pic: '',
      array: [],
      interest: ['前端js', 'vue', 'react', 'jquery'],
      index: 0,
      ind: 0,
      hobby: '前端JS',
      selecYear: '1年',
      tags: '',
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
        var uid, json, user;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.setUserId();

              case 2:
                uid = _wepy2.default.getStorageSync('uid');
                _context.next = 5;
                return (0, _action.getUserInfo)(uid);

              case 5:
                json = _context.sent;

                if (!(json.avatar === '')) {
                  _context.next = 11;
                  break;
                }

                _context.next = 9;
                return this.getUserInfo();

              case 9:
                user = _context.sent;
                // 请求微信获取的跟人信息
                json.avatar = user.userInfo.avatarUrl;

              case 11:
                this.array = (0, _ota.toArray)(10);
                this.tags = ['前端开发', '后端开发'];
                this.editresult = (0, _ota.deleteObjKeys)(json, _module.edit);
                // this.hobby = Object.values(json.tags)
                // this.interest.push(this.hobby)
                this.$apply();

              case 15:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBpbGUuanMiXSwibmFtZXMiOlsiQ29tcGlsZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJtaXhpbnMiLCJiYXNlTWl4aW4iLCJkYXRhIiwiZWRpdFRtcCIsImVkaXQiLCJlZGl0cmVzdWx0Iiwid3hVc2VySW5mbyIsInVzZXIiLCJwaWMiLCJhcnJheSIsImludGVyZXN0IiwiaW5kZXgiLCJpbmQiLCJob2JieSIsInNlbGVjWWVhciIsInRhZ3MiLCJsaXN0IiwidGV4dCIsImlzSHBpYyIsInRpdGJhciIsImltZyIsIm1ldGhvZHMiLCJiaW5kUGlja2VyQ2hhbmdlIiwiZSIsImRldGFpbCIsInZhbHVlIiwiYmluZFBpY2tlciIsImJpbmREYXRlQ2hhbmdlIiwic2V0RGF0YSIsImRhdGUiLCJiaW5kVGltZUNoYW5nZSIsInRpbWUiLCJvcHRpb24iLCJzZXRVc2VySWQiLCJ1aWQiLCJ3ZXB5IiwiZ2V0U3RvcmFnZVN5bmMiLCJqc29uIiwiYXZhdGFyIiwiZ2V0VXNlckluZm8iLCJ1c2VySW5mbyIsImF2YXRhclVybCIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxPOzs7Ozs7Ozs7Ozs7Ozt3TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxNLEdBQVEsQ0FBQ0MsY0FBRCxDLFFBbUJSQyxJLEdBQU87QUFDTEMsZUFBU0MsWUFESjtBQUVMQyxrQkFBWSxFQUZQO0FBR0xDLGtCQUFZLElBSFA7QUFJTEMsWUFBTSxFQUpEO0FBS0xDLFdBQUssRUFMQTtBQU1MQyxhQUFPLEVBTkY7QUFPTEMsZ0JBQVUsQ0FBQyxNQUFELEVBQVMsS0FBVCxFQUFnQixPQUFoQixFQUF5QixRQUF6QixDQVBMO0FBUUxDLGFBQU8sQ0FSRjtBQVNMQyxXQUFLLENBVEE7QUFVTEMsYUFBTyxNQVZGO0FBV0xDLGlCQUFXLElBWE47QUFZTEMsWUFBTSxFQVpEO0FBYUxDLFlBQU0sQ0FDSjtBQUNFQyxjQUFNLElBRFI7QUFFRUMsZ0JBQVEsS0FGVjtBQUdFQyxnQkFBUTtBQUhWLE9BREksRUFNSjtBQUNFRixjQUFNLElBRFI7QUFFRUUsZ0JBQVEsRUFGVjtBQUdFQyxhQUFLLG1CQUhQO0FBSUVGLGdCQUFRO0FBSlYsT0FOSSxFQVlKO0FBQ0VELGNBQU0sSUFEUjtBQUVFQyxnQkFBUSxLQUZWO0FBR0VDLGdCQUFRO0FBSFYsT0FaSSxFQWlCSjtBQUNFRixjQUFNLElBRFI7QUFFRUMsZ0JBQVEsS0FGVjtBQUdFQyxnQkFBUTtBQUhWLE9BakJJO0FBYkQsSyxRQXFDUEUsTyxHQUFVO0FBQ1JDLHdCQUFrQiwwQkFBU0MsQ0FBVCxFQUFZO0FBQzVCLGFBQUtaLEtBQUwsR0FBYVksRUFBRUMsTUFBRixDQUFTQyxLQUF0QjtBQUNBLGFBQUtYLFNBQUwsR0FBaUIsS0FBS0wsS0FBTCxDQUFXLEtBQUtFLEtBQWhCLENBQWpCO0FBQ0QsT0FKTztBQUtSZSxrQkFBWSxvQkFBU0gsQ0FBVCxFQUFZO0FBQ3RCLGFBQUtYLEdBQUwsR0FBV1csRUFBRUMsTUFBRixDQUFTQyxLQUFwQjtBQUNBLGFBQUtaLEtBQUwsR0FBYSxLQUFLSCxRQUFMLENBQWMsS0FBS0UsR0FBbkIsQ0FBYjtBQUNELE9BUk87QUFTUmUsc0JBQWdCLHdCQUFTSixDQUFULEVBQVk7QUFDMUIsYUFBS0ssT0FBTCxDQUFhO0FBQ1hDLGdCQUFNTixFQUFFQyxNQUFGLENBQVNDO0FBREosU0FBYjtBQUdELE9BYk87QUFjUkssc0JBQWdCLHdCQUFTUCxDQUFULEVBQVk7QUFDMUIsYUFBS0ssT0FBTCxDQUFhO0FBQ1hHLGdCQUFNUixFQUFFQyxNQUFGLENBQVNDO0FBREosU0FBYjtBQUdEO0FBbEJPLEs7Ozs7OzsyRkF2REdPLE07Ozs7Ozs7dUJBQ0wsS0FBS0MsU0FBTCxFOzs7QUFDQUMsbUIsR0FBTUMsZUFBS0MsY0FBTCxDQUFvQixLQUFwQixDOzt1QkFDTyx5QkFBWUYsR0FBWixDOzs7QUFBYkcsb0I7O3NCQUNGQSxLQUFLQyxNQUFMLEtBQWdCLEU7Ozs7Ozt1QkFDQyxLQUFLQyxXQUFMLEU7OztBQUFiaEMsb0I7QUFBZ0M7QUFDdEM4QixxQkFBS0MsTUFBTCxHQUFjL0IsS0FBS2lDLFFBQUwsQ0FBY0MsU0FBNUI7OztBQUVGLHFCQUFLaEMsS0FBTCxHQUFhLGtCQUFRLEVBQVIsQ0FBYjtBQUNBLHFCQUFLTSxJQUFMLEdBQVksQ0FDVixNQURVLEVBRVYsTUFGVSxDQUFaO0FBSUEscUJBQUtWLFVBQUwsR0FBa0Isd0JBQWNnQyxJQUFkLEVBQW9CakMsWUFBcEIsQ0FBbEI7QUFDQTtBQUNBO0FBQ0EscUJBQUtzQyxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBckJpQ1AsZUFBS1EsSTs7a0JBQXJCOUMsTyIsImZpbGUiOiJjb21waWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCB7Z2V0VXNlckluZm99IGZyb20gJy4uL2FjdGlvbi9hY3Rpb24nXHJcbmltcG9ydCB7ZWRpdH0gZnJvbSAnLi4vY29tbW9uL21vZHVsZSdcclxuaW1wb3J0IGJhc2VNaXhpbiBmcm9tICcuLi9taXhpbnMvYmFzZSdcclxuaW1wb3J0IHtkZWxldGVPYmpLZXlzLCB0b0FycmF5fSBmcm9tICcuLi91dGlscy9vdGEnXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBpbGUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnvJbovpHotYTmlpknXHJcbiAgfVxyXG4gIG1peGlucyA9W2Jhc2VNaXhpbl1cclxuICBhc3luYyBvbkxvYWQob3B0aW9uKSB7XHJcbiAgICBhd2FpdCB0aGlzLnNldFVzZXJJZCgpXHJcbiAgICBjb25zdCB1aWQgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCd1aWQnKVxyXG4gICAgY29uc3QganNvbiA9IGF3YWl0IGdldFVzZXJJbmZvKHVpZCkgLy8g6K+35rGC5o6l5Y+j6I635Y+W55qE5Liq5Lq65L+h5oGvXHJcbiAgICBpZiAoanNvbi5hdmF0YXIgPT09ICcnKSB7XHJcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB0aGlzLmdldFVzZXJJbmZvKCkgLy8g6K+35rGC5b6u5L+h6I635Y+W55qE6Lef5Lq65L+h5oGvXHJcbiAgICAgIGpzb24uYXZhdGFyID0gdXNlci51c2VySW5mby5hdmF0YXJVcmxcclxuICAgIH1cclxuICAgIHRoaXMuYXJyYXkgPSB0b0FycmF5KDEwKVxyXG4gICAgdGhpcy50YWdzID0gW1xyXG4gICAgICAn5YmN56uv5byA5Y+RJyxcclxuICAgICAgJ+WQjuerr+W8gOWPkSdcclxuICAgIF1cclxuICAgIHRoaXMuZWRpdHJlc3VsdCA9IGRlbGV0ZU9iaktleXMoanNvbiwgZWRpdClcclxuICAgIC8vIHRoaXMuaG9iYnkgPSBPYmplY3QudmFsdWVzKGpzb24udGFncylcclxuICAgIC8vIHRoaXMuaW50ZXJlc3QucHVzaCh0aGlzLmhvYmJ5KVxyXG4gICAgdGhpcy4kYXBwbHkoKVxyXG4gIH1cclxuICBkYXRhID0ge1xyXG4gICAgZWRpdFRtcDogZWRpdCxcclxuICAgIGVkaXRyZXN1bHQ6IFtdLFxyXG4gICAgd3hVc2VySW5mbzogbnVsbCxcclxuICAgIHVzZXI6ICcnLFxyXG4gICAgcGljOiAnJyxcclxuICAgIGFycmF5OiBbXSxcclxuICAgIGludGVyZXN0OiBbJ+WJjeerr2pzJywgJ3Z1ZScsICdyZWFjdCcsICdqcXVlcnknXSxcclxuICAgIGluZGV4OiAwLFxyXG4gICAgaW5kOiAwLFxyXG4gICAgaG9iYnk6ICfliY3nq69KUycsXHJcbiAgICBzZWxlY1llYXI6ICcx5bm0JyxcclxuICAgIHRhZ3M6ICcnLFxyXG4gICAgbGlzdDogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogJ+WQjeWtlycsXHJcbiAgICAgICAgaXNIcGljOiBmYWxzZSxcclxuICAgICAgICB0aXRiYXI6ICdKb2hubnknXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiAn5aS05YOPJyxcclxuICAgICAgICB0aXRiYXI6ICcnLFxyXG4gICAgICAgIGltZzogJy4uL2ltYWdlcy9waWMuanBnJyxcclxuICAgICAgICBpc0hwaWM6IHRydWVcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6ICfogYzkvY0nLFxyXG4gICAgICAgIGlzSHBpYzogZmFsc2UsXHJcbiAgICAgICAgdGl0YmFyOiAn6Zi/6YeM5be05be05YyX5Lqs55S15ZWGJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogJ+S9jee9ricsXHJcbiAgICAgICAgaXNIcGljOiBmYWxzZSxcclxuICAgICAgICB0aXRiYXI6ICfljJfkuqzluILjgIHmnJ3pmLPljLonXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9XHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIGJpbmRQaWNrZXJDaGFuZ2U6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgdGhpcy5pbmRleCA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIHRoaXMuc2VsZWNZZWFyID0gdGhpcy5hcnJheVt0aGlzLmluZGV4XVxyXG4gICAgfSxcclxuICAgIGJpbmRQaWNrZXI6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgdGhpcy5pbmQgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB0aGlzLmhvYmJ5ID0gdGhpcy5pbnRlcmVzdFt0aGlzLmluZF1cclxuICAgIH0sXHJcbiAgICBiaW5kRGF0ZUNoYW5nZTogZnVuY3Rpb24oZSkge1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGRhdGU6IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgYmluZFRpbWVDaGFuZ2U6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB0aW1lOiBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=