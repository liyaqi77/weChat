'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _action = require('./../action/action.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var interfaces = {
  login: function login() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var localUserInfo, loginData, userinfoRaw, status, res, userinfo;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // 获取本地缓存的用户信息
              localUserInfo = _wepy2.default.getStorageSync('userinfo');

              if (!localUserInfo) {
                _context.next = 3;
                break;
              }

              return _context.abrupt('return', localUserInfo);

            case 3:
              _wepy2.default.setStorageSync('_isLogin', false);
              _wepy2.default.setStorageSync('_isWebSocketOpen', false);

              // 获得登录数据
              loginData = {};
              _context.prev = 6;
              _context.next = 9;
              return _wepy2.default.login();

            case 9:
              loginData = _context.sent;
              _context.next = 16;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context['catch'](6);

              console.log('调用登录接口wepy.login出错');
              console.log(_context.t0.message);

            case 16:

              // 获得微信提供的用户信息
              userinfoRaw = {};
              _context.prev = 17;

              if (!loginData.code) {
                _context.next = 28;
                break;
              }

              _context.next = 21;
              return _wepy2.default.getUserInfo();

            case 21:
              userinfoRaw = _context.sent;

              userinfoRaw.code = loginData.code;

              console.log('userinfoRaw', userinfoRaw);
              console.log('userInfo', userinfoRaw.userInfo);

              _wepy2.default.setStorageSync('_isLogin', true);

              _context.next = 29;
              break;

            case 28:
              console.log('登录时获取用户code失败！');

            case 29:
              _context.next = 58;
              break;

            case 31:
              _context.prev = 31;
              _context.t1 = _context['catch'](17);
              _context.next = 35;
              return _wepy2.default.showModal({
                title: '提示',
                content: '\u767B\u5F55\u4E00\u4E0B\u561B',
                cancelText: '好的',
                cancelColor: '#3CC51F',
                confirmText: '不了',
                confirmColor: '#666666'
              });

            case 35:
              status = _context.sent;

              if (!status.cancel) {
                _context.next = 57;
                break;
              }

              _context.next = 39;
              return _wepy2.default.openSetting();

            case 39:
              res = _context.sent;

              if (!(res && res.authSetting['scope.userInfo'])) {
                _context.next = 54;
                break;
              }

              _context.prev = 41;
              _context.next = 44;
              return _wepy2.default.getUserInfo();

            case 44:
              userinfoRaw = _context.sent;

              userinfoRaw.code = loginData.code;
              _wepy2.default.setStorageSync('_isLogin', true);
              _context.next = 52;
              break;

            case 49:
              _context.prev = 49;
              _context.t2 = _context['catch'](41);
              return _context.abrupt('return');

            case 52:
              _context.next = 55;
              break;

            case 54:
              return _context.abrupt('return');

            case 55:
              _context.next = 58;
              break;

            case 57:
              return _context.abrupt('return');

            case 58:

              // 获取后台服务器提供的用户信息
              userinfo = {};
              _context.prev = 59;
              _context.next = 62;
              return (0, _action.getUserInfo)(userinfoRaw.code, userinfoRaw.encryptedData, userinfoRaw.iv);

            case 62:
              userinfo = _context.sent;

              if (typeof userinfo === 'string') {
                userinfo = JSON.parse(userinfo.replace(/(^\s+)|(\s+$)/g, ''));
              }

              // 合并对象，获得用户全部信息
              // Object.assign(userinfo, userinfoRaw.userInfo)

              console.log('userinfo', userinfo);
              _context.next = 72;
              break;

            case 67:
              _context.prev = 67;
              _context.t3 = _context['catch'](59);

              console.log('请求获取服务端登录态失败');
              console.log(_context.t3.message);
              console.log(_context.t3.stack);

            case 72:
              _context.prev = 72;
              _context.next = 75;
              return _wepy2.default.setStorage({
                key: 'userinfo',
                data: userinfo
              });

            case 75:
              _context.next = 82;
              break;

            case 77:
              _context.prev = 77;
              _context.t4 = _context['catch'](72);

              console.log('客户端存储会话信息失败');
              console.log(_context.t4.message);
              console.log(_context.t4.stack);

            case 82:
              return _context.abrupt('return', userinfo);

            case 83:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[6, 12], [17, 31], [41, 49], [59, 67], [72, 77]]);
    }))();
  }
};

