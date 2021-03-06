'use strict';

Page({
    data: {
        array: ['美国', '中国', '巴西', '日本'],
        index: 0,
        date: '2016-09-01',
        time: '12:01'
    },
    bindPickerChange: function bindPickerChange(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value);
        this.setData({
            index: e.detail.value
        });
    },
    bindDateChange: function bindDateChange(e) {
        this.setData({
            date: e.detail.value
        });
    },
    bindTimeChange: function bindTimeChange(e) {
        this.setData({
            time: e.detail.value
        });
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpY2tlci5qcyJdLCJuYW1lcyI6WyJQYWdlIiwiZGF0YSIsImFycmF5IiwiaW5kZXgiLCJkYXRlIiwidGltZSIsImJpbmRQaWNrZXJDaGFuZ2UiLCJlIiwiY29uc29sZSIsImxvZyIsImRldGFpbCIsInZhbHVlIiwic2V0RGF0YSIsImJpbmREYXRlQ2hhbmdlIiwiYmluZFRpbWVDaGFuZ2UiXSwibWFwcGluZ3MiOiI7O0FBQUFBLEtBQUs7QUFDREMsVUFBTTtBQUNGQyxlQUFPLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLEVBQW1CLElBQW5CLENBREw7QUFFRkMsZUFBTyxDQUZMO0FBR0ZDLGNBQU0sWUFISjtBQUlGQyxjQUFNO0FBSkosS0FETDtBQU9EQyxzQkFBa0IsMEJBQVNDLENBQVQsRUFBWTtBQUMxQkMsZ0JBQVFDLEdBQVIsQ0FBWSxtQkFBWixFQUFpQ0YsRUFBRUcsTUFBRixDQUFTQyxLQUExQztBQUNBLGFBQUtDLE9BQUwsQ0FBYTtBQUNUVCxtQkFBT0ksRUFBRUcsTUFBRixDQUFTQztBQURQLFNBQWI7QUFHSCxLQVpBO0FBYURFLG9CQUFnQix3QkFBU04sQ0FBVCxFQUFZO0FBQ3hCLGFBQUtLLE9BQUwsQ0FBYTtBQUNUUixrQkFBTUcsRUFBRUcsTUFBRixDQUFTQztBQUROLFNBQWI7QUFHSCxLQWpCQTtBQWtCREcsb0JBQWdCLHdCQUFTUCxDQUFULEVBQVk7QUFDeEIsYUFBS0ssT0FBTCxDQUFhO0FBQ1RQLGtCQUFNRSxFQUFFRyxNQUFGLENBQVNDO0FBRE4sU0FBYjtBQUdIO0FBdEJBLENBQUwiLCJmaWxlIjoicGlja2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiUGFnZSh7XG4gICAgZGF0YToge1xuICAgICAgICBhcnJheTogWyfnvo7lm70nLCAn5Lit5Zu9JywgJ+W3tOilvycsICfml6XmnKwnXSxcbiAgICAgICAgaW5kZXg6IDAsXG4gICAgICAgIGRhdGU6ICcyMDE2LTA5LTAxJyxcbiAgICAgICAgdGltZTogJzEyOjAxJ1xuICAgIH0sXG4gICAgYmluZFBpY2tlckNoYW5nZTogZnVuY3Rpb24oZSkge1xuICAgICAgICBjb25zb2xlLmxvZygncGlja2Vy5Y+R6YCB6YCJ5oup5pS55Y+Y77yM5pC65bim5YC85Li6JywgZS5kZXRhaWwudmFsdWUpXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICBpbmRleDogZS5kZXRhaWwudmFsdWVcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIGJpbmREYXRlQ2hhbmdlOiBmdW5jdGlvbihlKSB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICBkYXRlOiBlLmRldGFpbC52YWx1ZVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgYmluZFRpbWVDaGFuZ2U6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgIHRpbWU6IGUuZGV0YWlsLnZhbHVlXG4gICAgICAgIH0pXG4gICAgfVxufSk7Il19