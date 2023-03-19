// ==UserScript==
// @name         虎牙自动发弹幕
// @namespace    https://item.taobao.com/item.htm?id=670749376549
// @note         可以自定义弹幕、自定义发送频率、随机发送弹幕
// @description  虎牙自动发弹幕【淘宝店铺（因稀有才珍贵）制作】1.23.0324
// @version      1.23.0324.01
// @author       淘宝店铺（因稀有才珍贵）制作
// @match        https://www.huya.com/*
// @icon         https://www.huya.com/favicon.ico
// @require      https://fastly.jsdelivr.net/combine/gh/domg007/gomg@V1.2.0216.07/AutoSend_Huya7.js
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_notification
// @grant        GM_addValueChangeListener
// @license      因稀有才珍贵
// ==/UserScript==

(function() {

    !!$("#J_roomTitle").length && AutoSend_Huya("106d2f80c6bfdfeac52c11a1d4aa4b93");

})();
