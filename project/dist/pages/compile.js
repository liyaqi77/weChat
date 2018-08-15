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
      img: '../images/pic.jpg',
      pic: '',
      array: [],
      interest: [],
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
                this.array = json.array;
                this.interest = json.interest;
                this.editresult = (0, _ota.deleteObjKeys)(json, _module.edit);
                this.pic = option.pic;
                this.$apply();

              case 13:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBpbGUuanMiXSwibmFtZXMiOlsiQ29tcGlsZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJtaXhpbnMiLCJiYXNlTWl4aW4iLCJkYXRhIiwiZWRpdFRtcCIsImVkaXQiLCJlZGl0cmVzdWx0Iiwid3hVc2VySW5mbyIsInVzZXIiLCJpbWciLCJwaWMiLCJhcnJheSIsImludGVyZXN0IiwiaW5kZXgiLCJpbmQiLCJob2JieSIsInNlbGVjWWVhciIsImxpc3QiLCJ0ZXh0IiwiaXNIcGljIiwidGl0YmFyIiwibWV0aG9kcyIsImJpbmRQaWNrZXJDaGFuZ2UiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJiaW5kUGlja2VyIiwiYmluZERhdGVDaGFuZ2UiLCJzZXREYXRhIiwiZGF0ZSIsImJpbmRUaW1lQ2hhbmdlIiwidGltZSIsIm9wdGlvbiIsImpzb24iLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwiYXZhdGFyVXJsIiwiJGFwcGx5Iiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxPOzs7Ozs7Ozs7Ozs7Ozt3TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxNLEdBQVEsQ0FBQ0MsY0FBRCxDLFFBYVJDLEksR0FBTztBQUNMQyxlQUFTQyxZQURKO0FBRUxDLGtCQUFZLEVBRlA7QUFHTEMsa0JBQVksSUFIUDtBQUlMQyxZQUFNLEVBSkQ7QUFLTEMsV0FBSyxtQkFMQTtBQU1MQyxXQUFLLEVBTkE7QUFPTEMsYUFBTyxFQVBGO0FBUUxDLGdCQUFVLEVBUkw7QUFTTEMsYUFBTyxDQVRGO0FBVUxDLFdBQUssQ0FWQTtBQVdMQyxhQUFPLE1BWEY7QUFZTEMsaUJBQVcsSUFaTjtBQWFMQyxZQUFNLENBQ0o7QUFDRUMsY0FBTSxJQURSO0FBRUVDLGdCQUFRLEtBRlY7QUFHRUMsZ0JBQVE7QUFIVixPQURJLEVBTUo7QUFDRUYsY0FBTSxJQURSO0FBRUVFLGdCQUFRLEVBRlY7QUFHRVgsYUFBSyxtQkFIUDtBQUlFVSxnQkFBUTtBQUpWLE9BTkksRUFZSjtBQUNFRCxjQUFNLElBRFI7QUFFRUMsZ0JBQVEsS0FGVjtBQUdFQyxnQkFBUTtBQUhWLE9BWkksRUFpQko7QUFDRUYsY0FBTSxJQURSO0FBRUVDLGdCQUFRLEtBRlY7QUFHRUMsZ0JBQVE7QUFIVixPQWpCSTtBQWJELEssUUFxQ1BDLE8sR0FBVTtBQUNSQyx3QkFBa0IsMEJBQVNDLENBQVQsRUFBWTtBQUM1QixhQUFLVixLQUFMLEdBQWFVLEVBQUVDLE1BQUYsQ0FBU0MsS0FBdEI7QUFDQSxhQUFLVCxTQUFMLEdBQWlCLEtBQUtMLEtBQUwsQ0FBVyxLQUFLRSxLQUFoQixDQUFqQjtBQUNELE9BSk87QUFLUmEsa0JBQVksb0JBQVNILENBQVQsRUFBWTtBQUN0QixhQUFLVCxHQUFMLEdBQVdTLEVBQUVDLE1BQUYsQ0FBU0MsS0FBcEI7QUFDQSxhQUFLVixLQUFMLEdBQWEsS0FBS0gsUUFBTCxDQUFjLEtBQUtFLEdBQW5CLENBQWI7QUFDRCxPQVJPO0FBU1JhLHNCQUFnQix3QkFBU0osQ0FBVCxFQUFZO0FBQzFCLGFBQUtLLE9BQUwsQ0FBYTtBQUNYQyxnQkFBTU4sRUFBRUMsTUFBRixDQUFTQztBQURKLFNBQWI7QUFHRCxPQWJPO0FBY1JLLHNCQUFnQix3QkFBU1AsQ0FBVCxFQUFZO0FBQzFCLGFBQUtLLE9BQUwsQ0FBYTtBQUNYRyxnQkFBTVIsRUFBRUMsTUFBRixDQUFTQztBQURKLFNBQWI7QUFHRDtBQWxCTyxLOzs7Ozs7MkZBakRHTyxNOzs7Ozs7O3VCQUNRLHlCQUFZLFNBQVosQzs7O0FBQWJDLG9COztzQkFDRkEsS0FBS3hCLEdBQUwsS0FBYSxFOzs7Ozs7dUJBQ0ksS0FBS3lCLFdBQUwsRTs7O0FBQWIxQixvQjtBQUFnQztBQUN0Q3lCLHFCQUFLeEIsR0FBTCxHQUFXRCxLQUFLMkIsUUFBTCxDQUFjQyxTQUF6Qjs7O0FBRUYscUJBQUt6QixLQUFMLEdBQWFzQixLQUFLdEIsS0FBbEI7QUFDQSxxQkFBS0MsUUFBTCxHQUFnQnFCLEtBQUtyQixRQUFyQjtBQUNBLHFCQUFLTixVQUFMLEdBQWtCLHdCQUFjMkIsSUFBZCxFQUFvQjVCLFlBQXBCLENBQWxCO0FBQ0EscUJBQUtLLEdBQUwsR0FBV3NCLE9BQU90QixHQUFsQjtBQUNBLHFCQUFLMkIsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWZpQ0MsZUFBS0MsSTs7a0JBQXJCekMsTyIsImZpbGUiOiJjb21waWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCB7Z2V0VXNlckluZm99IGZyb20gJy4uL2FjdGlvbi9hY3Rpb24nXHJcbmltcG9ydCB7ZWRpdH0gZnJvbSAnLi4vY29tbW9uL21vZHVsZSdcclxuaW1wb3J0IGJhc2VNaXhpbiBmcm9tICcuLi9taXhpbnMvYmFzZSdcclxuaW1wb3J0IHtkZWxldGVPYmpLZXlzfSBmcm9tICcuLi91dGlscy9vdGEnXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBpbGUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnvJbovpHotYTmlpknXHJcbiAgfVxyXG4gIG1peGlucyA9W2Jhc2VNaXhpbl1cclxuICBhc3luYyBvbkxvYWQob3B0aW9uKSB7XHJcbiAgICBjb25zdCBqc29uID0gYXdhaXQgZ2V0VXNlckluZm8oMTIzNDU2Nzg5KSAvLyDor7fmsYLmjqXlj6Pojrflj5bnmoTkuKrkurrkv6Hmga9cclxuICAgIGlmIChqc29uLmltZyA9PT0gJycpIHtcclxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHRoaXMuZ2V0VXNlckluZm8oKSAvLyDor7fmsYLlvq7kv6Hojrflj5bnmoTot5/kurrkv6Hmga9cclxuICAgICAganNvbi5pbWcgPSB1c2VyLnVzZXJJbmZvLmF2YXRhclVybFxyXG4gICAgfVxyXG4gICAgdGhpcy5hcnJheSA9IGpzb24uYXJyYXlcclxuICAgIHRoaXMuaW50ZXJlc3QgPSBqc29uLmludGVyZXN0XHJcbiAgICB0aGlzLmVkaXRyZXN1bHQgPSBkZWxldGVPYmpLZXlzKGpzb24sIGVkaXQpXHJcbiAgICB0aGlzLnBpYyA9IG9wdGlvbi5waWNcclxuICAgIHRoaXMuJGFwcGx5KClcclxuICB9XHJcbiAgZGF0YSA9IHtcclxuICAgIGVkaXRUbXA6IGVkaXQsXHJcbiAgICBlZGl0cmVzdWx0OiB7fSxcclxuICAgIHd4VXNlckluZm86IG51bGwsXHJcbiAgICB1c2VyOiAnJyxcclxuICAgIGltZzogJy4uL2ltYWdlcy9waWMuanBnJyxcclxuICAgIHBpYzogJycsXHJcbiAgICBhcnJheTogW10sXHJcbiAgICBpbnRlcmVzdDogW10sXHJcbiAgICBpbmRleDogMCxcclxuICAgIGluZDogMCxcclxuICAgIGhvYmJ5OiAn5YmN56uvSlMnLFxyXG4gICAgc2VsZWNZZWFyOiAnMeW5tCcsXHJcbiAgICBsaXN0OiBbXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiAn5ZCN5a2XJyxcclxuICAgICAgICBpc0hwaWM6IGZhbHNlLFxyXG4gICAgICAgIHRpdGJhcjogJ0pvaG5ueSdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6ICflpLTlg48nLFxyXG4gICAgICAgIHRpdGJhcjogJycsXHJcbiAgICAgICAgaW1nOiAnLi4vaW1hZ2VzL3BpYy5qcGcnLFxyXG4gICAgICAgIGlzSHBpYzogdHJ1ZVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogJ+iBjOS9jScsXHJcbiAgICAgICAgaXNIcGljOiBmYWxzZSxcclxuICAgICAgICB0aXRiYXI6ICfpmL/ph4zlt7Tlt7TljJfkuqznlLXllYYnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiAn5L2N572uJyxcclxuICAgICAgICBpc0hwaWM6IGZhbHNlLFxyXG4gICAgICAgIHRpdGJhcjogJ+WMl+S6rOW4guOAgeacnemYs+WMuidcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH1cclxuICBtZXRob2RzID0ge1xyXG4gICAgYmluZFBpY2tlckNoYW5nZTogZnVuY3Rpb24oZSkge1xyXG4gICAgICB0aGlzLmluZGV4ID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgdGhpcy5zZWxlY1llYXIgPSB0aGlzLmFycmF5W3RoaXMuaW5kZXhdXHJcbiAgICB9LFxyXG4gICAgYmluZFBpY2tlcjogZnVuY3Rpb24oZSkge1xyXG4gICAgICB0aGlzLmluZCA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIHRoaXMuaG9iYnkgPSB0aGlzLmludGVyZXN0W3RoaXMuaW5kXVxyXG4gICAgfSxcclxuICAgIGJpbmREYXRlQ2hhbmdlOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgZGF0ZTogZS5kZXRhaWwudmFsdWVcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBiaW5kVGltZUNoYW5nZTogZnVuY3Rpb24oZSkge1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHRpbWU6IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==