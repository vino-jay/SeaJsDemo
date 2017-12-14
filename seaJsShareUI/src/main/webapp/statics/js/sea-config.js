(function() {
	"use strict";
	// 配置组件JS文件seajs引用
	seajs.config({
		// 调试模式
		debug : true,
		//基础路径
		base : "http://localhost:82/seaJsShareUI/statics/",
	    // 路径配置
	    paths: {
	    	'page' : 'pages',
	    	//'module' : 'modules'
	    },
		alias : {
			"jquery" :"js/jquery-1.11.0.min.js",
			"module1":"modules/module1.js",
			"module2":"modules/module2.js",
			"module3":"modules/module3.js",
			"module4":"modules/module4.js"		
		},
		//  其他的变量名称,使用时 require("language/{local}.js");//获取中文配置文件
		vars : {
			'local': 'zh-cn'
		},
		charset:"utf-8"
	});
})();