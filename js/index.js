//		document.querySelector('html').style.fontSize = window.screen.width / 20 + 'px';
		window.onresize = function (){
			let widths = document.body.offsetWidth ||document.documentElement.offsetWidth; //实时获取动态宽度
			document.querySelector('html').style.fontSize = widths / 20 + 'px';
//			document.querySelector('html').style.fontSize = window.screen.width / 20 + 'px'; //获取屏幕固定宽度
		}