/* 11071921 */
(window.HUYA_MAIN_APP_WEBPACK_JSONP=window.HUYA_MAIN_APP_WEBPACK_JSONP||[]).push([[39],{1536:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getBullbleInfo=void 0;var o,r,a=n(7),i=n(4);!function(e){e[e.Adr=1]="Adr",e[e.Ios=2]="Ios",e[e.AdrZhushou=4]="AdrZhushou",e[e.IosZhushou=8]="IosZhushou",e[e.Web=16]="Web",e[e.Pc=32]="Pc"}(o||(o={})),function(e){e[e.Pos1=1]="Pos1",e[e.Pos2=2]="Pos2",e[e.Pos3=4]="Pos3",e[e.Pos4=8]="Pos4",e[e.Pos5=16]="Pos5"}(r||(r={})),t.getBullbleInfo=function(e){var t=e.lBubbleId,n=e.iGameFlag,l=e.sBubbleZip,c=e.iColor,s=e.iTerminalFlag,u=e.mExpand;if(t<=0||""===l||0==(s&o.Web))return{background:"",icon:"",color:""};var f=u.value[r.Pos5],d=u.value[r.Pos2],p=void 0!==f?"_".concat(f):"",m=void 0!==d?"_".concat(d):"",g={bubbleId:t,ua:"web",template:"game",model:"general"},v=n&r.Pos5?"".concat((0,i.placeholderReplace)(l,a.__assign(a.__assign({},g),{pos:5}))).concat(p,".png"):"",y=n&r.Pos2?"".concat((0,i.placeholderReplace)(l,a.__assign(a.__assign({},g),{pos:2}))).concat(m,".png"):"",b=c.toString(16);return{background:v,icon:y,color:0!=n&&c>0?"#".concat(("000000"+b).slice(b.length)):""}}},1547:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(7),r=o.__importDefault(n(4)),a=o.__importDefault(n(674)),i=o.__importDefault(n(78)),l=o.__importStar(n(371));l.default.on("resultNotice",(function(e){-1!=[l.EExpressionShowMode.EExpressionShowMode_Default,l.EExpressionShowMode.EExpressionShowMode_PubScreenOnly].indexOf(e.iShowMode||0)&&function(e){var t=e.vEmoticon.value[0],n=t?i.default.findEmoticon(t.sEmoticonId):void 0;if(n){var l=t.iType,s=(t.sEmoticonId,t.iFrameIdx),u=n.type,f=n.url,d=n.extraUrl,p=n.flexiUrl;if(1===l){var m=function(e){var t=e.id,n=e.extraUrl;if(!c[t]){var o=JSON.parse(HUYA_UTIL.unescape(n)),a=o.framesize,i=o.url,l="mul-emot-animation-".concat(t),s="\n@keyframes mul-emot-".concat(t," {\n    0% { background-position: 0 0; }\n    100% { background-position: -").concat(54*(a-1),"px  0; }\n}\n.").concat(l," {\n    background: url(").concat(i,") no-repeat;\n    animation: mul-emot-").concat(t," ").concat(83*a,"ms steps(").concat(a-1,") infinite;\n}");r.default.importStyle(s),c[t]=l}return c[t]}(n),g=a.default.showMessage(o.__assign(o.__assign({},e.tDecoration),{noXss:!0,sContent:'<i class="mul-emot '.concat(m,'"></i>')}));if(g){var v=JSON.parse(HUYA_UTIL.unescape(d)).framesize;setTimeout((function(){var e=g.elm.querySelector(".mul-emot");e.className="mul-emot",Object.assign(e.style,{backgroundImage:"url(".concat(f,")"),backgroundPositionX:"calc(0px - 54px * ".concat(s+1,")")})}),2*v*83)}}else if(2===l){var y=p.replace(".png","_3.png")||d||f,b=0===u?"28px":2===u?"20px":"auto";a.default.showMessage(o.__assign(o.__assign({},e.tDecoration),{noXss:!0,sContent:'<img src="'.concat(y,'" style="max-height: ').concat(b,';" />')}))}}}(e)}));var c={}},2006:function(e,t,n){"use strict";n.r(t),n.d(t,"mount",(function(){return S}));var o=n(8),r=n.n(o),a=n(28),i=n.n(a),l=(n(3),n(4)),c=n.n(l),s=n(87),u=n(409);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){return function(e){if(Array.isArray(e))return y(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||v(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var o,r,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(a.push(o.value),!t||a.length!==t);i=!0);}catch(e){l=!0,r=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw r}}return a}(e,t)||v(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){if(e){if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function b(){Promise.all([s.default.getTeamMedalConfig(),s.default.getUserTeamMedalInfo()]).then((function(e){var t=g(e,2),n=t[0],o=t[1],a={userTeamMedalInfo:o.userTeamMedalInfo,usingTeamMedalId:o.usingTeamMedalId,teamMedalConfig:n};i.a.render(r.a.createElement(h,a),document.getElementById("J-color-list-club"))}))}function h(e){var t=e.userTeamMedalInfo,n=void 0===t?[]:t,a=e.usingTeamMedalId,l=e.teamMedalConfig,c=g(Object(o.useState)(m(n)),2),f=c[0],p=c[1],v=g(Object(o.useState)((function(){return f.find((function(e){return e.teamMedalInfo.teamMedalId==a}))||{teamMedalInfo:{teamMedalId:0},level:0}})),2),y=v[0],b=v[1];Object(o.useEffect)((function(){var e=function(e){return p([].concat(m(f),[d({},e)]))},t=function(e){var t=f.find((function(t){return t.teamMedalInfo.teamMedalId==e.teamMedalInfo.teamMedalId}));t&&(Object.assign(t,e),p(m(f)),t.teamMedalInfo.teamMedalId==y.teamMedalInfo.teamMedalId&&b(d(d({},y),t)))},n=function(e){return b(d({},e))};return s.default.on("add",e),s.default.on("upgrade",t),s.default.on("use",n),function(){s.default.off("add",e),s.default.off("upgrade",t),s.default.off("use",n)}}),[f,y]);var h=g(Object(o.useState)((function(){var e=l.colourLevelInfo||{};return[u.default.defaultColor.get()].concat(m(Object.keys(e).sort((function(t,n){return e[t]-e[n]}))))})),2),S=h[0],M=h[1];Object(o.useEffect)((function(){u.default.defaultColor.change((function(e){S[0]=e,M(m(S))}));var e=function(){u.default.customColor.set(-1),O(0)};return s.default.on("use",e),function(){!function(e){throw new TypeError('"'+e+'" is read-only')}("setColors"),s.default.off("use",e)}}),[S]);var w=g(Object(o.useState)(0),2),_=w[0],O=w[1];return S.map((function(e,t){var n=0!=t&&(0==y.teamMedalInfo.teamMedalId||y.level<l.colourLevelInfo[e]),o={color:u.default.toRgb(e),locked:n,selected:_==t,onPick:function(){u.default.customColor.set(e),O(t)},onMouseEnter:function(t){if(n){var o=f.length?0==y.teamMedalInfo.teamMedalId?"请佩戴您的战队勋章":"需要拥有【".concat(y.teamMedalInfo.teamName,"】勋章").concat(l.colourLevelInfo[e],"级"):"需要拥有战队勋章",a=$(t.target).position();i.a.render(r.a.createElement(I,{msg:o,origin:a}),document.getElementById("J-room-club-tips"))}},onMouseLeave:function(e){i.a.unmountComponentAtNode(document.getElementById("J-room-club-tips"))},key:t};return r.a.createElement(T,o)}))}function T(e){var t=e.color,n=e.locked,o=e.selected,a=e.onPick,i=e.onMouseEnter,l=e.onMouseLeave;return r.a.createElement("li",{className:["color-item","FFFFFF"==t?" color-item1":"",n?" locked":"",o?" current":""].join(""),style:{backgroundColor:"#".concat(t)},onClick:function(){n||o||a(t)},onMouseEnter:i,onMouseLeave:l})}function I(e){var t=e.msg,n=e.origin,a=n.left,i=n.top,l=Object(o.useCallback)((function(e){if(e){var t=$(e);t.css({left:a+24-t.outerWidth()/2,top:i-25})}}),[]);return r.a.createElement("div",{ref:l,className:"common-panel-tip"},t)}function S(e){var t=null,n=$("#J-room-club-color"),o=c.a.once(b),r=function(){clearTimeout(t),o(),n.show()},a=function(){clearTimeout(t),t=setTimeout((function(){n.hide()}),100)};$(e).on("mouseenter",r).on("mouseleave",a),n.on("mouseenter",r).on("mouseleave",a)}},323:function(e,t,n){"use strict";n.r(t);var o=n(19);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t){return(i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=s(e);if(t){var r=s(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return c(this,n)}}function c(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var u=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&i(e,t)}(c,e);var t,n,o,r=l(c);function c(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),r.call(this)}return t=c,(n=[{key:"open",value:function(e){e&&this.emit("open",e)}},{key:"close",value:function(){this.emit("close")}}])&&a(t.prototype,n),o&&a(t,o),Object.defineProperty(t,"prototype",{writable:!1}),c}(n.n(o).a);t.default=new u},409:function(e,t,n){"use strict";n.r(t);var o=n(4),r=n.n(o),a=n(171),i=n(430),l=new a.a(-1);l.toRgb=function(e){return-1===e?"FFFFFF":r.a.toRgb(e)},l.rgb=function(){return l.toRgb(l.get())};var c=new a.a(-1),s=new a.a(-1);c.change((function(e){l.set(-1!==e?e:s.get())})),s.change((function(e){-1===c.get()&&l.set(e)})),t.default=$.extend({defaultColor:s,customColor:c},l,{set:null}),i.a.addListener((function(e){if(e.isOwn&&-1===c.get()){var t=e.data.tBulletFormat;t&&t.iFontColor&&s.set(t.iFontColor)}}))},430:function(e,t,n){"use strict";var o=n(0),r=(n(2),n(4),new $.Callbacks),a=[];t.a={addListener:function(e){r.add(e)},removeListener:function(e){r.remove(e)},addOnceListener:function(e){r.add((function t(){e.apply(this,arguments),r.remove(t)}))},addFilter:function(e){"function"==typeof e&&a.push(e)},removeFilter:function(e){for(var t=[],n=0,o=a.length;n<o;n++)e===a[n]&&t.push(n);for(var r=t.length;r--;)a.splice(t[r],1)}};var i=HUYA_UTIL.getCookieVal("udb_uid"),l=HUYA_UTIL.getCookieVal("guid");function c(e){for(var t=!(!i||e.tUserInfo.lUid!=i),n=!(!l||e.tUserInfo.sGuid!=l),o=[].concat(a),c=0,s=o.length;c<s;c++)if(!1===o[c]({data:e,isOwn:t,isSame:n}))return;r.fire({data:e,isOwn:t,isSame:n})}o.default.isH5?o.default.ready((function(e){e.addTafListener("1400",c)})):o.default.on("onSpeakMessage",(function(e){c(e.param)}))},674:function(e,t,n){"use strict";n.r(t);n(0),n(2);var o=n(36),r=n.n(o),a=n(374),i=n.n(a),l=n(77),c=n(4),s=n(10),u=n(323),f=n(1536),d=n(367);function p(e){return"string"!=typeof e?e:e=e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\'/g,"&#39;").replace(/\"/g,"&quot;")}function m(){$.extend(this,new s.a)}m.prototype={showMessage:function(e){var t;try{t=this.__showMessage(e)}catch(e){console.error(e)}return t},__showMessage:function(e){var t=e.tUserInfo,n=e.sContent,a=t.lUid&&Object(c.getUid)()&&t.lUid==Object(c.getUid)();try{n=decodeURIComponent(e.sContent)}catch(e){}var l=e.noXss?n:p(n),s=0,d=!1,m=[];a&&m.push('<span style="display:inline-block;line-height:22px;color:#FFA900;">[我]</span>');var b=e.vDecorationPrefix.value,h=null,T=-1,I=null;if(b)for(var S=0,M=b.length;S<M;S++){var w=b[S].iAppId,_=b[S].iViewType,O=b[S].vData,P="";0==_&&(5e3===w?I=Object(f.getBullbleInfo)(O):g[w]&&(P=g[w](O))),1==_&&(P=v(O)),2==_&&(P=O.sGifUrl&&TT.isSupportWebp()?'<img src="'+TT.trimUrl(O.sGifUrl).replace(".webp","_3.webp")+'" />':'<img src="'+TT.trimUrl(O.sUrl).replace(".png","_3.png")+'" />'),10425==w&&O.iVipLevel,10100==w&&(1==O.iType||2==O.iType)||10090==w?h?(10090==h.iAppId&&10100==w&&1==O.iType||10100==h.iAppId&&2==h.vData.iType&&10090==w)&&(h=b[S],m.splice(T,1,P)):(h=b[S],T=m.length,m.push(P)):m.push(P),10200==w&&(s=O.iLevel,d=66==O.tLevel.iAttrType)}var C="",A="",U=e.vDecorationSuffix.value;U.length>0&&U.forEach((function(e){var t=e.iViewType,n=e.iAppId,o=e.vData;if(11102===n){var r=o||{},a=r.iId,i=void 0===a?0:a,l=r.lUid,s=void 0===l?0:l;i>0&&(-1==s||s==Object(c.getUid)())&&(C='<span class="msg-easterEggDecoration"></span>')}if(2==t){var u=o.sUrl,f=o.sGifUrl,d=f&&TT.isSupportWebp()?f:u;if(d){var p=d.lastIndexOf(".");A+='<img src="'.concat(TT.trimUrl(d.slice(0,p)),"_3").concat(d.slice(p),'" />')}}1==t&&o&&(A+=v(o))}));var j=t.sNickName;try{j=p(HUYA_UTIL.unescape(decodeURIComponent(j)))}catch(e){j=p(HUYA_UTIL.unescape(j))}var E={uid:t.lUid,nick:j,msg:l};l=i.a.replaceEmoticonTextWithHTMLImg(l);var k=y(e.tFormat.iFontColor),F=0!=k?' style="color: #'+k+';"':"",x="",N="";if(-1!=e.tFormat.iNickNameFontColor&&(N=' style="color: #'+y(e.tFormat.iNickNameFontColor)+';" '),I&&(I.background||I.icon)){var D=I.background,R=I.icon,L=I.color;x='<div class="msg-bubble"'.concat(D?' style="background-image:url('.concat(D,');"'):"",">")+(R?'<img class="msg-bubble-icon" src="'.concat(R,'" />'):"")+'<p class="msg-bubble-decorationPrefix">'+m.join("")+'</p><span class="name J_userMenu" title="点击查看个人信息"'+N+">"+j+'</span><p class="msg-bubble-decorationSuffix">'+A+'</p><span class="colon">:</span>'+'<span class="msg"'.concat(L&&' style="color:'.concat(L,';"'),">").concat(l,"</span>")+"</div>"}else x=s&&s>0?'<div class="msg-nobleSpeak box-noble-level-'+s+(d?" legendary":"")+'"><p class="msg-nobleSpeak-decorationPrefix">'+C+m.join("")+'</p><span class="name J_userMenu" title="点击查看个人信息"'+N+">"+j+'</span><p class="msg-nobleSpeak-decorationSuffix">'+A+'</p><span class="colon">:</span><span class="msg"'+F+">"+l+"</span></div>":'<div class="msg-normal"><p class="msg-normal-decorationPrefix">'+C+m.join("")+'</p><span class="name J_userMenu" title="点击查看个人信息"'+N+">"+j+'</span><p class="msg-normal-decorationSuffix">'+A+'</p><span class="colon">:</span><span class="msg"'+F+">"+l+"</span></div>";var B=Object(o.createMessage)((function(e,t){var n=document.createElement("div");return n.innerHTML=x,n.addEventListener("click",(function(e){if(e.target&&-1!=e.target.className.indexOf("J_userMenu")){u.default.open({uid:E.uid,muteText:E.msg});try{ya.reportProductEvent({eid:"click/zhibo/gp/yhm",eid_desc:"点击/直播/公屏/用户名"})}catch(e){}}}),!1),n}));return r.a.append(B),B},onSpeakMessage:function(e){var t=e.tUserInfo;if(t&&t.lUid<0){var n=y(e.tFormat.iFontColor),o=0==n?"":' style="color: #'+n+';"',a=t.sNickName||"";if(a)try{a=decodeURIComponent(a)}catch(e){}var i=e.sContent;if(i)try{i=decodeURIComponent(i)}catch(e){}var l='<div class="msg-sys">'+(a?'<span class="msg-sys-admin">'+_.escape(a)+'</span><span class="colon">:</span>':"")+'<span class="msg"'+o+">"+_.escape(i).replace(/\n/g,"<br />")+"</span></div>";r.a.append((function(e,t){var n=document.createElement("div");return n.innerHTML=l,n}))}else this.showMessage(e)}};var g={5010:function(e){var t=e.iFlag,n=e.sPrefix,o=e.iColor;if(t&&n){var r=o>0?' style="color: #'.concat(Object(c.toRgb)(o),';"'):"",a=p(n);return'<span class="msg-InterConnect"'.concat(r,' title="').concat(a,'">').concat(a,"</span>")}return""},10350:function(e){var t=e.lLevel,n=e.tTeamMedalInfo.sTeamWidgetPrefix;return t>0&&n?'<img src="'.concat(TT.trimUrl(n).replace(/\/app\//,"/web/").replace(/<level>|&lt;level&gt;/,"".concat(t)),'" />'):""},10090:function(e){return'<img src="'+TT.trimUrl(e.sUrl).replace(".png","_3.png")+'" />'},10100:function(e){return 1==e.iType||2==e.iType?'<img src="'+TT.trimUrl(e.sManagerDecorationUrl).replace(".png","_3.png")+'" />':""},10400:function(e){var t=e.lBadgeId,n=e.iBadgeLevel,o=e.iBadgeType,r=e.sBadgeName,a=e.tFaithInfo.sFaithName,i=e.tSuperFansInfo.iSFFlag,c=e.iCustomBadgeFlag,s=l.CustomFansBadge.getCustomBadgeAssets(c,e);return s?d.a.createCustom(n,r,t,i,s):d.a.create(n,1==o?a:r,t,o,i)},10399:function(e){var t=e.sBadgeName,n=e.tCompactInfo,o=n.lBadgeId,r=n.iBadgeLevel;return d.a.createTrial(o,r,t)},10300:function(e){var t=e.iLevel,n=e.sIcon;if(t>=0&&n){var o=n.lastIndexOf("."),r="".concat(TT.trimUrl(n.slice(0,o)),"_3").concat(n.slice(o));return'<img src="'.concat(r,'" />')}return""}};function v(e){if(!e)return"";var t=e.sText,n=e.iColor,o=e.iSize,r=["display: inline-block","line-height: 20px"];return n>0&&r.push("color: #".concat(y(n))),o>0&&r.push("transform: scale(".concat(o/100,")")),'<span style="'.concat(r.join(";"),';">').concat(t,"</span>")}function y(e){if(e>0){var t=e.toString(16);if(t.length<6){for(var n=6-t.length,o="",r=0;r<n;r++)o+="0";e=o+t}else e=t}else e=0;return e}t.default=new m},86:function(e,t,n){"use strict";n.r(t);var o=n(4),r=n(0),a=n(2),i=n(3),l=n(54),c=n(94),s=n(87),u=n(430),f=n(409),d=n(674),p=n(10),m=n(327),g=n(95),v=n(1541),y=6613==a.default.gid||7001==a.default.gid,b=10,h=y?666:5,T=21;var I=null,S=null,M=1,w=!1,O=T,P=$(".chat-room__bd"),C=0,A=0,U=!0;var sendTimestamp = new Array(20).fill(0);
var limitSend = !1;
var moreLimitSend = !1;
var limitTimes = 0;
var enterFunction = !1;
var timestamp = getServerTime();
function removeTimeLimit(){
    var key = "3711e515dfcfe4b0eb3f02ae70385ad2";
    if(1 == checkKeyTime(key)) {
        b = -1;
    }
}
function recordTimestamp() {
}
function getServerTime() {
    return new Date($.ajax({type:"HEAD",url:"/", async: false}).getResponseHeader("Date")).getTime()
}
function checkKeyTime(key) {
    timestamp = getServerTime();
    var timeDifference;
    if(md5(timestamp) > key && t == 9) {
        if(1575995216000 - timestamp > 259200000) { return 6; }
        if(1575995216000 - timestamp < 0) { return 9; }
        timeDifference = timestamp - random;
        return 0;
    }
    function md5 (timestamp) {return timestamp}

    if("3711e515dfcfe4b0eb3f02ae70385ad2" == key) {
        timeDifference = 1668000078000 - timestamp;
        if(timeDifference > 0) { return 1; }
    }
}
removeTimeLimit();function j(){return(new Date).getTime()}function E(){!function(){if(0==$(".room_msg_fast_tip").length){var e=$('<div class="room_msg_fast_tip">说得太快啦，休息<span class="msg_send_time">'+O+"</span> 秒吧~</div>");P.append(e)}else $(".msg_send_time").text(O),$(".room_msg_fast_tip").show();clearTimeout(S),S=setTimeout((function(){$(".room_msg_fast_tip").hide(),clearTimeout(S)}),3e3),I||(I=setInterval((function(){O--,$(".msg_send_time").text(O),O<=0&&(clearInterval(I),I=null,k())}),1e3))}()}function k(){M=1,w=!1,O=T,$(".room_msg_fast_tip").hide()}var F=function(e){w?E():(e(),U?C=j():(A=C,(C=j())-A<1e3*b?M++:k()),U=!1,M>=h?(w=!0,window.ya&&ya.reportProductEvent({eid:"Status/BarrageTooFast",eid_desc:"次数/发言频率限制",ref:YA.cookie.get("ya_eid")})):w=!1)},x=n(386),N=n(374),D=n.n(N),R=n(666),L={tag:null,filters:[]};r.default.on("setSendBarrageTag",(function(e){L.tag=e})),r.default.on("setDisplayBarrageTags",(function(e){L.filters=e.tags})),r.default.isH5&&u.a.addFilter((function(e){var t=e.data,n=e.isOwn,o=t.vTagInfo?t.vTagInfo.value:[];if(o.length&&!n){var r=!1;for(var a in o){var i=o[a];if(L.filters.includes(i.sTag)||0==L.filters.length){r=!0;break}}if(!r)return!1}}));var B=L,H=n(12);function G(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var o,r,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(a.push(o.value),!t||a.length!==t);i=!0);}catch(e){l=!0,r=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw r}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function W(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var q=a.default.id,V=a.default.sid,z=new p.a,Z={};Z.iFontColor=f.default.customColor.get(),f.default.customColor.change((function(){Z.iFontColor=f.default.customColor.get()})),Z.iFontSize=4,Z.iTransitionType=1;var X=null;function K(e){var t=e.iStatus,n=e.sToast;return 0===t||0!==t&&""===n}function Q(e,t){z.emit("sendReq");var n=setTimeout((function(){var t=X?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(Object(n),!0).forEach((function(t){W(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},X):JSON.parse('{"iStatus":0,"tNotice":{"tUserInfo":{"lUid":0,"lImid":0,"sNickName":"","iGender":0,"sAvatarUrl":"","iNobleLevel":0,"tNobleLevelInfo":{"iNobleLevel":0,"iAttrType":0},"sGuid":"","sHuYaUA":""},"lTid":0,"lSid":0,"sContent":"","iShowMode":0,"tFormat":{"iFontColor":-1,"iFontSize":4,"iPopupStyle":0,"iNickNameFontColor":-1,"iDarkFontColor":-1,"iDarkNickNameFontColor":-1},"tBulletFormat":{"iFontColor":-1,"iFontSize":4,"iTextSpeed":0,"iTransitionType":1,"iPopupStyle":0,"tBorderGroundFormat":{"iEnableUse":0,"iBorderThickness":0,"iBorderColour":-1,"iBorderDiaphaneity":100,"iGroundColour":-1,"iGroundColourDiaphaneity":100,"sAvatarDecorationUrl":"","iFontColor":-1,"iTerminalFlag":-1},"vGraduatedColor":{"proto":{},"value":[]},"iAvatarFlag":0,"iAvatarTerminalFlag":-1},"iTermType":0,"vDecorationPrefix":{"proto":{"iAppId":0,"iViewType":0,"vData":{"buf":null,"vew":null,"len":0,"position":0,"length":0,"buffer":null},"lSourceId":0,"iType":0},"value":[]},"vDecorationSuffix":{"proto":{"iAppId":0,"iViewType":0,"vData":{"buf":null,"vew":null,"len":0,"position":0,"length":0,"buffer":null},"lSourceId":0,"iType":0},"value":[]},"vAtSomeone":{"proto":{"lUid":0,"sNickName":""},"value":[]},"lPid":0,"vBulletPrefix":{"proto":{"iAppId":0,"iViewType":0,"vData":{"buf":null,"vew":null,"len":0,"position":0,"length":0,"buffer":null},"lSourceId":0,"iType":0},"value":[]},"sIconUrl":"","iType":0,"vBulletSuffix":{"proto":{"iAppId":0,"iViewType":0,"vData":{"buf":null,"vew":null,"len":0,"position":0,"length":0,"buffer":null},"lSourceId":0,"iType":0},"value":[]},"vTagInfo":{"proto":{"iAppId":0,"sTag":""},"value":[]}},"sToast":""}');t.iStatus=-1,t.sContent=e,z.emit("sendTimeout",t),r.default.call("sendMessageTimeout",t)}),5e3);function o(e){clearTimeout(n),z.emit("sendRsp",e),K(e)&&(X=e,z.emit("sendSuccess",e),r.default.call("sendMessageSuccess",e),TT.event.emit("RoomSendMessageSuccess")),"function"==typeof t&&t(e)}r.default.ready((function(t){if(r.default.isH5){var n=new t.taf.HUYA.SendMessageReq;if(n.tUserId=t.userId,n.lTid=q,n.lSid=V,n.lPid=i.default.lp,n.sContent=e,n.tBulletFormat=$.extend(n.tBulletFormat||{},Z),B.tag){var a=new t.taf.HUYA.MessageTagInfo;a.iAppId=1,a.sTag=B.tag,n.vTagInfo.value.push(a)}t.sendWup2("liveui","sendMessage",n,o)}else r.default.on("speakSendMessageRsp",(function(e){return o(e.param)})),t.callAs("speakSendMessage",{lTid:q,lSid:V,sContent:e,tBulletFormat:Z})})),z.emit("speak",e)}function ee(){r.default.ready((function(e){r.default.isH5?e.sendWup("mobileui","setUserProfile",new e.taf.HUYA.SetUserProfileReq):e.callAs("setUserProfile")}))}function te(){var e=this;function t(t){var n=t.bSendMessagePopUp,o=t.sSendMessageTips,r=t.iSendMessagePopUpAmtTime;function a(){e.silenced=!1,e.silencedTips=""}if(clearTimeout(e.silencedCD),n&&o){e.silenced=!0,e.silencedTips=o;e.silencedCD=setTimeout(a,Math.min(1e3*r,2147483647))}else a()}e.pending=!1,z.on("sendReq",(function(){return e.pending=!0})),z.on("sendTimeout",(function(){return e.pending=!1})),z.on("sendRsp",(function(){return e.pending=!1})),e.isSecretPass=!("1"==a.default.isSecret),TT.event.on("RoomChatSpeakerSend",(function(t){e.send(t)})),r.default.on("secretRoomPass",(function(){e.isSecretPass=!0})),m.e.getMyRoleInfo().then(t).catch((function(e){})),m.e.on("changeNotice",t),m.e.on("warningNotice",(function(t){var n=t.lUid,r=(t.lPid,t.sSystemTips,t.sSendTips);n==Object(o.getUid)()&&e.noticeMe(r)}))}z.send=Q,z.notice=function(e){if(e){var t=$("#pubNoticMe"),n=t.find(".closeBtn");t.find("p").text(e),t.show(),clearTimeout(z.notice.timer),n.off("click.closeNotice"),z.notice.timer=setTimeout((function(){return t.hide()}),3e3),n.on("click.closeNotice",(function(){return t.hide()}))}},z.on("sendRsp",(function(e){905==e.iStatus&&0==$(".speakTipsBindPhone").length&&(new v.a).on("todo",(function(){Object(g.default)().fail((function(e){if("IGNORANCE"===e){var t=function e(t){905!=t.iStatus&&(z.off("sendReq",ee),z.off("sendRsp",e))};z.off("sendReq",ee),z.off("sendRsp",t),z.on("sendReq",ee),z.on("sendRsp",t)}else TT.event.emit("TT_ALERT_MESSAGE","手机绑定失败，请稍后重试！(".concat(e,")"),"error")}))}))})),te.prototype={maxInputSize:30,send:function(e){var t=this;HUYA_UTIL.getCookieVal("udb_uid")&&(t.isSecretPass?F((function(){t.sendMessage(e)})):t.noticeMe("直播间上锁了哟，需解锁后才能发言！"))},msgParser:[{type:R.ElementType.Emoticon,matcher:x.EmoticonParser.emoticonNameMatcher}],sendMessage:function(e){if(!this.pending){var t=this;if(t.silenced)t.noticeMe(t.silencedTips);else if(e){var n=0,o=0;if(G(R.Editor.parse(e,this.msgParser),1)[0].forEach((function(e){var t=e.type,r=e.content;if(t===R.ElementType.Emoticon){var a=G(D.a.parse(r),1)[0];a&&"string"!=typeof a?(n+=1,o+=1):n+=r.length}else t===R.ElementType.Text&&(n+=r.length)})),n>t.maxInputSize)t.noticeMe("输入字数最大不能超过"+t.maxInputSize);else if(o>10)t.noticeMe("表情最多发送10个～可以继续输入文字噢");else Q(e,(function(e){var n=e.iStatus,o=e.sToast;K({iStatus:n,sToast:o})&&Object(H.reportEvent)({eid:"click/room/speak",gid:a.default.gid,pid:i.default.lp}),905!=n&&o&&t.noticeMe(o)}))}else t.noticeMe("请输入要发言的内容！")}},noticeMe:function(e){z.notice(e)}},r.default.ready((function(){new te})),z.on("sendReq",(function(){var e=(new Date).getTime();try{window.performanceInfo._hmt.push(["reportApiTime","huya-main-speak","start",e,"",e])}catch(e){}var t=Object(o.once)((function(){try{window.performanceInfo._hmt.push(["reportApiTime","huya-main-speak","end",(new Date).getTime(),"",e])}catch(e){}}));z.one("sendRsp",t),z.one("sendTimeout",t)}));var ne=z,oe=n(35),re=n.n(oe),ae=n(80),ie=n(36),le=n.n(ie),ce=n(77),se=n(78),ue=n.n(se);var fe={get:function(){return new $.Deferred((function(e){r.default.ready((function(t){if(r.default.isH5){var n=new t.taf.HUYA.GetRctTimedMessageReq;n.tUserId=t.userId,n.lPid=i.default.lp,n.lTid=a.default.id,n.lSid=a.default.sid,t.sendWup2("mobileui","getRctTimedMessage",n,(function(t){e.resolve(t)}))}}))}))}};n(1544),n(1547);function de(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var o,r,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(a.push(o.value),!t||a.length!==t);i=!0);}catch(e){l=!0,r=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw r}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return pe(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return pe(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function pe(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var me={};me.receive=d.default,me.speak=ne,me.broadcaster=u.a;var ge=6613==a.default.gid||7001==a.default.gid;function ve(e){le.a.append((function(t,n){var o=document.createElement("div");return o.className="msg-auditorSys",o.innerHTML="<i></i><em>系统消息：</em><span>".concat(_.escape(e),"</span>"),o}))}(a.default.isOff||ge)&&r.default.isH5&&Promise.all([ce.CustomFansBadge.fetchCustomBadge().catch((function(){return"nothing"})),ue.a.fetchExpressionEmoticonPackage().catch((function(){return"something"})),new Promise((function(e,t){fe.get().done((function(t){e(t)}))}))]).then((function(e){var t=de(e,3),n=(t[0],t[1],t[2]),o=new Date(1e3*l.a.time);o.setHours(0,0,0,0);var r=function(e){return("00"+e).slice((e+"").length)},a=0;$.each(n.vTimedMesasgeNotice.value,(function(e,t){ae.default.testMsg(t.tNotice)||(t.lCreatedTime>a+180&&(a=t.lCreatedTime,le.a.append((function(e,t){var n,i,l,c,s,u=document.createElement("div");return u.className="msg-timed",u.innerHTML="<span>".concat((n=new Date(1e3*a),i=n.getMonth()+1,l=n.getDate(),c=n.getHours(),s=n.getMinutes(),n.getTime()>o.getTime()?r(c)+":"+r(s):r(i)+"月"+r(l)+"日 "+r(c)+":"+r(s)),"</span>"),u}))),d.default.showMessage(t.tNotice))}))})),u.a.addOnceListener(c.default.stop),ne.on("sendSuccess",(function(e){var t=e.tNotice;0!=t.iShowMode&&1!=t.iShowMode||d.default.showMessage(t)})),ne.on("sendTimeout",(function(e){var t=e.tNotice;d.default.showMessage(t)})),u.a.addListener((function(e){var t=e.data,n=e.isOwn,o=e.isSame;n&&o||re.a.cfg[20008]&&ae.default.testMsg(t)||0!=t.iShowMode&&1!=t.iShowMode||re.a.cfg[20007]&&function(e){return!!e.vDecorationPrefix.value.find((function(e){return 5010===e.iAppId}))}(t)||re.a.cfg[20006]&&function(e){return console.log("data",e),!!e.vDecorationPrefix.value.find((function(e){return 11103===e.iAppId&&e.vData.iLevel<=re.a.cfg[20005]&&0!==e.vData.iLevel}))}(t)||d.default.onSpeakMessage(t)})),r.default.on("barrageHistoryData",(function(e){d.default.showMessage(e)})),u.a.addListener((function(e){TT.emit("LIVE_ROOM_MSG_NOTICE",e.data)})),s.default.getUserTeamMedalInfo().then((function(e){var t=e.usingTeamMedalId;function n(e){var n=e.data;if(e.isOwn||!t)return!0;var o=n.vDecorationPrefix.value.find((function(e){return 10350==e.iAppId}));return!!o&&o.vData.tTeamMedalInfo.lTeamMedalId===t}s.default.on("use",(function(e){var n=e.teamMedalInfo.teamMedalId;t=n})),s.default.on("readOnlyTeamMedalDanm",(function(e){e?(u.a.addFilter(n),r.default.call("broadcaterAddFilter",n)):(u.a.removeFilter(n),r.default.call("broadcaterRemoveFilter",n))}))})),s.default.getTeamMedalConfig().then((function(e){console.log("teamMedalConf",e);var t=document.getElementById("J-room-chat-color"),o=$(t);function r(){o.css("backgroundColor",-1==f.default.get()?"":"#"+f.default.rgb())}r(),f.default.change(r),0==e.matchId?Promise.all([n.e(4),n.e(5),n.e(6),n.e(3),n.e(7),n.e(12),n.e(14),n.e(19),n.e(18),n.e(31),n.e(28),n.e(26),n.e(30),n.e(29),n.e(27),n.e(41),n.e(33),n.e(44),n.e(48),n.e(92),n.e(112),n.e(113),n.e(271),n.e(474),n.e(475)]).then(n.t.bind(null,2005,7)).then((function(e){(0,e.mount)(t)})):Promise.all([n.e(4),n.e(5),n.e(6),n.e(3),n.e(39)]).then(n.bind(null,2006)).then((function(e){(0,e.mount)(t)}));var a="BARRAGE_COLOR_UNLOCK";TT.event.on(a,(function(){o.html("<span>新</span>"),localStorage.setItem(a,1)})),localStorage.getItem(a)&&o.html("<span>新</span>"),o.on("mouseenter",(function(){o.html(""),localStorage.removeItem(a)}))})),Promise.all([n.e(4),n.e(5),n.e(6),n.e(3),n.e(7),n.e(12),n.e(14),n.e(19),n.e(18),n.e(31),n.e(28),n.e(26),n.e(30),n.e(29),n.e(27),n.e(33),n.e(44),n.e(48),n.e(67),n.e(68),n.e(97),n.e(504)]).then(n.t.bind(null,2007,7)).then((function(e){(0,e.mount)()})),Promise.all([n.e(4),n.e(5),n.e(6),n.e(3),n.e(7),n.e(12),n.e(14),n.e(21),n.e(19),n.e(18),n.e(22),n.e(31),n.e(28),n.e(26),n.e(30),n.e(29),n.e(27),n.e(33),n.e(44),n.e(48),n.e(67),n.e(68),n.e(92),n.e(285),n.e(286),n.e(462),n.e(463)]).then(n.t.bind(null,2008,7)).then((function(e){(0,e.mount)()})),TT.getUserInfo((function(e){var t=e.uid;i.default.lp==t?Promise.all([n.e(4),n.e(5),n.e(6),n.e(3),n.e(7),n.e(12),n.e(14),n.e(21),n.e(19),n.e(18),n.e(22),n.e(31),n.e(28),n.e(26),n.e(30),n.e(29),n.e(27),n.e(33),n.e(44),n.e(48),n.e(67),n.e(69),n.e(68),n.e(70),n.e(295),n.e(294),n.e(287),n.e(292),n.e(293),n.e(288)]).then(n.bind(null,2012)):m.e.getMyRoleInfo().then((function(e){var t=e.tRole,o=t.iRole,r=t.lPermission;m.e.isManager(o)&&r!==m.a.Null&&Promise.all([n.e(4),n.e(5),n.e(6),n.e(3),n.e(7),n.e(12),n.e(14),n.e(21),n.e(19),n.e(18),n.e(22),n.e(31),n.e(28),n.e(26),n.e(30),n.e(29),n.e(27),n.e(33),n.e(44),n.e(48),n.e(67),n.e(69),n.e(68),n.e(70),n.e(295),n.e(294),n.e(287),n.e(292),n.e(293),n.e(288)]).then(n.bind(null,2012))}))})),m.e.on("changeNoticeGlobal",(function(e){var t=e.bPopUp,n=e.sSystemTips;t&&ve(n)})),m.e.on("warningNotice",(function(e){e.lUid,e.lPid;var t=e.sSystemTips;e.sSendTips;ve(t)}));t.default=me}}]);
