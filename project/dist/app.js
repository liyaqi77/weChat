'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  // 配置信息
  function _default() {
    _classCallCheck(this, _default);

    // 引入插件
    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      // 页面列表
      pages: ['pages/tutor', 'pages/offline_act', 'pages/index', 'pages/my_tutor', 'pages/my_question', 'pages/quest_detail', 'pages/apply', 'pages/perhome', 'pages/compile', 'pages/mine', 'pages/meet_mine', 'pages/income'],
      // window 参数设置
      window: {
        backgroundTextStyle: 'light', // 下拉背景字体、loading 图的样式，仅支持 dark/light
        backgroundColor: '#979797', // 窗口的背景颜色
        navigationBarBackgroundColor: '#3385FF', // 导航栏背景颜色
        navigationBarTitleText: '惠答', // 导航栏标题文字内容
        navigationBarTextStyle: '#fff', // 导航栏标题颜色
        enablePullDownRefresh: true, // 是否开启下拉刷新
        onReachBottomDistance: 50 // 页面上拉触底事件触发时距页面底部距离，单位为px
      },
      // 网络超时时间
      networkTimeout: {
        request: 3000
      },
      tabBar: {
        color: '#000',
        selectedColor: '#1296db',
        borderStyle: 'white',
        position: 'bottom',
        list: [{
          pagePath: 'pages/tutor',
          iconPath: 'images/attention.png',
          selectedIconPath: 'images/attention1.png',
          text: '动态'
        }, {
          pagePath: 'pages/mine',
          iconPath: 'images/tutor.png',
          selectedIconPath: 'images/tutor1.png',
          text: '导师'
        }, {
          pagePath: 'pages/index',
          iconPath: 'images/my.png',
          selectedIconPath: 'images/my1.png',
          text: '我的'
        }]
      }
    };
    _this.globalData = {
      g_isPlaying: false
    };
    _this.use('requestfix');
    _this.use('promisify');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // 小程序启动之后 触发
                console.log('start program');

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLaunch() {
        return _ref.apply(this, arguments);
      }

      return onLaunch;
    }()
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJlbmFibGVQdWxsRG93blJlZnJlc2giLCJvblJlYWNoQm90dG9tRGlzdGFuY2UiLCJuZXR3b3JrVGltZW91dCIsInJlcXVlc3QiLCJ0YWJCYXIiLCJjb2xvciIsInNlbGVjdGVkQ29sb3IiLCJib3JkZXJTdHlsZSIsInBvc2l0aW9uIiwibGlzdCIsInBhZ2VQYXRoIiwiaWNvblBhdGgiLCJzZWxlY3RlZEljb25QYXRoIiwidGV4dCIsImdsb2JhbERhdGEiLCJnX2lzUGxheWluZyIsInVzZSIsImNvbnNvbGUiLCJsb2ciLCJ3ZXB5IiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUFHRTtBQThEQSxzQkFBZTtBQUFBOztBQUViO0FBRmE7O0FBQUEsVUE3RGZBLE1BNkRlLEdBN0ROO0FBQ1A7QUFDQUMsYUFBTyxDQUNMLGFBREssRUFFTCxtQkFGSyxFQUdMLGFBSEssRUFJTCxnQkFKSyxFQUtMLG1CQUxLLEVBTUwsb0JBTkssRUFPTCxhQVBLLEVBUUwsZUFSSyxFQVNMLGVBVEssRUFVTCxZQVZLLEVBV0wsaUJBWEssRUFZTCxjQVpLLENBRkE7QUFnQlA7QUFDQUMsY0FBUTtBQUNOQyw2QkFBcUIsT0FEZixFQUN3QjtBQUM5QkMseUJBQWlCLFNBRlgsRUFFc0I7QUFDNUJDLHNDQUE4QixTQUh4QixFQUdtQztBQUN6Q0MsZ0NBQXdCLElBSmxCLEVBSXdCO0FBQzlCQyxnQ0FBd0IsTUFMbEIsRUFLMEI7QUFDaENDLCtCQUF1QixJQU5qQixFQU11QjtBQUM3QkMsK0JBQXVCLEVBUGpCLENBT29CO0FBUHBCLE9BakJEO0FBMEJQO0FBQ0FDLHNCQUFnQjtBQUNkQyxpQkFBUztBQURLLE9BM0JUO0FBOEJQQyxjQUFRO0FBQ05DLGVBQU8sTUFERDtBQUVOQyx1QkFBZSxTQUZUO0FBR05DLHFCQUFhLE9BSFA7QUFJTkMsa0JBQVUsUUFKSjtBQUtOQyxjQUFNLENBQ0o7QUFDRUMsb0JBQVUsYUFEWjtBQUVFQyxvQkFBVSxzQkFGWjtBQUdFQyw0QkFBa0IsdUJBSHBCO0FBSUVDLGdCQUFNO0FBSlIsU0FESSxFQU9KO0FBQ0VILG9CQUFVLFlBRFo7QUFFRUMsb0JBQVUsa0JBRlo7QUFHRUMsNEJBQWtCLG1CQUhwQjtBQUlFQyxnQkFBTTtBQUpSLFNBUEksRUFhSjtBQUNFSCxvQkFBVSxhQURaO0FBRUVDLG9CQUFVLGVBRlo7QUFHRUMsNEJBQWtCLGdCQUhwQjtBQUlFQyxnQkFBTTtBQUpSLFNBYkk7QUFMQTtBQTlCRCxLQTZETTtBQUFBLFVBSGZDLFVBR2UsR0FIRjtBQUNYQyxtQkFBYTtBQURGLEtBR0U7QUFHYixVQUFLQyxHQUFMLENBQVMsWUFBVDtBQUNBLFVBQUtBLEdBQUwsQ0FBUyxXQUFUO0FBSmE7QUFLZDs7Ozs7Ozs7OztBQUdDO0FBQ0FDLHdCQUFRQyxHQUFSLENBQVksZUFBWjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXhFeUJDLGVBQUtDLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcbiAgLy8g6YWN572u5L+h5oGvXG4gIGNvbmZpZyA9IHtcbiAgICAvLyDpobXpnaLliJfooahcbiAgICBwYWdlczogW1xuICAgICAgJ3BhZ2VzL3R1dG9yJyxcbiAgICAgICdwYWdlcy9vZmZsaW5lX2FjdCcsXG4gICAgICAncGFnZXMvaW5kZXgnLFxuICAgICAgJ3BhZ2VzL215X3R1dG9yJyxcbiAgICAgICdwYWdlcy9teV9xdWVzdGlvbicsXG4gICAgICAncGFnZXMvcXVlc3RfZGV0YWlsJyxcbiAgICAgICdwYWdlcy9hcHBseScsXG4gICAgICAncGFnZXMvcGVyaG9tZScsXG4gICAgICAncGFnZXMvY29tcGlsZScsXG4gICAgICAncGFnZXMvbWluZScsXG4gICAgICAncGFnZXMvbWVldF9taW5lJyxcbiAgICAgICdwYWdlcy9pbmNvbWUnXG4gICAgXSxcbiAgICAvLyB3aW5kb3cg5Y+C5pWw6K6+572uXG4gICAgd2luZG93OiB7XG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLCAvLyDkuIvmi4nog4zmma/lrZfkvZPjgIFsb2FkaW5nIOWbvueahOagt+W8j++8jOS7heaUr+aMgSBkYXJrL2xpZ2h0XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjOTc5Nzk3JywgLy8g56qX5Y+j55qE6IOM5pmv6aKc6ImyXG4gICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnIzMzODVGRicsIC8vIOWvvOiIquagj+iDjOaZr+minOiJslxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aDoOetlCcsIC8vIOWvvOiIquagj+agh+mimOaWh+Wtl+WGheWuuVxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJyNmZmYnLCAvLyDlr7zoiKrmoI/moIfpopjpopzoibJcbiAgICAgIGVuYWJsZVB1bGxEb3duUmVmcmVzaDogdHJ1ZSwgLy8g5piv5ZCm5byA5ZCv5LiL5ouJ5Yi35pawXG4gICAgICBvblJlYWNoQm90dG9tRGlzdGFuY2U6IDUwIC8vIOmhtemdouS4iuaLieinpuW6leS6i+S7tuinpuWPkeaXtui3nemhtemdouW6lemDqOi3neemu++8jOWNleS9jeS4unB4XG4gICAgfSxcbiAgICAvLyDnvZHnu5zotoXml7bml7bpl7RcbiAgICBuZXR3b3JrVGltZW91dDoge1xuICAgICAgcmVxdWVzdDogMzAwMFxuICAgIH0sXG4gICAgdGFiQmFyOiB7XG4gICAgICBjb2xvcjogJyMwMDAnLFxuICAgICAgc2VsZWN0ZWRDb2xvcjogJyMxMjk2ZGInLFxuICAgICAgYm9yZGVyU3R5bGU6ICd3aGl0ZScsXG4gICAgICBwb3NpdGlvbjogJ2JvdHRvbScsXG4gICAgICBsaXN0OiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL3R1dG9yJyxcbiAgICAgICAgICBpY29uUGF0aDogJ2ltYWdlcy9hdHRlbnRpb24ucG5nJyxcbiAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnaW1hZ2VzL2F0dGVudGlvbjEucG5nJyxcbiAgICAgICAgICB0ZXh0OiAn5Yqo5oCBJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9taW5lJyxcbiAgICAgICAgICBpY29uUGF0aDogJ2ltYWdlcy90dXRvci5wbmcnLFxuICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICdpbWFnZXMvdHV0b3IxLnBuZycsXG4gICAgICAgICAgdGV4dDogJ+WvvOW4iCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvaW5kZXgnLFxuICAgICAgICAgIGljb25QYXRoOiAnaW1hZ2VzL215LnBuZycsXG4gICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJ2ltYWdlcy9teTEucG5nJyxcbiAgICAgICAgICB0ZXh0OiAn5oiR55qEJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9XG5cbiAgZ2xvYmFsRGF0YSA9IHtcbiAgICBnX2lzUGxheWluZzogZmFsc2VcbiAgfVxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoKVxuICAgIC8vIOW8leWFpeaPkuS7tlxuICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4JylcbiAgICB0aGlzLnVzZSgncHJvbWlzaWZ5JylcbiAgfVxuXG4gIGFzeW5jIG9uTGF1bmNoKCkge1xuICAgIC8vIOWwj+eoi+W6j+WQr+WKqOS5i+WQjiDop6blj5FcbiAgICBjb25zb2xlLmxvZygnc3RhcnQgcHJvZ3JhbScpXG4gIH1cbn1cbiJdfQ==