//引入Mockjs
const Mock = require('mockjs')
// 获取mock.Random对象
const Random = Mock.Random;

const indexList = Mock.mock([{

		blogtitle: "Javascript基础到入门",
		briefcontent: "什么是JavaScript JavaScript是一种基于对象和事件驱动的、并具有安全性能的脚本语言,已经被广泛用于Web应用开发,常用来为网页添加各式各样的动态功能,为用户提供更流畅美观的浏览效果。通常JavaScript脚本是通过...",
		publishTime: Random.date('yyyy-MM-dd'),
		"watchnum|100-1000": 10,
		tagList: [{
				tagname: "JavaScript",
				"color|1": ["red", "blue", "pink"]
			},
			{
				tagname: "css",
				"color|1": ["red", "blue", "pink"]
			}
		],
		selectedkind: [{
			name: "back-end",
			"color|1": ["red", "blue", "pink"]
		}],
		blogcontent: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b> @cparagraph(30,60) </b>",
		blogToc: "<ul><li><a>Javascript基础到入门</a></li><li><a><a>css 中“~”和“>”以及“ ””是什么意思 - 随记</a></a></li><li><a>什么是php?php是什么?_PHP_程序猿</a></li></ul>"
	},

	{
		blogtitle: "css 中“~”和“>”以及“ ””是什么意思 - 随记",
		briefcontent: "css中“~”和“>”是什么意思?css中“~”是:为所有相同的父元素中位于p元素之后的所有ul元素设置背景:p~ul{ background:#ff0000;}快乐生活 ...",
		publishTime: Random.date('yyyy-MM-dd'),
		"watchnum|100-1000": 10,
		tagList: [{
			tagname: "css",
			"color|1": ["red", "blue", "pink"]
		}],
		selectedkind: [{
			name: "back-end",
			"color|1": ["red", "blue", "pink"]
		}],
		blogcontent: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b> @cparagraph(30,60) </b>",
		blogToc:  "<ul><li><a>Javascript基础到入门</a></li><li><a><a>css 中“~”和“>”以及“ ””是什么意思 - 随记</a></a></li><li><a>什么是php?php是什么?_PHP_程序猿</a></li></ul>"
	},

	{
		blogtitle: "什么是php?php是什么?_PHP_程序猿",
		briefcontent: "什么是php?PHP是PHPHypertextPreprocessor(超文本与处理器)的首字母缩写PHP... PHP 是 PHP Hypertext Preprocessor(超文本与处理器)的首字母缩写。这种方法叫做递归缩写。",
		publishTime: Random.date('yyyy-MM-dd'),
		"watchnum|100-1000": 10,
		tagList: [{
			tagname: "php",
			color: "blue"
		}],
		selectedkind: [{
			name: "back-end",
			"color|1": ["red", "blue", "pink", "hotpink"]
		}],
		blogcontent: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b> @cparagraph(30,60) </b>",
		blogToc:  "<ul><li><a>Javascript基础到入门</a></li><li><a><a>css 中“~”和“>”以及“ ””是什么意思 - 随记</a></a></li><li><a>什么是php?php是什么?_PHP_程序猿</a></li></ul>"
	},
	{

		blogtitle: "Javascript基础到入门",
		briefcontent: "什么是JavaScript JavaScript是一种基于对象和事件驱动的、并具有安全性能的脚本语言,已经被广泛用于Web应用开发,常用来为网页添加各式各样的动态功能,为用户提供更流畅美观的浏览效果。通常JavaScript脚本是通过...",
		publishTime: Random.date('yyyy-MM-dd'),
		"watchnum|100-1000": 10,
		tagList: [{
				tagname: "JavaScript",
				"color|1": ["red", "blue", "pink"]
			},
			{
				tagname: "css",
				"color|1": ["red", "blue", "pink"]
			}
		],
		selectedkind: [{
			name: "back-end",
			"color|1": ["red", "blue", "pink"]
		}],
		blogcontent: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b> @cparagraph(30,60) </b>",
		blogToc: "<ul><li><a>Javascript基础到入门</a></li><li><a><a>css 中“~”和“>”以及“ ””是什么意思 - 随记</a></a></li><li><a>什么是php?php是什么?_PHP_程序猿</a></li></ul>"
	}
])

export default {
	indexList
}
