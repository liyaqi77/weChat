'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _tabTutor = require('./../components/tab-tutor.js');

var _tabTutor2 = _interopRequireDefault(_tabTutor);

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.$repeat = {}, _this.$props = { "TabTutor": { "xmlns:v-bind": "", "v-bind:content.sync": "initdata" } }, _this.$events = {}, _this.components = {
      TabTutor: _tabTutor2.default
    }, _this.data = {
      activeIndex: 0,
      list: [],
      initdata: null,
      content: [{
        tabs: '我想见的',
        list: [{
          id: '123450',
          title: 'Johony',
          jobtitle: '阿里巴巴资深前端工程师',
          asknum: '158',
          fans: '1000',
          meetnum: '1000',
          isRead: true,
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
      }, {
        tabs: '约见记录',
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
          essence: '精华',
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
          essence: '精华',
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
          essence: '精华',
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
          essence: '精华',
          img: '../images/pic.jpg'
        }]
      }]
    }, _this.methods = {
      tabClick: function tabClick(e) {
        var current = e.currentTarget.id || 0;
        this.initdata = e.currentTarget.dataset.list;
        this.activeIndex = current;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(options) {
      var title = options.title;
      _wepy2.default.setNavigationBarTitle({
        title: title
      });
      this.initdata = this.content[this.activeIndex].list;
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/my_tutor'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15X3R1dG9yLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiVGFiVHV0b3IiLCJkYXRhIiwiYWN0aXZlSW5kZXgiLCJsaXN0IiwiaW5pdGRhdGEiLCJjb250ZW50IiwidGFicyIsImlkIiwidGl0bGUiLCJqb2J0aXRsZSIsImFza251bSIsImZhbnMiLCJtZWV0bnVtIiwiaXNSZWFkIiwicXVlc3Rpb24iLCJhZGRyZXMiLCJkYXRlYWRkIiwiZXNzZW5jZSIsImltZyIsIm1ldGhvZHMiLCJ0YWJDbGljayIsImUiLCJjdXJyZW50IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJvcHRpb25zIiwid2VweSIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVMsRSxRQUNWQyxPLEdBQVUsRSxRQUNYQyxNLEdBQVMsRUFBQyxZQUFXLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsdUJBQXNCLFVBQXpDLEVBQVosRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQVc7QUFDUkM7QUFEUSxLLFFBR1ZDLEksR0FBTztBQUNMQyxtQkFBYSxDQURSO0FBRUxDLFlBQU0sRUFGRDtBQUdMQyxnQkFBVSxJQUhMO0FBSUxDLGVBQVMsQ0FBQztBQUNSQyxjQUFNLE1BREU7QUFFUkgsY0FBTSxDQUNKO0FBQ0VJLGNBQUksUUFETjtBQUVFQyxpQkFBTyxRQUZUO0FBR0VDLG9CQUFVLGFBSFo7QUFJRUMsa0JBQVEsS0FKVjtBQUtFQyxnQkFBTSxNQUxSO0FBTUVDLG1CQUFTLE1BTlg7QUFPRUMsa0JBQVEsSUFQVjtBQVFFQyxvQkFBVSxlQVJaO0FBU0VDLGtCQUFRLGtCQVRWO0FBVUVDLG1CQUFTLG1CQVZYO0FBV0VDLG1CQUFTLEdBWFg7QUFZRUMs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QUFDZixVQUFJakIsUUFBUWlCLFFBQVFqQixLQUFwQjtBQUNBa0IscUJBQUtDLHFCQUFMLENBQTJCO0FBQ3pCbkIsZUFBT0E7QUFEa0IsT0FBM0I7QUFHQSxXQUFLSixRQUFMLEdBQWdCLEtBQUtDLE9BQUwsQ0FBYSxLQUFLSCxXQUFsQixFQUErQkMsSUFBL0M7QUFDRDs7OztFQWxKZ0N1QixlQUFLRSxJOztrQkFBbkJsQyxLIiwiZmlsZSI6Im15X3R1dG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCBUYWJUdXRvciBmcm9tICcuLi9jb21wb25lbnRzL3RhYi10dXRvcidcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHt9O1xyXG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJUYWJUdXRvclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6Y29udGVudC5zeW5jXCI6XCJpbml0ZGF0YVwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHM9e1xyXG4gICAgVGFiVHV0b3JcclxuICB9XHJcbiAgZGF0YSA9IHtcclxuICAgIGFjdGl2ZUluZGV4OiAwLFxyXG4gICAgbGlzdDogW10sXHJcbiAgICBpbml0ZGF0YTogbnVsbCxcclxuICAgIGNvbnRlbnQ6IFt7XHJcbiAgICAgIHRhYnM6ICfmiJHmg7Pop4HnmoQnLFxyXG4gICAgICBsaXN0OiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6ICcxMjM0NTAnLFxyXG4gICAgICAgICAgdGl0bGU6ICdKb2hvbnknLFxyXG4gICAgICAgICAgam9idGl0bGU6ICfpmL/ph4zlt7Tlt7TotYTmt7HliY3nq6/lt6XnqIvluIgnLFxyXG4gICAgICAgICAgYXNrbnVtOiAnMTU4JyxcclxuICAgICAgICAgIGZhbnM6ICcxMDAwJyxcclxuICAgICAgICAgIG1lZXRudW06ICcxMDAwJyxcclxuICAgICAgICAgIGlzUmVhZDogdHJ1ZSxcclxuICAgICAgICAgIHF1ZXN0aW9uOiAn57uZ5bm06L275a2m6ICF55qE5Z+65pys572R57uc5oqA5benOicsXHJcbiAgICAgICAgICBhZGRyZXM6ICdHb29nbGUgc2Nob2xhcumhtemdoicsXHJcbiAgICAgICAgICBkYXRlYWRkOiAnMTDmnIgxMeaXpeS4i+WNiDLngrnljJfkuqzvvIzngrnlh7vmiqXlkI0nLFxyXG4gICAgICAgICAgZXNzZW5jZTogJ+e6picsXHJcbiAgICAgICAgICBpbWc6ICcuLi9pbWFnZXMvcGljLmpwZydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAnMTIzNDUwJyxcclxuICAgICAgICAgIHRpdGxlOiAnSm9ob255JyxcclxuICAgICAgICAgIGpvYnRpdGxlOiAn6Zi/6YeM5be05be06LWE5rex5YmN56uv5bel56iL5biIJyxcclxuICAgICAgICAgIGFza251bTogJzE1OCcsXHJcbiAgICAgICAgICBmYW5zOiAnMTAwMCcsXHJcbiAgICAgICAgICBtZWV0bnVtOiAnMTAwMCcsXHJcbiAgICAgICAgICBpc1JlYWQ6IGZhbHNlLFxyXG4gICAgICAgICAgcXVlc3Rpb246ICfnu5nlubTovbvlrabogIXnmoTln7rmnKznvZHnu5zmioDlt6c6JyxcclxuICAgICAgICAgIGFkZHJlczogJ0dvb2dsZSBzY2hvbGFy6aG16Z2iJyxcclxuICAgICAgICAgIGRhdGVhZGQ6ICcxMOaciDEx5pel5LiL5Y2IMueCueWMl+S6rO+8jOeCueWHu+aKpeWQjScsXHJcbiAgICAgICAgICBlc3NlbmNlOiAn57qmJyxcclxuICAgICAgICAgIGltZzogJy4uL2ltYWdlcy9waWMuanBnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6ICcxMjM0NTAnLFxyXG4gICAgICAgICAgdGl0bGU6ICdKb2hvbnknLFxyXG4gICAgICAgICAgam9idGl0bGU6ICfpmL/ph4zlt7Tlt7TotYTmt7HliY3nq6/lt6XnqIvluIgnLFxyXG4gICAgICAgICAgYXNrbnVtOiAnMTU4JyxcclxuICAgICAgICAgIGZhbnM6ICcxMDAwJyxcclxuICAgICAgICAgIG1lZXRudW06ICcxMDAwJyxcclxuICAgICAgICAgIGlzUmVhZDogZmFsc2UsXHJcbiAgICAgICAgICBxdWVzdGlvbjogJ+e7meW5tOi9u+WtpuiAheeahOWfuuacrOe9kee7nOaKgOW3pzonLFxyXG4gICAgICAgICAgYWRkcmVzOiAnR29vZ2xlIHNjaG9sYXLpobXpnaInLFxyXG4gICAgICAgICAgZGF0ZWFkZDogJzEw5pyIMTHml6XkuIvljYgy54K55YyX5Lqs77yM54K55Ye75oql5ZCNJyxcclxuICAgICAgICAgIGVzc2VuY2U6ICfnuqYnLFxyXG4gICAgICAgICAgaW1nOiAnLi4vaW1hZ2VzL3BpYy5qcGcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogJzEyMzQ1MCcsXHJcbiAgICAgICAgICB0aXRsZTogJ0pvaG9ueScsXHJcbiAgICAgICAgICBqb2J0aXRsZTogJ+mYv+mHjOW3tOW3tOi1hOa3seWJjeerr+W3peeoi+W4iCcsXHJcbiAgICAgICAgICBhc2tudW06ICcxNTgnLFxyXG4gICAgICAgICAgZmFuczogJzEwMDAnLFxyXG4gICAgICAgICAgbWVldG51bTogJzEwMDAnLFxyXG4gICAgICAgICAgaXNSZWFkOiBmYWxzZSxcclxuICAgICAgICAgIHF1ZXN0aW9uOiAn57uZ5bm06L275a2m6ICF55qE5Z+65pys572R57uc5oqA5benOicsXHJcbiAgICAgICAgICBhZGRyZXM6ICdHb29nbGUgc2Nob2xhcumhtemdoicsXHJcbiAgICAgICAgICBkYXRlYWRkOiAnMTDmnIgxMeaXpeS4i+WNiDLngrnljJfkuqzvvIzngrnlh7vmiqXlkI0nLFxyXG4gICAgICAgICAgZXNzZW5jZTogJ+e6picsXHJcbiAgICAgICAgICBpbWc6ICcuLi9pbWFnZXMvcGljLmpwZydcclxuICAgICAgICB9XVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGFiczogJ+e6puingeiusOW9lScsXHJcbiAgICAgIGxpc3Q6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogJzEyMzQ1MCcsXHJcbiAgICAgICAgICB0aXRsZTogJ0pvaG9ueScsXHJcbiAgICAgICAgICBqb2J0aXRsZTogJ+mYv+mHjOW3tOW3tOi1hOa3seWJjeerr+W3peeoi+W4iCcsXHJcbiAgICAgICAgICBhc2tudW06ICcxNTgnLFxyXG4gICAgICAgICAgZmFuczogJzEwMDAnLFxyXG4gICAgICAgICAgbWVldG51bTogJzEwMDAnLFxyXG4gICAgICAgICAgaXNSZWFkOiBmYWxzZSxcclxuICAgICAgICAgIHF1ZXN0aW9uOiAn57uZ5bm06L275a2m6ICF55qE5Z+65pys572R57uc5oqA5benOicsXHJcbiAgICAgICAgICBhZGRyZXM6ICdHb29nbGUgc2Nob2xhcumhtemdoicsXHJcbiAgICAgICAgICBkYXRlYWRkOiAnMTDmnIgxMeaXpeS4i+WNiDLngrnljJfkuqzvvIzngrnlh7vmiqXlkI0nLFxyXG4gICAgICAgICAgZXNzZW5jZTogJ+eyvuWNjicsXHJcbiAgICAgICAgICBpbWc6ICcuLi9pbWFnZXMvcGljLmpwZydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAnMTIzNDUwJyxcclxuICAgICAgICAgIHRpdGxlOiAnSm9ob255JyxcclxuICAgICAgICAgIGpvYnRpdGxlOiAn6Zi/6YeM5be05be06LWE5rex5YmN56uv5bel56iL5biIJyxcclxuICAgICAgICAgIGFza251bTogJzE1OCcsXHJcbiAgICAgICAgICBmYW5zOiAnMTAwMCcsXHJcbiAgICAgICAgICBtZWV0bnVtOiAnMTAwMCcsXHJcbiAgICAgICAgICBpc1JlYWQ6IGZhbHNlLFxyXG4gICAgICAgICAgcXVlc3Rpb246ICfnu5nlubTovbvlrabogIXnmoTln7rmnKznvZHnu5zmioDlt6c6JyxcclxuICAgICAgICAgIGFkZHJlczogJ0dvb2dsZSBzY2hvbGFy6aG16Z2iJyxcclxuICAgICAgICAgIGRhdGVhZGQ6ICcxMOaciDEx5pel5LiL5Y2IMueCueWMl+S6rO+8jOeCueWHu+aKpeWQjScsXHJcbiAgICAgICAgICBlc3NlbmNlOiAn57K+5Y2OJyxcclxuICAgICAgICAgIGltZzogJy4uL2ltYWdlcy9waWMuanBnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6ICcxMjM0NTAnLFxyXG4gICAgICAgICAgdGl0bGU6ICdKb2hvbnknLFxyXG4gICAgICAgICAgam9idGl0bGU6ICfpmL/ph4zlt7Tlt7TotYTmt7HliY3nq6/lt6XnqIvluIgnLFxyXG4gICAgICAgICAgYXNrbnVtOiAnMTU4JyxcclxuICAgICAgICAgIGZhbnM6ICcxMDAwJyxcclxuICAgICAgICAgIG1lZXRudW06ICcxMDAwJyxcclxuICAgICAgICAgIGlzUmVhZDogZmFsc2UsXHJcbiAgICAgICAgICBxdWVzdGlvbjogJ+e7meW5tOi9u+WtpuiAheeahOWfuuacrOe9kee7nOaKgOW3pzonLFxyXG4gICAgICAgICAgYWRkcmVzOiAnR29vZ2xlIHNjaG9sYXLpobXpnaInLFxyXG4gICAgICAgICAgZGF0ZWFkZDogJzEw5pyIMTHml6XkuIvljYgy54K55YyX5Lqs77yM54K55Ye75oql5ZCNJyxcclxuICAgICAgICAgIGVzc2VuY2U6ICfnsr7ljY4nLFxyXG4gICAgICAgICAgaW1nOiAnLi4vaW1hZ2VzL3BpYy5qcGcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogJzEyMzQ1MCcsXHJcbiAgICAgICAgICB0aXRsZTogJ0pvaG9ueScsXHJcbiAgICAgICAgICBqb2J0aXRsZTogJ+mYv+mHjOW3tOW3tOi1hOa3seWJjeerr+W3peeoi+W4iCcsXHJcbiAgICAgICAgICBhc2tudW06ICcxNTgnLFxyXG4gICAgICAgICAgZmFuczogJzEwMDAnLFxyXG4gICAgICAgICAgbWVldG51bTogJzEwMDAnLFxyXG4gICAgICAgICAgaXNSZWFkOiBmYWxzZSxcclxuICAgICAgICAgIHF1ZXN0aW9uOiAn57uZ5bm06L275a2m6ICF55qE5Z+65pys572R57uc5oqA5benOicsXHJcbiAgICAgICAgICBhZGRyZXM6ICdHb29nbGUgc2Nob2xhcumhtemdoicsXHJcbiAgICAgICAgICBkYXRlYWRkOiAnMTDmnIgxMeaXpeS4i+WNiDLngrnljJfkuqzvvIzngrnlh7vmiqXlkI0nLFxyXG4gICAgICAgICAgZXNzZW5jZTogJ+eyvuWNjicsXHJcbiAgICAgICAgICBpbWc6ICcuLi9pbWFnZXMvcGljLmpwZydcclxuICAgICAgICB9XVxyXG4gICAgfV1cclxuICB9XHJcbiAgbWV0aG9kcz17XHJcbiAgICB0YWJDbGljayhlKSB7XHJcbiAgICAgIGxldCBjdXJyZW50ID0gZS5jdXJyZW50VGFyZ2V0LmlkIHx8IDBcclxuICAgICAgdGhpcy5pbml0ZGF0YSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0Lmxpc3RcclxuICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IGN1cnJlbnRcclxuICAgIH1cclxuICB9XHJcbiAgb25Mb2FkIChvcHRpb25zKSB7XHJcbiAgICBsZXQgdGl0bGUgPSBvcHRpb25zLnRpdGxlXHJcbiAgICB3ZXB5LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XHJcbiAgICAgIHRpdGxlOiB0aXRsZVxyXG4gICAgfSlcclxuICAgIHRoaXMuaW5pdGRhdGEgPSB0aGlzLmNvbnRlbnRbdGhpcy5hY3RpdmVJbmRleF0ubGlzdFxyXG4gIH1cclxufVxyXG4iXX0=