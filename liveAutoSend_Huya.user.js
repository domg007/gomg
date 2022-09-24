// ==UserScript==
// @name         虎牙直播间自动跑房发弹幕
// @namespace    https://item.taobao.com/item.htm?id=670749376549
// @note         ↑是淘宝宝贝链接噢，欢迎进店定制脚本
// @version      1.7.1015.02
// @description  自动打开直播间发送指定弹幕后自动进入下个直播间【淘宝店铺（因稀有才珍贵）制作】_1.7.1015
// @author       【淘宝店铺（因稀有才珍贵）】
// @match        *://www.huya.com/*
// @exclude      https://www.huya.com/g
// @icon         https://a.msstatic.com/huya/main3/widget/list-tags/img/blueRay_tips_9d4b7.png
// @require      https://fastly.jsdelivr.net/combine/gh/domg007/gomg@V1.2.0912.01/liveAutoSend5_Huya.js
// @grant        GM_openInTab
// @grant        GM_notification
// @license      因稀有才珍贵
// ==/UserScript==

$(window).ready(() =>{
	liveAutoSend("646b995714369621c5ef6f17f7e5dd10");
});
