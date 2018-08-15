'use strict';

Page({
    data: {
        files: []
    },
    chooseImage: function chooseImage(e) {
        var that = this;
        wx.chooseImage({
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: function success(res) {
                // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                that.setData({
                    files: that.data.files.concat(res.tempFilePaths)
                });
            }
        });
    },
    previewImage: function previewImage(e) {
        wx.previewImage({
            current: e.currentTarget.id, // 当前显示图片的http链接
            urls: this.data.files // 需要预览的图片http链接列表
        });
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwbG9hZGVyLmpzIl0sIm5hbWVzIjpbIlBhZ2UiLCJkYXRhIiwiZmlsZXMiLCJjaG9vc2VJbWFnZSIsImUiLCJ0aGF0Iiwid3giLCJzaXplVHlwZSIsInNvdXJjZVR5cGUiLCJzdWNjZXNzIiwicmVzIiwic2V0RGF0YSIsImNvbmNhdCIsInRlbXBGaWxlUGF0aHMiLCJwcmV2aWV3SW1hZ2UiLCJjdXJyZW50IiwiY3VycmVudFRhcmdldCIsImlkIiwidXJscyJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsS0FBSztBQUNEQyxVQUFNO0FBQ0ZDLGVBQU87QUFETCxLQURMO0FBSURDLGlCQUFhLHFCQUFVQyxDQUFWLEVBQWE7QUFDdEIsWUFBSUMsT0FBTyxJQUFYO0FBQ0FDLFdBQUdILFdBQUgsQ0FBZTtBQUNYSSxzQkFBVSxDQUFDLFVBQUQsRUFBYSxZQUFiLENBREMsRUFDMkI7QUFDdENDLHdCQUFZLENBQUMsT0FBRCxFQUFVLFFBQVYsQ0FGRCxFQUVzQjtBQUNqQ0MscUJBQVMsaUJBQVVDLEdBQVYsRUFBZTtBQUNwQjtBQUNBTCxxQkFBS00sT0FBTCxDQUFhO0FBQ1RULDJCQUFPRyxLQUFLSixJQUFMLENBQVVDLEtBQVYsQ0FBZ0JVLE1BQWhCLENBQXVCRixJQUFJRyxhQUEzQjtBQURFLGlCQUFiO0FBR0g7QUFSVSxTQUFmO0FBVUgsS0FoQkE7QUFpQkRDLGtCQUFjLHNCQUFTVixDQUFULEVBQVc7QUFDckJFLFdBQUdRLFlBQUgsQ0FBZ0I7QUFDWkMscUJBQVNYLEVBQUVZLGFBQUYsQ0FBZ0JDLEVBRGIsRUFDaUI7QUFDN0JDLGtCQUFNLEtBQUtqQixJQUFMLENBQVVDLEtBRkosQ0FFVTtBQUZWLFNBQWhCO0FBSUg7QUF0QkEsQ0FBTCIsImZpbGUiOiJ1cGxvYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlBhZ2Uoe1xuICAgIGRhdGE6IHtcbiAgICAgICAgZmlsZXM6IFtdXG4gICAgfSxcbiAgICBjaG9vc2VJbWFnZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICB3eC5jaG9vc2VJbWFnZSh7XG4gICAgICAgICAgICBzaXplVHlwZTogWydvcmlnaW5hbCcsICdjb21wcmVzc2VkJ10sIC8vIOWPr+S7peaMh+WumuaYr+WOn+Wbvui/mOaYr+WOi+e8qeWbvu+8jOm7mOiupOS6jOiAhemDveaciVxuICAgICAgICAgICAgc291cmNlVHlwZTogWydhbGJ1bScsICdjYW1lcmEnXSwgLy8g5Y+v5Lul5oyH5a6a5p2l5rqQ5piv55u45YaM6L+Y5piv55u45py677yM6buY6K6k5LqM6ICF6YO95pyJXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgLy8g6L+U5Zue6YCJ5a6a54Wn54mH55qE5pys5Zyw5paH5Lu26Lev5b6E5YiX6KGo77yMdGVtcEZpbGVQYXRo5Y+v5Lul5L2c5Li6aW1n5qCH562+55qEc3Jj5bGe5oCn5pi+56S65Zu+54mHXG4gICAgICAgICAgICAgICAgdGhhdC5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgZmlsZXM6IHRoYXQuZGF0YS5maWxlcy5jb25jYXQocmVzLnRlbXBGaWxlUGF0aHMpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBwcmV2aWV3SW1hZ2U6IGZ1bmN0aW9uKGUpe1xuICAgICAgICB3eC5wcmV2aWV3SW1hZ2Uoe1xuICAgICAgICAgICAgY3VycmVudDogZS5jdXJyZW50VGFyZ2V0LmlkLCAvLyDlvZPliY3mmL7npLrlm77niYfnmoRodHRw6ZO+5o6lXG4gICAgICAgICAgICB1cmxzOiB0aGlzLmRhdGEuZmlsZXMgLy8g6ZyA6KaB6aKE6KeI55qE5Zu+54mHaHR0cOmTvuaOpeWIl+ihqFxuICAgICAgICB9KVxuICAgIH1cbn0pOyJdfQ==