exports.default = interfaces;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImludGVyZmFjZXMiLCJsb2dpbiIsImxvY2FsVXNlckluZm8iLCJ3ZXB5IiwiZ2V0U3RvcmFnZVN5bmMiLCJzZXRTdG9yYWdlU3luYyIsImxvZ2luRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwidXNlcmluZm9SYXciLCJjb2RlIiwiZ2V0VXNlckluZm8iLCJ1c2VySW5mbyIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsImNhbmNlbFRleHQiLCJjYW5jZWxDb2xvciIsImNvbmZpcm1UZXh0IiwiY29uZmlybUNvbG9yIiwic3RhdHVzIiwiY2FuY2VsIiwib3BlblNldHRpbmciLCJyZXMiLCJhdXRoU2V0dGluZyIsInVzZXJpbmZvIiwiZW5jcnlwdGVkRGF0YSIsIml2IiwiSlNPTiIsInBhcnNlIiwicmVwbGFjZSIsInN0YWNrIiwic2V0U3RvcmFnZSIsImtleSIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU1BLGFBQWE7QUFDWEMsT0FEVyxtQkFDSDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNaO0FBQ0lDLDJCQUZRLEdBRVFDLGVBQUtDLGNBQUwsQ0FBb0IsVUFBcEIsQ0FGUjs7QUFBQSxtQkFHVEYsYUFIUztBQUFBO0FBQUE7QUFBQTs7QUFBQSwrQ0FJSEEsYUFKRzs7QUFBQTtBQU1aQyw2QkFBS0UsY0FBTCxDQUFvQixVQUFwQixFQUFnQyxLQUFoQztBQUNBRiw2QkFBS0UsY0FBTCxDQUFvQixrQkFBcEIsRUFBd0MsS0FBeEM7O0FBRUE7QUFDSUMsdUJBVlEsR0FVSSxFQVZKO0FBQUE7QUFBQTtBQUFBLHFCQVlRSCxlQUFLRixLQUFMLEVBWlI7O0FBQUE7QUFZVkssdUJBWlU7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFjVkMsc0JBQVFDLEdBQVIsQ0FBWSxvQkFBWjtBQUNBRCxzQkFBUUMsR0FBUixDQUFZLFlB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bSAnd2VweSdcclxuaW1wb3J0IHtnZXRVc2VySW5mb30gZnJvbSAnLi4vYWN0aW9uL2FjdGlvbidcclxuXHJcbmNvbnN0IGludGVyZmFjZXMgPSB7XHJcbiAgYXN5bmMgbG9naW4oKSB7XHJcbiAgICAvLyDojrflj5bmnKzlnLDnvJPlrZjnmoTnlKjmiLfkv6Hmga9cclxuICAgIGxldCBsb2NhbFVzZXJJbmZvID0gd2VweS5nZXRTdG9yYWdlU3luYygndXNlcmluZm8nKVxyXG4gICAgaWYobG9jYWxVc2VySW5mbyl7XHJcbiAgICAgIHJldHVybiBsb2NhbFVzZXJJbmZvXHJcbiAgICB9XHJcbiAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdfaXNMb2dpbicsIGZhbHNlKVxyXG4gICAgd2VweS5zZXRTdG9yYWdlU3luYygnX2lzV2ViU29ja2V0T3BlbicsIGZhbHNlKVxyXG5cclxuICAgIC8vIOiOt+W+l+eZu+W9leaVsOaNrlxyXG4gICAgbGV0IGxvZ2luRGF0YSA9IHt9XHJcbiAgICB0cnkge1xyXG4gICAgICBsb2dpbkRhdGEgPSBhd2FpdCB3ZXB5LmxvZ2luKClcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coJ+iwg+eUqOeZu+W9leaOpeWPo3dlcHkubG9naW7lh7rplJknKVxyXG4gICAgICBjb25zb2xlLmxvZyhlLm1lc3NhZ2UpXHJcbiAgICB9XHJcblxyXG4gICAgLy8g6I635b6X5b6u5L+h5o+Q5L6b55qE55So5oi35L+h5oGvXHJcbiAgICBsZXQgdXNlcmluZm9SYXcgPSB7fVxyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKGxvZ2luRGF0YS5jb2RlKSB7XHJcbiAgICAgICAgdXNlcmluZm9SYXcgPSBhd2FpdCB3ZXB5LmdldFVzZXJJbmZvKClcclxuICAgICAgICB1c2VyaW5mb1Jhdy5jb2RlID0gbG9naW5EYXRhLmNvZGVcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3VzZXJpbmZvUmF3JywgdXNlcmluZm9SYXcpXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3VzZXJJbmZvJywgdXNlcmluZm9SYXcudXNlckluZm8pXHJcblxyXG4gICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ19pc0xvZ2luJywgdHJ1ZSlcclxuXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+eZu+W9leaXtuiOt+WPlueUqOaIt2NvZGXlpLHotKXvvIEnKVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIC8vIOS6jOasoemHjeaWsOeZu+W9lSjlj6/orr7orqHkuIDkuKrnmbvlvZXmjInpkq7vvIzku6Xmlrnkvr/kuo7nlKjmiLfpmo/ml7bov5vooYzkuozmrKHph43mlrDnmbvlvZUpXHJcbiAgICAgIGxldCBzdGF0dXMgPSBhd2FpdCB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgIGNvbnRlbnQ6IGDnmbvlvZXkuIDkuIvlmJtgLFxyXG4gICAgICAgIGNhbmNlbFRleHQ6ICflpb3nmoQnLFxyXG4gICAgICAgIGNhbmNlbENvbG9yOiAnIzNDQzUxRicsXHJcbiAgICAgICAgY29uZmlybVRleHQ6ICfkuI3kuoYnLFxyXG4gICAgICAgIGNvbmZpcm1Db2xvcjogJyM2NjY2NjYnXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBpZiAoc3RhdHVzLmNhbmNlbCkgeyAvLyDlgYflpoLlhYHorrjph43mlrDnmbvlvZVcclxuICAgICAgICBsZXQgcmVzID0gYXdhaXQgd2VweS5vcGVuU2V0dGluZygpXHJcbiAgICAgICAgaWYgKHJlcyAmJiByZXMuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJJbmZvJ10pIHtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHVzZXJpbmZvUmF3ID0gYXdhaXQgd2VweS5nZXRVc2VySW5mbygpXHJcbiAgICAgICAgICAgIHVzZXJpbmZvUmF3LmNvZGUgPSBsb2dpbkRhdGEuY29kZVxyXG4gICAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdfaXNMb2dpbicsIHRydWUpXHJcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAvLyBhd2FpdCB3ZXB5LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAvLyAgIHRpdGxlOiAn5rKh5pyJ5o6I5p2DJ1xyXG4gICAgICAgICAgLy8gfSlcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBhd2FpdCB3ZXB5LnNob3dUb2FzdCh7XHJcbiAgICAgICAgLy8gICB0aXRsZTogJ+W7uuiurueZu+W9leWTpidcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6I635Y+W5ZCO5Y+w5pyN5Yqh5Zmo5o+Q5L6b55qE55So5oi35L+h5oGvXHJcbiAgICBsZXQgdXNlcmluZm8gPSB7fVxyXG4gICAgdHJ5IHtcclxuXHJcbiAgICAgIHVzZXJpbmZvID0gYXdhaXQgZ2V0VXNlckluZm8odXNlcmluZm9SYXcuY29kZSwgdXNlcmluZm9SYXcuZW5jcnlwdGVkRGF0YSwgdXNlcmluZm9SYXcuaXYpXHJcbiAgICAgIGlmICh0eXBlb2YgdXNlcmluZm8gPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgdXNlcmluZm8gPSBKU09OLnBhcnNlKHVzZXJpbmZvLnJlcGxhY2UoLyheXFxzKyl8KFxccyskKS9nLCAnJykpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIOWQiOW5tuWvueixoe+8jOiOt+W+l+eUqOaIt+WFqOmDqOS/oeaBr1xyXG4gICAgICAvLyBPYmplY3QuYXNzaWduKHVzZXJpbmZvLCB1c2VyaW5mb1Jhdy51c2VySW5mbylcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKCd1c2VyaW5mbycsIHVzZXJpbmZvKVxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZygn6K+35rGC6I635Y+W5pyN5Yqh56uv55m75b2V5oCB5aSx6LSlJylcclxuICAgICAgY29uc29sZS5sb2coZS5tZXNzYWdlKVxyXG4gICAgICBjb25zb2xlLmxvZyhlLnN0YWNrKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOWwhueUqOaIt+S/oeaBr+S/neWtmOWcqOacrOWcsFxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgd2VweS5zZXRTdG9yYWdlKHtcclxuICAgICAgICBrZXk6ICd1c2VyaW5mbycsXHJcbiAgICAgICAgZGF0YTogdXNlcmluZm9cclxuICAgICAgfSlcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coJ+WuouaIt+err+WtmOWCqOS8muivneS/oeaBr+Wksei0pScpXHJcbiAgICAgIGNvbnNvbGUubG9nKGUubWVzc2FnZSlcclxuICAgICAgY29uc29sZS5sb2coZS5zdGFjaylcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdXNlcmluZm9cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGludGVyZmFjZXNcclxuIl19