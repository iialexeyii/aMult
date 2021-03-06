/* 
  Created by Art Sites Studio
  Site: art-sites.org
  Version: 1.0
*/

(function( $ ) {
	$.aMult = function(params){
		var s = $.extend({
			input : false,
			dataBase : false,
			getRequest : "request",
			defData : false,
		}, params);
		var request = '';
		if (typeof $global === "undefined") {$global = {};};
		if (s.dataBase && s.defData) {
			if (request = takeRequest()) {
				 paste();
			} else{
				getDef();
			};
		}else{
     		console.error("Miss argument");
     	}

     	function takeRequest () {
     		request = get(s.getRequest)
     		if (request && s.dataBase[request]){
     			$.cookie("art_request", request, { expires: 365});
     			return request;
     		}else if ($.cookie("art_request"))
     			return $.cookie("art_request")
     		else return false;
     	}
     	function get(name){
			if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
		     	return decodeURIComponent(name[1]);
		     else
		     	return false;
		}
		function paste () {
			if (s.dataBase[request]) {
				if (s.input) {
					if (typeof s.input == "function") {
						s.input(s.dataBase[request])
					}else{
						$(s.input).html(s.dataBase[request])
					}
				};
				$global.target = s.dataBase[request];
				
			} else{
				getDef();
			};
		}
		function getDef () {
			if (s.input) {
				if (typeof s.input == "function") {
						s.input(s.defData)
					}else{
						$(s.input).html(s.defData)
					}
				};
			$global.target = s.defData;
		}
	}
})(jQuery)