'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _upPhoto = require('./../components/up-photo.js');

var _upPhoto2 = _interopRequireDefault(_upPhoto);

var _nickname = require('./../components/nickname.js');

var _nickname2 = _interopRequireDefault(_nickname);

var _job = require('./../components/job.js');

var _job2 = _interopRequireDefault(_job);

var _location = require('./../components/location.js');

var _location2 = _interopRequireDefault(_location);

var _mine = require('./../components/mine.js');

var _mine2 = _interopRequireDefault(_mine);

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "up-photo": {}, "nick-name": { "xmlns:wx": "" }, "job-tit": {}, "local-add": {}, "Mine-text": {} }, _this.$events = {}, _this.components = {
      'up-photo': _upPhoto2.default,
      'nick-name': _nickname2.default,
      'job-tit': _job2.default,
      'local-add': _location2.default,
      'Mine-text': _mine2.default
    }, _this.data = {
      files: '../images/pic.jpg',
      idNum: 1
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(options) {
      var id = Number(options.id);
      this.idNum = id;
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/perhome'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcmhvbWUuanMiXSwibmFtZXMiOlsiSW5kZXgiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJVcHBob3QiLCJOaWNrbmFtZSIsIkpvYiIsIkxvY2FsIiwiTWluZSIsImRhdGEiLCJmaWxlcyIsImlkTnVtIiwibWV0aG9kcyIsIm9wdGlvbnMiLCJpZCIsIk51bWJlciIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ3BCQyxPLEdBQVUsRSxRQUNiQyxNLEdBQVMsRUFBQyxZQUFXLEVBQVosRUFBZSxhQUFZLEVBQUMsWUFBVyxFQUFaLEVBQTNCLEVBQTJDLFdBQVUsRUFBckQsRUFBd0QsYUFBWSxFQUFwRSxFQUF1RSxhQUFZLEVBQW5GLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1Isa0JBQVlDLGlCQURKO0FBRVIsbUJBQWFDLGtCQUZMO0FBR1IsaUJBQVdDLGFBSEg7QUFJUixtQkFBYUMsa0JBSkw7QUFLUixtQkFBYUM7QUFMTCxLLFFBT1ZDLEksR0FBTTtBQUNKQyxhQUFPLG1CQURIO0FBRUpDLGFBQU87QUFGSCxLLFFBSU5DLE8sR0FBUSxFOzs7OzsyQkFDREMsTyxFQUFTO0FBQ2QsVUFBSUMsS0FBS0MsT0FBT0YsUUFBUUMsRUFBZixDQUFUO0FBQ0EsV0FBS0gsS0FBTCxHQUFhRyxFQUFiO0FBQ0Q7Ozs7RUFuQmdDRSxlQUFLQyxJOztrQkFBbkJsQixLIiwiZmlsZSI6InBlcmhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCBVcHBob3QgZnJvbSAnLi4vY29tcG9uZW50cy91cC1waG90bydcclxuICBpbXBvcnQgTmlja25hbWUgZnJvbSAnLi4vY29tcG9uZW50cy9uaWNrbmFtZSdcclxuICBpbXBvcnQgSm9iIGZyb20gJy4uL2NvbXBvbmVudHMvam9iJ1xyXG4gIGltcG9ydCBMb2NhbCBmcm9tICcuLi9jb21wb25lbnRzL2xvY2F0aW9uJ1xyXG4gIGltcG9ydCBNaW5lIGZyb20gJy4uL2NvbXBvbmVudHMvbWluZSdcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1widXAtcGhvdG9cIjp7fSxcIm5pY2stbmFtZVwiOntcInhtbG5zOnd4XCI6XCJcIn0sXCJqb2ItdGl0XCI6e30sXCJsb2NhbC1hZGRcIjp7fSxcIk1pbmUtdGV4dFwiOnt9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgICAgJ3VwLXBob3RvJzogVXBwaG90LFxyXG4gICAgICAnbmljay1uYW1lJzogTmlja25hbWUsXHJcbiAgICAgICdqb2ItdGl0JzogSm9iLFxyXG4gICAgICAnbG9jYWwtYWRkJzogTG9jYWwsXHJcbiAgICAgICdNaW5lLXRleHQnOiBNaW5lXHJcbiAgICB9XHJcbiAgICBkYXRhPSB7XHJcbiAgICAgIGZpbGVzOiAnLi4vaW1hZ2VzL3BpYy5qcGcnLFxyXG4gICAgICBpZE51bTogMVxyXG4gICAgfVxyXG4gICAgbWV0aG9kcz17fVxyXG4gICAgb25Mb2FkKG9wdGlvbnMpIHtcclxuICAgICAgbGV0IGlkID0gTnVtYmVyKG9wdGlvbnMuaWQpXHJcbiAgICAgIHRoaXMuaWROdW0gPSBpZFxyXG4gICAgfVxyXG4gIH1cclxuIl19