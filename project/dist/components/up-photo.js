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
        var that = this;
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

  return Upphoto;
}(_wepy2.default.component);

exports.default = Upphoto;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwLXBob3RvLmpzIl0sIm5hbWVzIjpbIlVwcGhvdG8iLCJwcm9wcyIsImRhdGEiLCJmaWxlcyIsInZhbCIsIm1ldGhvZHMiLCJjaG9vc2VJbWFnZSIsImUiLCJ0aGF0Iiwid3giLCJzaXplVHlwZSIsInNvdXJjZVR5cGUiLCJzdWNjZXNzIiwicmVzIiwiY29uY2F0IiwidGVtcEZpbGVQYXRocyIsIiRhcHBseSIsInVwbG9hZEZpbGUiLCJ1cmwiLCJmaWxlUGF0aCIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInBhcnNlIiwicGF0aCIsInByZXZpZXdJbWFnZSIsIndlcHkiLCJjdXJyZW50IiwiY3VycmVudFRhcmdldCIsImlkIiwidXJscyIsInNhdmVQaWMiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJjb25maXJtIiwibmF2aWdhdGVUbyIsImNhbmNlbCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLE87Ozs7Ozs7Ozs7Ozs7O3dMQUNuQkMsSyxHQUFRLEUsUUFDUkMsSSxHQUFPO0FBQ0xDLGFBQU8sRUFERjtBQUVMQyxXQUFLO0FBRkEsSyxRQUlQQyxPLEdBQVU7QUFDUkMsbUJBQWEscUJBQVVDLENBQVYsRUFBYTtBQUN4QixZQUFJQyxPQUFPLElBQVg7QUFDQUMsV0FBR0gsV0FBSCxDQUFlO0FBQ2JJLG9CQUFVLENBQUMsVUFBRCxDQURHLEVBQ1c7QUFDeEJDLHNCQUFZLENBQUMsT0FBRCxDQUZDLEVBRVU7QUFDdkJDLG1CQUFTLGlCQUFVQyxHQUFWLEVBQWU7QUFDdEI7QUFDQUwsaUJBQUtMLEtBQUwsR0FBYUssS0FBS04sSUFBTCxDQUFVQyxLQUFWLENBQWdCVyxNQUFoQixDQUF1QkQsSUFBSUUsYUFBM0IsQ0FBYjtBQUNBUCxpQkFBS1EsTUFBTDtBQUNBUCxlQUFHUSxVQUFILENBQWM7QUFDWkMsbUJBQUssa0NBRE87QUFFWkMsd0JBQVVOLElBQUlFLGFBQUosQ0FBa0IsQ0FBbEIsQ0FGRTtBQUdaSyxvQkFBTSxXQUhNO0FBSVpSLHVCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJRLHdCQUFRQyxHQUFSLENBQVlDLEtBQUtDLEtBQUwsQ0FBV1gsSUFBSVgsSUFBZixDQUFaO0FBQ0FNLHFCQUFLSixHQUFMLEdBQVdtQixLQUFLQyxLQUFMLENBQVdYLElBQUlYLElBQWYsRUFBcUJ1QixJQUFoQztBQUNBakIscUJBQUtRLE1BQUw7QUFDRDtBQVJXLGFBQWQ7QUFVRDtBQWpCWSxTQUFmO0FBbUJELE9BdEJPO0FBdUJSVSxvQkFBYyxzQkFBU25CLENBQVQsRUFBWTtBQUN4Qm9CLHVCQUFLRCxZQUFMLENBQWtCO0FBQ2hCRSxtQkFBU3JCLEVBQUVzQixhQUFGLENBQWdCQyxFQURULEVBQ2E7QUFDN0JDLGdCQUFNLEtBQUs3QixJQUFMLENBQVVDLEtBRkEsQ0FFTTtBQUZOLFNBQWxCO0FBSUQsT0E1Qk87QUE2QlI2QixlQUFTLGlCQUFTekIsQ0FBVCxFQUFZO0FBQ25CLFlBQUlDLE9BQU8sSUFBWDtBQUNBbUIsdUJBQUtNLFNBQUwsQ0FBZTtBQUNiQyxpQkFBTyxJQURNO0FBRWJDLG1CQUFTLE9BRkk7QUFHYnZCLG1CQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJRLG9CQUFRQyxHQUFSLENBQVksR0FBWjtBQUNBLGdCQUFJVCxJQUFJdUIsT0FBUixFQUFpQjtBQUNmZixzQkFBUUMsR0FBUixDQUFZLElBQVo7QUFDQUssNkJBQUtVLFVBQUwsQ0FBZ0I7QUFDZG5CLHFCQUFLO0FBRFMsZUFBaEI7QUFHRCxhQUxELE1BS08sSUFBSUwsSUFBSXlCLE1BQVIsRUFBZ0I7QUFDckJqQixzQkFBUUMsR0FBUixDQUFZLElBQVo7QUFDRDtBQUNGO0FBYlksU0FBZjtBQWVEO0FBOUNPLEs7Ozs7RUFOeUJLLGVBQUtZLFM7O2tCQUFyQnZDLE8iLCJmaWxlIjoidXAtcGhvdG8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXBwaG90byBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICBwcm9wcyA9IHt9XHJcbiAgZGF0YSA9IHtcclxuICAgIGZpbGVzOiBbXSxcclxuICAgIHZhbDogJydcclxuICB9XHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIGNob29zZUltYWdlOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICB2YXIgdGhhdCA9IHRoaXNcclxuICAgICAgd3guY2hvb3NlSW1hZ2Uoe1xyXG4gICAgICAgIHNpemVUeXBlOiBbJ29yaWdpbmFsJ10sIC8vIOWPr+S7peaMh+WumuaYr+WOn+Wbvui/mOaYr+WOi+e8qeWbvu+8jOm7mOiupOS6jOiAhemDveaciVxyXG4gICAgICAgIHNvdXJjZVR5cGU6IFsnYWxidW0nXSwgLy8g5Y+v5Lul5oyH5a6a5p2l5rqQ5piv55u45YaM6L+Y5piv55u45py677yM6buY6K6k5LqM6ICF6YO95pyJXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgLy8g6L+U5Zue6YCJ5a6a54Wn54mH55qE5pys5Zyw5paH5Lu26Lev5b6E5YiX6KGo77yMdGVtcEZpbGVQYXRo5Y+v5Lul5L2c5Li6aW1n5qCH562+55qEc3Jj5bGe5oCn5pi+56S65Zu+54mHXHJcbiAgICAgICAgICB0aGF0LmZpbGVzID0gdGhhdC5kYXRhLmZpbGVzLmNvbmNhdChyZXMudGVtcEZpbGVQYXRocylcclxuICAgICAgICAgIHRoYXQuJGFwcGx5KClcclxuICAgICAgICAgIHd4LnVwbG9hZEZpbGUoe1xyXG4gICAgICAgICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjgwODAvYXBpL3VwbG9hZCcsXHJcbiAgICAgICAgICAgIGZpbGVQYXRoOiByZXMudGVtcEZpbGVQYXRoc1swXSxcclxuICAgICAgICAgICAgbmFtZTogJ3VwbG9hZGltZycsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UocmVzLmRhdGEpKVxyXG4gICAgICAgICAgICAgIHRoYXQudmFsID0gSlNPTi5wYXJzZShyZXMuZGF0YSkucGF0aFxyXG4gICAgICAgICAgICAgIHRoYXQuJGFwcGx5KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgcHJldmlld0ltYWdlOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgIHdlcHkucHJldmlld0ltYWdlKHtcclxuICAgICAgICBjdXJyZW50OiBlLmN1cnJlbnRUYXJnZXQuaWQsIC8vIOW9k+WJjeaYvuekuuWbvueJh+eahGh0dHDpk77mjqVcclxuICAgICAgICB1cmxzOiB0aGlzLmRhdGEuZmlsZXMgLy8g6ZyA6KaB6aKE6KeI55qE5Zu+54mHaHR0cOmTvuaOpeWIl+ihqFxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIHNhdmVQaWM6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgbGV0IHRoYXQgPSB0aGlzXHJcbiAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICB0aXRsZTogJ+aPkOekuicsXHJcbiAgICAgICAgY29udGVudDogJ+i/lOWbnue8lui+kemhtScsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygxMjMpXHJcbiAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+ehruWumicpXHJcbiAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2NvbXBpbGUnXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlcy5jYW5jZWwpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ+WPlua2iCcpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=