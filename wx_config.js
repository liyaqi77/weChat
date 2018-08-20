const express = require('express');
const router = express.Router();
const fetch = require("node-fetch");//发送微信接口请求用
const jsSHA = require('jssha');//生成哈西值用
let firstTime = 0;//第一次的签名时间
let firstUrl = "";//第一次请求过来的url
let signatureObj;//存取签名内容
// 2小时过期，过期后重新获取
let expireTime = 7200;
router.post('/share', function(req, res, next) {
    if((createTimeStamp() - firstTime) < expireTime && firstUrl == req.body.url){
        res.json(signatureObj)
    }else{
        fetch('https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=你的appid&secret=ede9d01b129f363cf624aab276b50908', {method: "get"})
            .then(function (data) {
                data.json().then(function (data) {
                    fetch('https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token='+data.access_token+'&type=jsapi', {method: "get"})
                        .then(function (datas) {
                            datas.json().then(function (datas) {
                                let ticket = datas.ticket;
                                firstTime = createTimeStamp();
                                firstUrl = req.body.url;
                                let createNonceStrs = createNonceStr();
                                // 计算签名方法
                                const calcSignature = function (ticket, noncestr, ts,url) {
                                    let str = 'jsapi_ticket='+ticket+'&noncestr='+noncestr+'&timestamp='+ts+'&url='+url
                                    shaObj = new jsSHA("SHA-1", 'TEXT');
                                    shaObj.update(str)
                                    return shaObj.getHash( 'HEX');
                                }
                                let signature = calcSignature(ticket,createNonceStrs, createTimeStamp(),req.body.url);
                                const signatureObjs = {
                                    jsapi_ticket:ticket,
                                    noncestr:createNonceStrs,
                                    timestamp:createTimeStamp(),
                                    signature:signature,
                                    url:req.body.url
                                }
                                signatureObj = signatureObjs
                                res.json(signatureObj)
                            });
                        }).then(function (body) {
                            console.log(body);
                        });
                });
            }).then(function (body) {
                console.log(body);
            });
    }

})
//创建noncestr
const createNonceStr = function() {
    return Math.random().toString(36).substr(2, 15);
};
//创建timestamp
const createTimeStamp = function () {
    return parseInt(new Date().getTime() / 1000) + '';
};
module.exports = router;

