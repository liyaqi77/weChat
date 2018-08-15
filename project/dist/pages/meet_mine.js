'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.props = {}, _this.config = {
      navigationBarTitleText: '相见我的人'
    }, _this.data = {
      list: [{
        id: '123450',
        title: 'Johony',
        jobtitle: '阿里巴巴资深前端工程师',
        asknum: '158',
        fans: '1000',
        meetnum: '1000',
        isRead: false,
        question: '给年轻学者的基本网络技巧:',
        addres: 'Google scholar页面',
        dateadd: '10月11日下午2点北京，点击报名',
        essence: '约',
        img: '../images/pic.jpg'
      }, {
        id: '123450',
        title: 'Johony',
        jobtitle: '阿里巴巴资深前端工程师',
        asknum: '158',
        fans: '1000',
        meetnum: '1000',
        isRead: false,
        question: '给年轻学者的基本网络技巧:',
        addres: 'Google scholar页面',
        dateadd: '10月11日下午2点北京，点击报名',
        essence: '约',
        img: '../images/pic.jpg'
      }, {
        id: '123450',
        title: 'Johony',
        jobtitle: '阿里巴巴资深前端工程师',
        asknum: '158',
        fans: '1000',
        meetnum: '1000',
        isRead: false,
        question: '给年轻学者的基本网络技巧:',
        addres: 'Google scholar页面',
        dateadd: '10月11日下午2点北京，点击报名',
        essence: '约',
        img: '../images/pic.jpg'
      }]
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/meet_mine'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZXRfbWluZS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJsaXN0IiwiaWQiLCJ0aXRsZSIsImpvYnRpdGxlIiwiYXNrbnVtIiwiZmFucyIsIm1lZXRudW0iLCJpc1JlYWQiLCJxdWVzdGlvbiIsImFkZHJlcyIsImRhdGVhZGQiLCJlc3NlbmNlIiwiaW1nIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLEssR0FBTyxFLFFBQ1BDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQUs7QUFDSEMsWUFBTSxDQUNKO0FBQ0VDLFlBQUksUUFETjtBQUVFQyxlQUFPLFFBRlQ7QUFHRUMsa0JBQVUsYUFIWjtBQUlFQyxnQkFBUSxLQUpWO0FBS0VDLGNBQU0sTUFMUjtBQU1FQyxpQkFBUyxNQU5YO0FBT0VDLGdCQUFRLEtBUFY7QUFRRUMsa0JBQVUsZUFSWjtBQVNFQyxnQkFBUSxrQkFUVjtBQVVFQyxpQkFBUyxtQkFWWDtBQVdFQyxpQkFBUyxHQVhYO0FBWUVDLGFBQUs7QUFaUCxPQURJLEVBZUo7QUFDRVgsWUFBSSxRQUROO0FBRUVDLGVBQU8sUUFGVDtBQUdFQyxrQkFBVSxhQUhaO0FBSUVDLGdCQUFRLEtBSlY7QUFLRUMsY0FBTSxNQUxSO0FBTUVDLGlCQUFTLE1BTlg7QUFPRUMsZ0JBQVEsS0FQVjtBQVFFQyxrQkFBVSxlQVJaO0FBU0VDLGdCQUFRLGtCQVRWO0FBVUVDLGlCQUFTLG1CQVZYO0FBV0VDLGlCQUFTLEdBWFg7QUFZRUMsYUFBSztBQVpQLE9BZkksRUE2Qko7QUFDRVgsWUFBSSxRQUROO0FBRUVDLGVBQU8sUUFGVDtBQUdFQyxrQkFBVSxhQUhaO0FBSUVDLGdCQUFRLEtBSlY7QUFLRUMsY0FBTSxNQUxSO0FBTUVDLGlCQUFTLE1BTlg7QUFPRUMsZ0JBQVEsS0FQVjtBQVFFQyxrQkFBVSxlQVJaO0FBU0VDLGdCQUFRLGtCQVRWO0FBVUVDLGlCQUFTLG1CQVZYO0FBV0VDLGlCQUFTLEdBWFg7QUFZRUMsYUFBSztBQVpQLE9BN0JJO0FBREgsSzs7OztFQUw0QkMsZUFBS0MsSTs7a0JBQW5CbkIsSyIsImZpbGUiOiJtZWV0X21pbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIHByb3BzPSB7fVxyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnm7jop4HmiJHnmoTkuronXHJcbiAgfVxyXG4gIGRhdGE9e1xyXG4gICAgbGlzdDogW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6ICcxMjM0NTAnLFxyXG4gICAgICAgIHRpdGxlOiAnSm9ob255JyxcclxuICAgICAgICBqb2J0aXRsZTogJ+mYv+mHjOW3tOW3tOi1hOa3seWJjeerr+W3peeoi+W4iCcsXHJcbiAgICAgICAgYXNrbnVtOiAnMTU4JyxcclxuICAgICAgICBmYW5zOiAnMTAwMCcsXHJcbiAgICAgICAgbWVldG51bTogJzEwMDAnLFxyXG4gICAgICAgIGlzUmVhZDogZmFsc2UsXHJcbiAgICAgICAgcXVlc3Rpb246ICfnu5nlubTovbvlrabogIXnmoTln7rmnKznvZHnu5zmioDlt6c6JyxcclxuICAgICAgICBhZGRyZXM6ICdHb29nbGUgc2Nob2xhcumhtemdoicsXHJcbiAgICAgICAgZGF0ZWFkZDogJzEw5pyIMTHml6XkuIvljYgy54K55YyX5Lqs77yM54K55Ye75oql5ZCNJyxcclxuICAgICAgICBlc3NlbmNlOiAn57qmJyxcclxuICAgICAgICBpbWc6ICcuLi9pbWFnZXMvcGljLmpwZydcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAnMTIzNDUwJyxcclxuICAgICAgICB0aXRsZTogJ0pvaG9ueScsXHJcbiAgICAgICAgam9idGl0bGU6ICfpmL/ph4zlt7Tlt7TotYTmt7HliY3nq6/lt6XnqIvluIgnLFxyXG4gICAgICAgIGFza251bTogJzE1OCcsXHJcbiAgICAgICAgZmFuczogJzEwMDAnLFxyXG4gICAgICAgIG1lZXRudW06ICcxMDAwJyxcclxuICAgICAgICBpc1JlYWQ6IGZhbHNlLFxyXG4gICAgICAgIHF1ZXN0aW9uOiAn57uZ5bm06L275a2m6ICF55qE5Z+65pys572R57uc5oqA5benOicsXHJcbiAgICAgICAgYWRkcmVzOiAnR29vZ2xlIHNjaG9sYXLpobXpnaInLFxyXG4gICAgICAgIGRhdGVhZGQ6ICcxMOaciDEx5pel5LiL5Y2IMueCueWMl+S6rO+8jOeCueWHu+aKpeWQjScsXHJcbiAgICAgICAgZXNzZW5jZTogJ+e6picsXHJcbiAgICAgICAgaW1nOiAnLi4vaW1hZ2VzL3BpYy5qcGcnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogJzEyMzQ1MCcsXHJcbiAgICAgICAgdGl0bGU6ICdKb2hvbnknLFxyXG4gICAgICAgIGpvYnRpdGxlOiAn6Zi/6YeM5be05be06LWE5rex5YmN56uv5bel56iL5biIJyxcclxuICAgICAgICBhc2tudW06ICcxNTgnLFxyXG4gICAgICAgIGZhbnM6ICcxMDAwJyxcclxuICAgICAgICBtZWV0bnVtOiAnMTAwMCcsXHJcbiAgICAgICAgaXNSZWFkOiBmYWxzZSxcclxuICAgICAgICBxdWVzdGlvbjogJ+e7meW5tOi9u+WtpuiAheeahOWfuuacrOe9kee7nOaKgOW3pzonLFxyXG4gICAgICAgIGFkZHJlczogJ0dvb2dsZSBzY2hvbGFy6aG16Z2iJyxcclxuICAgICAgICBkYXRlYWRkOiAnMTDmnIgxMeaXpeS4i+WNiDLngrnljJfkuqzvvIzngrnlh7vmiqXlkI0nLFxyXG4gICAgICAgIGVzc2VuY2U6ICfnuqYnLFxyXG4gICAgICAgIGltZzogJy4uL2ltYWdlcy9waWMuanBnJ1xyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfVxyXG59XHJcbiJdfQ==