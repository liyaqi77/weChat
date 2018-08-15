'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('./../npm/axios/index.js');

var _axios2 = _interopRequireDefault(_axios);

var _adapter = require('./../npm/wepy-plugin-axios/dist/adapter.js');

var _adapter2 = _interopRequireDefault(_adapter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// adapter 的初始化一定要在任何其它的 axios.create 之前执行
var adapter = (0, _adapter2.default)(_axios2.default);

exports.default = _axios2.default.create({
  adapter: adapter // 此属性为可以在小程序中使用 axios 的关键
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF4aW9zLmpzIl0sIm5hbWVzIjpbImFkYXB0ZXIiLCJheGlvcyIsImNyZWF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUE7QUFDQSxJQUFNQSxVQUFVLHVCQUFpQkMsZUFBakIsQ0FBaEI7O2tCQUVlQSxnQkFBTUMsTUFBTixDQUFhO0FBQzFCRixXQUFTQSxPQURpQixDQUNKO0FBREksQ0FBYixDIiwiZmlsZSI6ImF4aW9zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHdlcHlBeGlvc0FkYXB0ZXIgZnJvbSAnd2VweS1wbHVnaW4tYXhpb3MvZGlzdC9hZGFwdGVyJ1xuXG4vLyBhZGFwdGVyIOeahOWIneWni+WMluS4gOWumuimgeWcqOS7u+S9leWFtuWug+eahCBheGlvcy5jcmVhdGUg5LmL5YmN5omn6KGMXG5jb25zdCBhZGFwdGVyID0gd2VweUF4aW9zQWRhcHRlcihheGlvcylcblxuZXhwb3J0IGRlZmF1bHQgYXhpb3MuY3JlYXRlKHtcbiAgYWRhcHRlcjogYWRhcHRlciAgICAgIC8vIOatpOWxnuaAp+S4uuWPr+S7peWcqOWwj+eoi+W6j+S4reS9v+eUqCBheGlvcyDnmoTlhbPplK5cbn0pXG4iXX0=