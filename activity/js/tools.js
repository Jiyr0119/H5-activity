const maplistToArr = maplist => {
	var list = [];
	if (maplist.data) {
	    var title = maplist.data[0];
	    for (var i = 1; i < maplist.data.length; i++) {
	      var row = new Object();
	      for (var j = 0; j < title.length; j++) {
	        row[title[j]] = maplist.data[i][j];
	      }
	      list.push(row);
	    }
	} else {
	    var title = maplist[0];
	    for (var i = 1; i < maplist.length; i++) {
	      var row = new Object();
	      for (var j = 0; j < title.length; j++) {
	        row[title[j]] = maplist[i][j];
	      }
	      list.push(row);
	    }
	}
  	return list;
}
const formatTimeSec = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
var browser = {

        versions: function() {

                  var u = navigator.userAgent,

                        app = navigator.appVersion;

                  return {

                            trident: u.indexOf('Trident') > -1,                        /*IE内核*/

                            presto: u.indexOf('Presto') > -1,          /*opera内核*/

                            webKit: u.indexOf('AppleWebKit') > -1, /*苹果、谷歌内核*/

                            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,        /*火狐内核*/

                             mobile: !!u.match(/AppleWebKit.*Mobile.*/),        /*是否为移动终端*/

                             ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), /*ios终端*/

                             android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, /*android终端或者uc浏览器*/

                             iPhone: u.indexOf('iPhone') > -1,          /*是否为iPhone或者QQHD浏览器*/

                             iPad: u.indexOf('iPad') > -1,      /*是否iPad*/

                             webApp: u.indexOf('Safari') == -1,          /*是否web应该程序，没有头部与底部*/

                             souyue: u.indexOf('souyue') > -1,

                             superapp: u.indexOf('superapp') > -1,

                             weixin:u.toLowerCase().indexOf('micromessenger') > -1,

                             Safari:u.indexOf('Safari') > -1

                   };

          },

                   language: (navigator.browserLanguage || navigator.language).toLowerCase()

};
function GetRequest() {
    var arrStk = null;
    var url = location.search; //获取url中"?"符后的字串
    var outstr =  decodeURI(url);
    var theRequest = new Object();
    if (outstr.indexOf("?") != -1) {
        var str = outstr.substr(1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
};
