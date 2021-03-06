'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      id: 'detail',
      activeIndex: 0,
      list: [{
        level: 1
      }, {
        level: 2
      }, {
        level: 3
      }, {
        level: 4
      }, {
        level: 5
      }]
    }, _this.methods = {
      changelevel: function changelevel(e) {
        var id = e.currentTarget.dataset.id;
        this.activeIndex = id + 1;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(options) {
        var parse;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.id = options.id;
                parse = JSON.parse(options.id);

                this.id = parse;

              case 3:
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

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/quest_detail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXN0X2RldGFpbC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImRhdGEiLCJpZCIsImFjdGl2ZUluZGV4IiwibGlzdCIsImxldmVsIiwibWV0aG9kcyIsImNoYW5nZWxldmVsIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0Iiwib3B0aW9ucyIsInBhcnNlIiwiSlNPTiIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsSSxHQUFLO0FBQ0hDLFVBQUksUUFERDtBQUVIQyxtQkFBYSxDQUZWO0FBR0hDLFlBQU0sQ0FDSjtBQUNFQyxlQUFPO0FBRFQsT0FESSxFQUlKO0FBQ0VBLGVBQU87QUFEVCxPQUpJLEVBT0o7QUFDRUEsZUFBTztBQURULE9BUEksRUFVSjtBQUNFQSxlQUFPO0FBRFQsT0FWSSxFQWFKO0FBQ0VBLGVBQU87QUFEVCxPQWJJO0FBSEgsSyxRQTBCTEMsTyxHQUFVO0FBQ1JDLGlCQURRLHVCQUNLQyxDQURMLEVBQ1E7QUFDZCxZQUFJTixLQUFLTSxFQUFFQyxhQUFGLENBQWdCQyxPQUFoQixDQUF3QlIsRUFBakM7QUFDQSxhQUFLQyxXQUFMLEdBQW9CRCxLQUFLLENBQXpCO0FBQ0Q7QUFKTyxLOzs7Ozs7MkZBTElTLE87Ozs7OztBQUNaLHFCQUFLVCxFQUFMLEdBQVVTLFFBQVFULEVBQWxCO0FBQ0lVLHFCLEdBQVFDLEtBQUtELEtBQUwsQ0FBV0QsUUFBUVQsRUFBbkIsQzs7QUFDWixxQkFBS0EsRUFBTCxHQUFVVSxLQUFWOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBekIrQkUsZUFBS0MsSTs7a0JBQW5CZixLIiwiZmlsZSI6InF1ZXN0X2RldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgZGF0YT17XHJcbiAgICBpZDogJ2RldGFpbCcsXHJcbiAgICBhY3RpdmVJbmRleDogMCxcclxuICAgIGxpc3Q6IFtcclxuICAgICAge1xyXG4gICAgICAgIGxldmVsOiAxXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBsZXZlbDogMlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbGV2ZWw6IDNcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGxldmVsOiA0XHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBsZXZlbDogNVxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfVxyXG4gIGFzeW5jIG9uTG9hZCAob3B0aW9ucykge1xyXG4gICAgdGhpcy5pZCA9IG9wdGlvbnMuaWRcclxuICAgIGxldCBwYXJzZSA9IEpTT04ucGFyc2Uob3B0aW9ucy5pZClcclxuICAgIHRoaXMuaWQgPSBwYXJzZVxyXG4gIH1cclxuICBtZXRob2RzID0ge1xyXG4gICAgY2hhbmdlbGV2ZWwgKGUpIHtcclxuICAgICAgbGV0IGlkID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWRcclxuICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IChpZCArIDEpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==