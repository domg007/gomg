// ==UserScript==
// @name         虎牙直播间自动跑房发弹幕
// @namespace    https://item.taobao.com/item.htm?id=670749376549
// @note         ↑是淘宝宝贝链接噢，欢迎进店定制脚本
// @version      1.25.0605.01
// @description  自动打开直播间发送指定弹幕后自动进入下个直播间【淘宝店铺（因稀有才珍贵）制作】_1.25.0130
// @author       【淘宝店铺（因稀有才珍贵）】
// @match        *://www.huya.com/*
// @exclude      https://www.huya.com/g
// @icon         https://a.msstatic.com/huya/main3/widget/list-tags/img/blueRay_tips_9d4b7.png
// @require      https://fastly.jsdelivr.net/combine/gh/domg007/gomg@V1.2.0605.01/liveAutoSend8_Huya.js
// @grant        GM_openInTab
// @grant        GM_notification
// @license      因稀有才珍贵
// ==/UserScript==

$(window).ready(() =>{
	liveAutoSend("99dc11c3600eec6bc084f513d6cba11b");
});
