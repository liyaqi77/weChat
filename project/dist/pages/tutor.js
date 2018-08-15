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

var Tutor = function (_wepy$page) {
  _inherits(Tutor, _wepy$page);

  function Tutor() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tutor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tutor.__proto__ || Object.getPrototypeOf(Tutor)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      play: true
    }, _this.methods = {
      onMusictap: function onMusictap(e) {
        var isPlayingMusic = this.play;
        if (isPlayingMusic) {
          _wepy2.default.pauseBackgroundAudio();
          this.play = false;
        } else {
          _wepy2.default.playBackgroundAudio({
            dataUrl: 'https://m10.music.126.net/20180813150513/f34ada4d3cf8b4554edd5d5cf10d578d/ymusic/5bd7/9ce7/88ae/ddfd712668977350181f320ecf2f2ae5.mp3',
            title: 'Lost In Your Maze - Anzol / LuckyMaxx',
            coverImgUrl: 'https://p1.music.126.net/-ygGeeu_NdRrDgfl1wEXfQ==/109951163161885717.jpg?imageView&thumbnail=360y360&quality=75&tostatic=0'
          });
          this.play = true;
          var that = this;
          _wepy2.default.onBackgroundAudioPlay(function () {
            isPlayingMusic = true;
            that.play = false;
          });
          _wepy2.default.onBackgroundAudioPause(function () {
            isPlayingMusic = false;
            that.play = true;
          });
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Tutor;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Tutor , 'pages/tutor'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR1dG9yLmpzIl0sIm5hbWVzIjpbIlR1dG9yIiwiZGF0YSIsInBsYXkiLCJtZXRob2RzIiwib25NdXNpY3RhcCIsImUiLCJpc1BsYXlpbmdNdXNpYyIsIndlcHkiLCJwYXVzZUJhY2tncm91bmRBdWRpbyIsInBsYXlCYWNrZ3JvdW5kQXVkaW8iLCJkYXRhVXJsIiwidGl0bGUiLCJjb3ZlckltZ1VybCIsInRoYXQiLCJvbkJhY2tncm91bmRBdWRpb1BsYXkiLCJvbkJhY2tncm91bmRBdWRpb1BhdXNlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsSSxHQUFPO0FBQ0xDLFlBQU07QUFERCxLLFFBR1BDLE8sR0FBVTtBQUNSQyxnQkFEUSxzQkFDR0MsQ0FESCxFQUNNO0FBQ1osWUFBSUMsaUJBQWlCLEtBQUtKLElBQTFCO0FBQ0EsWUFBSUksY0FBSixFQUFvQjtBQUNsQkMseUJBQUtDLG9CQUFMO0FBQ0EsZUFBS04sSUFBTCxHQUFZLEtBQVo7QUFDRCxTQUhELE1BR087QUFDTEsseUJBQUtFLG1CQUFMLENBQXlCO0FBQ3ZCQyxxQkFBUyxzSUFEYztBQUV2QkMsbUJBQU8sdUNBRmdCO0FBR3ZCQyx5QkFBYTtBQUhVLFdBQXpCO0FBS0EsZUFBS1YsSUFBTCxHQUFZLElBQVo7QUFDQSxjQUFJVyxPQUFPLElBQVg7QUFDQU4seUJBQUtPLHFCQUFMLENBQTJCLFlBQVc7QUFDcENSLDZCQUFpQixJQUFqQjtBQUNBTyxpQkFBS1gsSUFBTCxHQUFZLEtBQVo7QUFDRCxXQUhEO0FBSUFLLHlCQUFLUSxzQkFBTCxDQUE0QixZQUFXO0FBQ3JDVCw2QkFBaUIsS0FBakI7QUFDQU8saUJBQUtYLElBQUwsR0FBWSxJQUFaO0FBQ0QsV0FIRDtBQUlEO0FBQ0Y7QUF2Qk8sSzs7OztFQUp1QkssZUFBS1MsSTs7a0JBQW5CaEIsSyIsImZpbGUiOiJ0dXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUdXRvciBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgZGF0YSA9IHtcclxuICAgIHBsYXk6IHRydWVcclxuICB9XHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIG9uTXVzaWN0YXAoZSkge1xyXG4gICAgICB2YXIgaXNQbGF5aW5nTXVzaWMgPSB0aGlzLnBsYXlcclxuICAgICAgaWYgKGlzUGxheWluZ011c2ljKSB7XHJcbiAgICAgICAgd2VweS5wYXVzZUJhY2tncm91bmRBdWRpbygpXHJcbiAgICAgICAgdGhpcy5wbGF5ID0gZmFsc2VcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB3ZXB5LnBsYXlCYWNrZ3JvdW5kQXVkaW8oe1xyXG4gICAgICAgICAgZGF0YVVybDogJ2h0dHBzOi8vbTEwLm11c2ljLjEyNi5uZXQvMjAxODA4MTMxNTA1MTMvZjM0YWRhNGQzY2Y4YjQ1NTRlZGQ1ZDVjZjEwZDU3OGQveW11c2ljLzViZDcvOWNlNy84OGFlL2RkZmQ3MTI2Njg5NzczNTAxODFmMzIwZWNmMmYyYWU1Lm1wMycsXHJcbiAgICAgICAgICB0aXRsZTogJ0xvc3QgSW4gWW91ciBNYXplIC0gQW56b2wgLyBMdWNreU1heHgnLFxyXG4gICAgICAgICAgY292ZXJJbWdVcmw6ICdodHRwczovL3AxLm11c2ljLjEyNi5uZXQvLXlnR2VldV9OZFJyRGdmbDF3RVhmUT09LzEwOTk1MTE2MzE2MTg4NTcxNy5qcGc/aW1hZ2VWaWV3JnRodW1ibmFpbD0zNjB5MzYwJnF1YWxpdHk9NzUmdG9zdGF0aWM9MCdcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMucGxheSA9IHRydWVcclxuICAgICAgICB2YXIgdGhhdCA9IHRoaXNcclxuICAgICAgICB3ZXB5Lm9uQmFja2dyb3VuZEF1ZGlvUGxheShmdW5jdGlvbigpIHtcclxuICAgICAgICAgIGlzUGxheWluZ011c2ljID0gdHJ1ZVxyXG4gICAgICAgICAgdGhhdC5wbGF5ID0gZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgICAgIHdlcHkub25CYWNrZ3JvdW5kQXVkaW9QYXVzZShmdW5jdGlvbigpIHtcclxuICAgICAgICAgIGlzUGxheWluZ011c2ljID0gZmFsc2VcclxuICAgICAgICAgIHRoYXQucGxheSA9IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==