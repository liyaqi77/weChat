#惠答API文档
## GD
***
| 版本        | 作者           | 日期  | 备注 |
| ------------- | ------------- | ----- | --- |
| 1.0     | Jerry Shen | 2018.08.01 ||
***

### 说明
   * 正式域名: *** 
   * 测试域名: https://wenda.4huoer.com/ 
   * 请求方法: POST/GET
   * 数据格式: JSON
   * 数据编码: UTF-8
   * 返回格式:
   
   > 
   ```
   成功:
   {
     "errcode":0, 
     "errmsg": ""，
     “data”: []
   }
   fail:
   {
     "errcode": 1,
     "errmsg": "error infomation"
   }
   ```

### 接口明细

1. 获取用户信息
   * 地址：/api/user/info
   * 方法：GET
   * 请求参数：

		| 参数名        | 参数值           |  说明 |
		| ------------- | ------------- | ----- |
		| uid    | 5 | 用户唯一ID |


   * 返回参数：
   
  		| 参数名        | 参数值           |  说明 |
		| ------------- | ------------- | ----- |
		| errcode    | 0 | 错误编码，其中0为正确，其他值为错误 |
		| errmsg   | "" | 错误消息 |
		| data   | object | 具体信息，详见如下信息 |
		| name   | 飞飞 | 姓名 |
		| avatar | avatar url | 头像地址 |
		| company | Ali | 公司名称 |
		| title | 技术总监 | 职位 |
		| location | 北京市朝阳区环球中心 | 位置信息 |
		| summary | 我是牛逼的人 | 自我介绍 |
		| tags | array | 标签 |
		| seniority | 5 | 工作年限| 

	
   * 示例
   
		```
		请求地址：/api/user/info/uid/5
		成功：
		{
			"errcode": 0,
			"errmsg": "",
			"data": {
				"name": "test",
				"avatar": "http:\/\/img5.imgtn.bdimg.com\/it\/u=2278544211,2397487554&fm=27&gp=0.jpg",
				"company": "百度",
				"title": "高级前端工程师",
				"location": "北京市朝阳区望京环球中心阿里大厦",
				"summary": "我是大拿我是大拿我是拿大",
				"tags": {
					"1": "HTML5",
					"2": "Javascript"
				},
				"seniority": 5
			}
		}	
	   失败:
	   {
	     "error": 1,
	     "msg": "Error Message"
	   }
	   ```


2. 上传头像
   * 地址：/api/upload/avatar
   * 方法：POST
   * 请求参数：

		| 参数名        | 参数值           |  说明 |
		| ------------- | ------------- | ----- |
		| avatar    | filename | 上传文件名称 |


   * 返回参数：
   
  		| 参数名        | 参数值           |  说明 |
		| ------------- | ------------- | ----- |
		| errcode    | 0 | 错误编码，其中0为正确，其他值为错误 |
		| errmsg   | "" | 错误消息 |
		| data   | object | 具体信息，详见如下信息 |
		| avatar   | avatar url | 头像地址 |
	
   * 示例
   
		```
		请求地址：/api/upload/avatar
		成功：
		{
			"errcode": 0,
			"errmsg": "",
			"data": {
				"avatar": "http:\/\/img5.imgtn.bdimg.com\/it\/u=2278544211,2397487554&fm=27&gp=0.jpg"	
			}
		}	
	   失败:
	   {
	     "error": 1,
	     "msg": "Error Message"
	   }
	   ```

3. 新用户注册

	* 地址：/api/login/register
	* 方法：POST
	* 请求参数：

		| 参数名        | 参数值           |  说明 |
		| ------------- | ------------- | ----- |
		| name   | 飞飞 | 姓名 |
		| avatar | avatar url | 头像地址 |
		| company | Ali | 公司名称 |
		| title | 技术总监 | 职位 |
		| location | 北京市朝阳区环球中心 | 位置信息 |
		| summary | 我是牛逼的人 | 自我介绍 |
		| tags | array | 标签 |
		| seniority | 5 | 工作年限| 
	
	* 返回参数：
   
  		| 参数名        | 参数值           |  说明 |
		| ------------- | ------------- | ----- |
		| errcode    | 0 | 错误编码，其中0为正确，其他值为错误 |
		| errmsg   | "" | 错误消息 |
		| data   | object | 具体信息，详见如下信息 |
		| uid   | int | 注册用户ID |
	
   * 示例
   
		```
		请求地址：/api/login/register
		成功：
		{
			"errcode": 0,
			"errmsg": "",
			"data": {
				uid: 1
			}
		}	
	   失败:
	   {
	     "error": 1,
	     "msg": "Error Message"
	   }
	   ```
 
 4. 编辑用户信息

	* 地址：/api/user/edit/
	* 方法：POST
	* 请求参数：

		| 参数名        | 参数值           |  说明 |
		| ------------- | ------------- | ----- |
		| uid | 2 | 用户ID |
		| avatar | avatar url | 头像地址 |
		| company | Ali | 公司名称 |
		| title | 技术总监 | 职位 |
		| location | 北京市朝阳区环球中心 | 位置信息 |
		| summary | 我是牛逼的人 | 自我介绍 |
		| tags | array | 标签 |
		| seniority | 5 | 工作年限| 
	
	* 返回参数：
   
  		| 参数名        | 参数值           |  说明 |
		| ------------- | ------------- | ----- |
		| errcode    | 0 | 错误编码，其中0为正确，其他值为错误 |
		| errmsg   | "" | 错误消息 |
	
   * 示例
   
		```
		请求地址：/api/user/edit/uid/1
		成功：
		{
			"errcode": 0,
			"errmsg": "",
			"data": {
				uid: 1
			}
		}	
	   失败:
	   {
	     "error": 1,
	     "msg": "Error Message"
	   }
	   ```