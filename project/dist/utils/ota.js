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
var toArray = exports.toArray = function toArray(len) {
  return Array.from({ length: len }, function (val, ind) {
    return ind + 1 + "\u5E74";
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm90YS5qcyJdLCJuYW1lcyI6WyJkZWxldGVPYmpLZXlzIiwib2JqIiwidGFyZ2V0IiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJ2YWwiLCJrZXkiLCJ0b0FycmF5IiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwibGVuIiwiaW5kIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFPLElBQU1BLHdDQUFnQixTQUFoQkEsYUFBZ0IsR0FBc0I7QUFBQSxNQUFyQkMsR0FBcUIsdUVBQWYsRUFBZTtBQUFBLE1BQVhDLE1BQVc7O0FBQ2pEQyxTQUFPQyxJQUFQLENBQVlILEdBQVosRUFBaUJJLE9BQWpCLENBQXlCLFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQ3JDLFFBQUksQ0FBQ0wsT0FBT0ksR0FBUCxDQUFMLEVBQWtCO0FBQ2hCLGFBQU9MLElBQUlLLEdBQUosQ0FBUDtBQUNEO0FBQ0YsR0FKRDtBQUtBLFNBQU9MLEdBQVA7QUFDRCxDQVBNO0FBUUEsSUFBTU8sNEJBQVUsU0FBVkEsT0FBVSxNQUFPO0FBQzVCLFNBQU9DLE1BQU1DLElBQU4sQ0FBVyxFQUFDQyxRQUFRQyxHQUFULEVBQVgsRUFBMEIsVUFBQ04sR0FBRCxFQUFNTyxHQUFOLEVBQWM7QUFDN0MsV0FBVUEsTUFBTSxDQUFoQjtBQUNELEdBRk0sQ0FBUDtBQUdELENBSk0iLCJmaWxlIjoib3RhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGRlbGV0ZU9iaktleXMgPSAob2JqID0ge30sIHRhcmdldCkgPT4ge1xyXG4gIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaCgodmFsLCBrZXkpID0+IHtcclxuICAgIGlmICghdGFyZ2V0W3ZhbF0pIHtcclxuICAgICAgZGVsZXRlIG9ialt2YWxdXHJcbiAgICB9XHJcbiAgfSlcclxuICByZXR1cm4gb2JqXHJcbn1cclxuZXhwb3J0IGNvbnN0IHRvQXJyYXkgPSBsZW4gPT4ge1xyXG4gIHJldHVybiBBcnJheS5mcm9tKHtsZW5ndGg6IGxlbn0sICh2YWwsIGluZCkgPT4ge1xyXG4gICAgcmV0dXJuIGAke2luZCArIDF95bm0YFxyXG4gIH0pXHJcbn1cclxuIl19