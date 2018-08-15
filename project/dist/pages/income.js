'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _tab_income = require('./../components/tab_income.js');

var _tab_income2 = _interopRequireDefault(_tab_income);

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "tab-income": { "xmlns:v-bind": "", "v-bind:content.sync": "init" } }, _this.$events = {}, _this.components = {
      'tab-income': _tab_income2.default
    }, _this.props = {}, _this.methods = {
      tabClick: function tabClick(e) {
        var current = e.currentTarget.id || 0;
        this.init = e.currentTarget.dataset.list;
        this.activeIndex = current;
      }
    }, _this.data = {
      activeIndex: 0,
      init: null,
      content: [{
        tabs: '收入明细',
        list: [{
          id: '123450',
          title: '付费回答-xxxx什么是相对地址...',
          money: '10',
          ask: '07-28'
        }, {
          id: '123451',
          title: '付费回答-xxxx什么是相对地址...',
          money: '10',
          ask: '07-28'
        }]
      }, {
        tabs: '提现记录',
        list: [{
          id: '123450',
          title: '付费回答-xxxx什么是相对地址...',
          money: '10',
          ask: '07-29'
        }, {
          id: '123451',
          title: '付费回答-xxxx什么是相对地址...',
          money: '10',
          ask: '07-28'
        }, {
          id: '123452',
          title: '付费回答-xxxx什么是相对地址...',
          money: '10',
          ask: '07-28'
        }, {
          id: '123453',
          title: '付费回答-xxxx什么是相对地址...',
          money: '10',
          ask: '07-28'
        }]
      }]
    }, _this.config = {
      navigationBarTitleText: '账户资金'
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(options) {
      this.init = this.content[this.activeIndex].list;
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/income'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluY29tZS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsIlRhYmluY29tZSIsInByb3BzIiwibWV0aG9kcyIsInRhYkNsaWNrIiwiZSIsImN1cnJlbnQiLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCJpbml0IiwiZGF0YXNldCIsImxpc3QiLCJhY3RpdmVJbmRleCIsImRhdGEiLCJjb250ZW50IiwidGFicyIsInRpdGxlIiwibW9uZXkiLCJhc2siLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0Iiwib3B0aW9ucyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNwQkMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMsY0FBYSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHVCQUFzQixNQUF6QyxFQUFkLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1Ysb0JBQWNDO0FBREosSyxRQUdaQyxLLEdBQU8sRSxRQUNQQyxPLEdBQVU7QUFDUkMsY0FEUSxvQkFDQ0MsQ0FERCxFQUNJO0FBQ1YsWUFBSUMsVUFBVUQsRUFBRUUsYUFBRixDQUFnQkMsRUFBaEIsSUFBc0IsQ0FBcEM7QUFDQSxhQUFLQyxJQUFMLEdBQVlKLEVBQUVFLGFBQUYsQ0FBZ0JHLE9BQWhCLENBQXdCQyxJQUFwQztBQUNBLGFBQUtDLFdBQUwsR0FBbUJOLE9BQW5CO0FBQ0Q7QUFMTyxLLFFBVVZPLEksR0FBSztBQUNIRCxtQkFBYSxDQURWO0FBRUhILFlBQU0sSUFGSDtBQUdISyxlQUFTLENBQUM7QUFDUkMsY0FBTSxNQURFO0FBRVJKLGNBQU0sQ0FDSjtBQUNFSCxjQUFJLFFBRE47QUFFRVEsaUJBQU8scUJBRlQ7QUFHRUMsaUJBQU8sSUFIVDtBQUlFQyxlQUFLO0FBSlAsU0FESSxFQU9KO0FBQ0VWLGNBQUksUUFETjtBQUVFUSxpQkFBTyxxQkFGVDtBQUdFQyxpQkFBTyxJQUhUO0FBSUVDLGVBQUs7QUFKUCxTQVBJO0FBRkUsT0FBRCxFQWdCVDtBQUNFSCxjQUFNLE1BRFI7QUFFRUosY0FBTSxDQUNKO0FBQ0VILGNBQUksUUFETjtBQUVFUSxpQkFBTyxxQkFGVDtBQUdFQyxpQkFBTyxJQUhUO0FBSUVDLGVBQUs7QUFKUCxTQURJLEVBT0o7QUFDRVYsY0FBSSxRQUROO0FBRUVRLGlCQUFPLHFCQUZUO0FBR0VDLGlCQUFPLElBSFQ7QUFJRUMsZUFBSztBQUpQLFNBUEksRUFhSjtBQUNFVixjQUFJLFFBRE47QUFFRVEsaUJBQU8scUJBRlQ7QUFHRUMsaUJBQU8sSUFIVDtBQUlFQyxlQUFLO0FBSlAsU0FiSSxFQW1CSjtBQUNFVixjQUFJLFFBRE47QUFFRVEsaUJBQU8scUJBRlQ7QUFHRUMsaUJBQU8sSUFIVDtBQUlFQyxlQUFLO0FBSlAsU0FuQkk7QUFGUixPQWhCUztBQUhOLEssUUFnRExDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSzs7Ozs7MkJBbkRGQyxPLEVBQVM7QUFDZCxXQUFLWixJQUFMLEdBQVksS0FBS0ssT0FBTCxDQUFhLEtBQUtGLFdBQWxCLEVBQStCRCxJQUEzQztBQUNEOzs7O0VBakJnQ1csZUFBS0MsSTs7a0JBQW5CM0IsSyIsImZpbGUiOiJpbmNvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IFRhYmluY29tZSBmcm9tICcuLi9jb21wb25lbnRzL3RhYl9pbmNvbWUnXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1widGFiLWluY29tZVwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6Y29udGVudC5zeW5jXCI6XCJpbml0XCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgICd0YWItaW5jb21lJzogVGFiaW5jb21lXHJcbiAgfVxyXG4gIHByb3BzPSB7fVxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICB0YWJDbGljayhlKSB7XHJcbiAgICAgIGxldCBjdXJyZW50ID0gZS5jdXJyZW50VGFyZ2V0LmlkIHx8IDBcclxuICAgICAgdGhpcy5pbml0ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQubGlzdFxyXG4gICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gY3VycmVudFxyXG4gICAgfVxyXG4gIH1cclxuICBvbkxvYWQob3B0aW9ucykge1xyXG4gICAgdGhpcy5pbml0ID0gdGhpcy5jb250ZW50W3RoaXMuYWN0aXZlSW5kZXhdLmxpc3RcclxuICB9XHJcbiAgZGF0YT17XHJcbiAgICBhY3RpdmVJbmRleDogMCxcclxuICAgIGluaXQ6IG51bGwsXHJcbiAgICBjb250ZW50OiBbe1xyXG4gICAgICB0YWJzOiAn5pS25YWl5piO57uGJyxcclxuICAgICAgbGlzdDogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAnMTIzNDUwJyxcclxuICAgICAgICAgIHRpdGxlOiAn5LuY6LS55Zue562ULXh4eHjku4DkuYjmmK/nm7jlr7nlnLDlnYAuLi4nLFxyXG4gICAgICAgICAgbW9uZXk6ICcxMCcsXHJcbiAgICAgICAgICBhc2s6ICcwNy0yOCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAnMTIzNDUxJyxcclxuICAgICAgICAgIHRpdGxlOiAn5LuY6LS55Zue562ULXh4eHjku4DkuYjmmK/nm7jlr7nlnLDlnYAuLi4nLFxyXG4gICAgICAgICAgbW9uZXk6ICcxMCcsXHJcbiAgICAgICAgICBhc2s6ICcwNy0yOCdcclxuICAgICAgICB9XVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGFiczogJ+aPkOeOsOiusOW9lScsXHJcbiAgICAgIGxpc3Q6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogJzEyMzQ1MCcsXHJcbiAgICAgICAgICB0aXRsZTogJ+S7mOi0ueWbnuetlC14eHh45LuA5LmI5piv55u45a+55Zyw5Z2ALi4uJyxcclxuICAgICAgICAgIG1vbmV5OiAnMTAnLFxyXG4gICAgICAgICAgYXNrOiAnMDctMjknXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogJzEyMzQ1MScsXHJcbiAgICAgICAgICB0aXRsZTogJ+S7mOi0ueWbnuetlC14eHh45LuA5LmI5piv55u45a+55Zyw5Z2ALi4uJyxcclxuICAgICAgICAgIG1vbmV5OiAnMTAnLFxyXG4gICAgICAgICAgYXNrOiAnMDctMjgnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogJzEyMzQ1MicsXHJcbiAgICAgICAgICB0aXRsZTogJ+S7mOi0ueWbnuetlC14eHh45LuA5LmI5piv55u45a+55Zyw5Z2ALi4uJyxcclxuICAgICAgICAgIG1vbmV5OiAnMTAnLFxyXG4gICAgICAgICAgYXNrOiAnMDctMjgnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogJzEyMzQ1MycsXHJcbiAgICAgICAgICB0aXRsZTogJ+S7mOi0ueWbnuetlC14eHh45LuA5LmI5piv55u45a+55Zyw5Z2ALi4uJyxcclxuICAgICAgICAgIG1vbmV5OiAnMTAnLFxyXG4gICAgICAgICAgYXNrOiAnMDctMjgnXHJcbiAgICAgICAgfV1cclxuICAgIH1dXHJcbiAgfVxyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfotKbmiLfotYTph5EnXHJcbiAgfVxyXG59XHJcbiJdfQ==