"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var deleteObjKeys = exports.deleteObjKeys = function deleteObjKeys() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var target = arguments[1];

  Object.keys(obj).forEach(function (val, key) {
    if (!target[val]) {
      delete obj[val];
    }
  });
  return obj;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm90YS5qcyJdLCJuYW1lcyI6WyJkZWxldGVPYmpLZXlzIiwib2JqIiwidGFyZ2V0IiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJ2YWwiLCJrZXkiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sSUFBTUEsd0NBQWdCLFNBQWhCQSxhQUFnQixHQUFzQjtBQUFBLE1BQXJCQyxHQUFxQix1RUFBZixFQUFlO0FBQUEsTUFBWEMsTUFBVzs7QUFDakRDLFNBQU9DLElBQVAsQ0FBWUgsR0FBWixFQUFpQkksT0FBakIsQ0FBeUIsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDckMsUUFBSSxDQUFDTCxPQUFPSSxHQUFQLENBQUwsRUFBa0I7QUFDaEIsYUFBT0wsSUFBSUssR0FBSixDQUFQO0FBQ0Q7QUFDRixHQUpEO0FBS0EsU0FBT0wsR0FBUDtBQUNELENBUE0iLCJmaWxlIjoib3RhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGRlbGV0ZU9iaktleXMgPSAob2JqID0ge30sIHRhcmdldCkgPT4ge1xyXG4gIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaCgodmFsLCBrZXkpID0+IHtcclxuICAgIGlmICghdGFyZ2V0W3ZhbF0pIHtcclxuICAgICAgZGVsZXRlIG9ialt2YWxdXHJcbiAgICB9XHJcbiAgfSlcclxuICByZXR1cm4gb2JqXHJcbn1cclxuIl19