'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _utils = require('./../utils/utils.js');

var _action = require('./../action/action.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Upphoto = function (_wepy$component) {
  _inherits(Upphoto, _wepy$component);

  function Upphoto() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Upphoto);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Upphoto.__proto__ || Object.getPrototypeOf(Upphoto)).call.apply(_ref, [this].concat(args))), _this), _this.props = {}, _this.data = {
      files: [],
      val: ''
    }, _this.methods = {
      chooseImage: function chooseImage(e) {
        var that = this;
        wx.chooseImage({
          sizeType: ['original'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album'], // 可以指定来源是相册还是相机，默认二者都有
          success: function success(res) {
            // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
            that.files = that.data.files.concat(res.tempFilePaths);
            that.$apply();
            wx.uploadFile({
              url: 'http://127.0.0.1:8080/api/upload',
              filePath: res.tempFilePaths[0],
              name: 'uploadimg',
              success: function success(res) {
                console.log(JSON.parse(res.data));
                that.val = JSON.parse(res.data).path;
                that.$apply();
              }
            });
          }
        });
      },
      previewImage: function previewImage(e) {
        _wepy2.default.previewImage({
          current: e.currentTarget.id, // 当前显示图片的http链接
          urls: this.data.files // 需要预览的图片http链接列表
        });
      },
      savePic: function savePic(e) {
        _wepy2.default.showModal({
          title: '提示',
          content: '返回编辑页',
          success: function success(res) {
            console.log(123);
            if (res.confirm) {
              console.log('确定');
              _wepy2.default.navigateTo({
                url: '/pages/compile'
              });
            } else if (res.cancel) {
              console.log('取消');
            }
          }
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Upphoto, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(options) {
        var uid, json;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                uid = (0, _utils.getStorageSync)('uid');
                _context.next = 3;
                return (0, _action.getUserInfo)(uid);

              case 3:
                json = _context.sent;

              case 4:
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

  return Upphoto;
}(_wepy2.default.component);

exports.default = Upphoto;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwLXBob3RvLmpzIl0sIm5hbWVzIjpbIlVwcGhvdG8iLCJwcm9wcyIsImRhdGEiLCJmaWxlcyIsInZhbCIsIm1ldGhvZHMiLCJjaG9vc2VJbWFnZSIsImUiLCJ0aGF0Iiwid3giLCJzaXplVHlwZSIsInNvdXJjZVR5cGUiLCJzdWNjZXNzIiwicmVzIiwiY29uY2F0IiwidGVtcEZpbGVQYXRocyIsIiRhcHBseSIsInVwbG9hZEZpbGUiLCJ1cmwiLCJmaWxlUGF0aCIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInBhcnNlIiwicGF0aCIsInByZXZpZXdJbWFnZSIsIndlcHkiLCJjdXJyZW50IiwiY3VycmVudFRhcmdldCIsImlkIiwidXJscyIsInNhdmVQaWMiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJjb25maXJtIiwibmF2aWdhdGVUbyIsImNhbmNlbCIsIm9wdGlvbnMiLCJ1aWQiLCJqc29uIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLE87Ozs7Ozs7Ozs7Ozs7O3dMQUNuQkMsSyxHQUFRLEUsUUFDUkMsSSxHQUFPO0FBQ0xDLGFBQU8sRUFERjtBQUVMQyxXQUFLO0FBRkEsSyxRQVFQQyxPLEdBQVU7QUFDUkMsbUJBQWEscUJBQVVDLENBQVYsRUFBYTtBQUN4QixZQUFJQyxPQUFPLElBQVg7QUFDQUMsV0FBR0gsV0FBSCxDQUFlO0FBQ2JJLG9CQUFVLENBQUMsVUFBRCxDQURHLEVBQ1c7QUFDeEJDLHNCQUFZLENBQUMsT0FBRCxDQUZDLEVBRVU7QUFDdkJDLG1CQUFTLGlCQUFVQyxHQUFWLEVBQWU7QUFDdEI7QUFDQUwsaUJBQUtMLEtBQUwsR0FBYUssS0FBS04sSUFBTCxDQUFVQyxLQUFWLENBQWdCVyxNQUFoQixDQUF1QkQsSUFBSUUsYUFBM0IsQ0FBYjtBQUNBUCxpQkFBS1EsTUFBTDtBQUNBUCxlQUFHUSxVQUFILENBQWM7QUFDWkMsbUJBQUssa0NBRE87QUFFWkMsd0JBQVVOLElBQUlFLGFBQUosQ0FBa0IsQ0FBbEIsQ0FGRTtBQUdaSyxvQkFBTSxXQUhNO0FBSVpSLHVCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJRLHdCQUFRQyxHQUFSLENBQVlDLEtBQUtDLEtBQUwsQ0FBV1gsSUFBSVgsSUFBZixDQUFaO0FBQ0FNLHFCQUFLSixHQUFMLEdBQVdtQixLQUFLQyxLQUFMLENBQVdYLElBQUlYLElBQWYsRUFBcUJ1QixJQUFoQztBQUNBakIscUJBQUtRLE1BQUw7QUFDRDtBQVJXLGFBQWQ7QUFVRDtBQWpCWSxTQUFmO0FBbUJELE9BdEJPO0FBdUJSVSxvQkFBYyxzQkFBU25CLENBQVQsRUFBWTtBQUN4Qm9CLHVCQUFLRCxZQUFMLENBQWtCO0FBQ2hCRSxtQkFBU3JCLEVBQUVzQixhQUFGLENBQWdCQyxFQURULEVBQ2E7QUFDN0JDLGdCQUFNLEtBQUs3QixJQUFMLENBQVVDLEtBRkEsQ0FFTTtBQUZOLFNBQWxCO0FBSUQsT0E1Qk87QUE2QlI2QixlQUFTLGlCQUFTekIsQ0FBVCxFQUFZO0FBQ25Cb0IsdUJBQUtNLFNBQUwsQ0FBZTtBQUNiQyxpQkFBTyxJQURNO0FBRWJDLG1CQUFTLE9BRkk7QUFHYnZCLG1CQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJRLG9CQUFRQyxHQUFSLENBQVksR0FBWjtBQUNBLGdCQUFJVCxJQUFJdUIsT0FBUixFQUFpQjtBQUNmZixzQkFBUUMsR0FBUixDQUFZLElBQVo7QUFDQUssNkJBQUtVLFVBQUwsQ0FBZ0I7QUFDZG5CLHFCQUFLO0FBRFMsZUFBaEI7QUFHRCxhQUxELE1BS08sSUFBSUwsSUFBSXlCLE1BQVIsRUFBZ0I7QUFDckJqQixzQkFBUUMsR0FBUixDQUFZLElBQVo7QUFDRDtBQUNGO0FBYlksU0FBZjtBQWVEO0FBN0NPLEs7Ozs7OzsyRkFKR2lCLE87Ozs7OztBQUNMQyxtQixHQUFNLDJCQUFlLEtBQWYsQzs7dUJBQ08seUJBQVlBLEdBQVosQzs7O0FBQWJDLG9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBUjJCZCxlQUFLZSxTOztrQkFBckIxQyxPIiwiZmlsZSI6InVwLXBob3RvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCB7Z2V0U3RvcmFnZVN5bmN9IGZyb20gJy4uL3V0aWxzL3V0aWxzJ1xyXG5pbXBvcnQge2dldFVzZXJJbmZvfSBmcm9tICcuLi9hY3Rpb24vYWN0aW9uJ1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVcHBob3RvIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gIHByb3BzID0ge31cclxuICBkYXRhID0ge1xyXG4gICAgZmlsZXM6IFtdLFxyXG4gICAgdmFsOiAnJ1xyXG4gIH1cclxuICBhc3luYyBvbkxvYWQob3B0aW9ucykge1xyXG4gICAgY29uc3QgdWlkID0gZ2V0U3RvcmFnZVN5bmMoJ3VpZCcpXHJcbiAgICBjb25zdCBqc29uID0gYXdhaXQgZ2V0VXNlckluZm8odWlkKVxyXG4gIH1cclxuICBtZXRob2RzID0ge1xyXG4gICAgY2hvb3NlSW1hZ2U6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIHZhciB0aGF0ID0gdGhpc1xyXG4gICAgICB3eC5jaG9vc2VJbWFnZSh7XHJcbiAgICAgICAgc2l6ZVR5cGU6IFsnb3JpZ2luYWwnXSwgLy8g5Y+v5Lul5oyH5a6a5piv5Y6f5Zu+6L+Y5piv5Y6L57yp5Zu+77yM6buY6K6k5LqM6ICF6YO95pyJXHJcbiAgICAgICAgc291cmNlVHlwZTogWydhbGJ1bSddLCAvLyDlj6/ku6XmjIflrprmnaXmupDmmK/nm7jlhozov5jmmK/nm7jmnLrvvIzpu5jorqTkuozogIXpg73mnIlcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAvLyDov5Tlm57pgInlrprnhafniYfnmoTmnKzlnLDmlofku7bot6/lvoTliJfooajvvIx0ZW1wRmlsZVBhdGjlj6/ku6XkvZzkuLppbWfmoIfnrb7nmoRzcmPlsZ7mgKfmmL7npLrlm77niYdcclxuICAgICAgICAgIHRoYXQuZmlsZXMgPSB0aGF0LmRhdGEuZmlsZXMuY29uY2F0KHJlcy50ZW1wRmlsZVBhdGhzKVxyXG4gICAgICAgICAgdGhhdC4kYXBwbHkoKVxyXG4gICAgICAgICAgd3gudXBsb2FkRmlsZSh7XHJcbiAgICAgICAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6ODA4MC9hcGkvdXBsb2FkJyxcclxuICAgICAgICAgICAgZmlsZVBhdGg6IHJlcy50ZW1wRmlsZVBhdGhzWzBdLFxyXG4gICAgICAgICAgICBuYW1lOiAndXBsb2FkaW1nJyxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5wYXJzZShyZXMuZGF0YSkpXHJcbiAgICAgICAgICAgICAgdGhhdC52YWwgPSBKU09OLnBhcnNlKHJlcy5kYXRhKS5wYXRoXHJcbiAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBwcmV2aWV3SW1hZ2U6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgd2VweS5wcmV2aWV3SW1hZ2Uoe1xyXG4gICAgICAgIGN1cnJlbnQ6IGUuY3VycmVudFRhcmdldC5pZCwgLy8g5b2T5YmN5pi+56S65Zu+54mH55qEaHR0cOmTvuaOpVxyXG4gICAgICAgIHVybHM6IHRoaXMuZGF0YS5maWxlcyAvLyDpnIDopoHpooTop4jnmoTlm77niYdodHRw6ZO+5o6l5YiX6KGoXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgc2F2ZVBpYzogZnVuY3Rpb24oZSkge1xyXG4gICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgIGNvbnRlbnQ6ICfov5Tlm57nvJbovpHpobUnLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coMTIzKVxyXG4gICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnoa7lrponKVxyXG4gICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgIHVybDogJy9wYWdlcy9jb21waWxlJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSBlbHNlIGlmIChyZXMuY2FuY2VsKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCflj5bmtognKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19