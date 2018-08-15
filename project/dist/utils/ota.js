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
    console.log(ind);
    return ind + 1 + "\u5E74";
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm90YS5qcyJdLCJuYW1lcyI6WyJkZWxldGVPYmpLZXlzIiwib2JqIiwidGFyZ2V0IiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJ2YWwiLCJrZXkiLCJ0b0FycmF5IiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwibGVuIiwiaW5kIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxJQUFNQSx3Q0FBZ0IsU0FBaEJBLGFBQWdCLEdBQXNCO0FBQUEsTUFBckJDLEdBQXFCLHVFQUFmLEVBQWU7QUFBQSxNQUFYQyxNQUFXOztBQUNqREMsU0FBT0MsSUFBUCxDQUFZSCxHQUFaLEVBQWlCSSxPQUFqQixDQUF5QixVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUNyQyxRQUFJLENBQUNMLE9BQU9JLEdBQVAsQ0FBTCxFQUFrQjtBQUNoQixhQUFPTCxJQUFJSyxHQUFKLENBQVA7QUFDRDtBQUNGLEdBSkQ7QUFLQSxTQUFPTCxHQUFQO0FBQ0QsQ0FQTTtBQVFBLElBQU1PLDRCQUFVLFNBQVZBLE9BQVUsTUFBTztBQUM1QixTQUFPQyxNQUFNQyxJQUFOLENBQVcsRUFBQ0MsUUFBUUMsR0FBVCxFQUFYLEVBQTBCLFVBQUNOLEdBQUQsRUFBTU8sR0FBTixFQUFjO0FBQzdDQyxZQUFRQyxHQUFSLENBQVlGLEdBQVo7QUFDQSxXQUFVQSxNQUFNLENBQWhCO0FBQ0QsR0FITSxDQUFQO0FBSUQsQ0FMTSIsImZpbGUiOiJvdGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZGVsZXRlT2JqS2V5cyA9IChvYmogPSB7fSwgdGFyZ2V0KSA9PiB7XHJcbiAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKCh2YWwsIGtleSkgPT4ge1xyXG4gICAgaWYgKCF0YXJnZXRbdmFsXSkge1xyXG4gICAgICBkZWxldGUgb2JqW3ZhbF1cclxuICAgIH1cclxuICB9KVxyXG4gIHJldHVybiBvYmpcclxufVxyXG5leHBvcnQgY29uc3QgdG9BcnJheSA9IGxlbiA9PiB7XHJcbiAgcmV0dXJuIEFycmF5LmZyb20oe2xlbmd0aDogbGVufSwgKHZhbCwgaW5kKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhpbmQpXHJcbiAgICByZXR1cm4gYCR7aW5kICsgMX3lubRgXHJcbiAgfSlcclxufVxyXG4iXX0=