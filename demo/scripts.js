$(function(){
	$.aMult({
		input : function(data){
			$("h1").text(data);
		},
		dataBase : dataBaseTarget,
		getRequest : "key",
		defData : "This phrase, if variable does not transmitted",
	});
})