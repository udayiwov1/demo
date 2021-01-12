$(document).ready(function(){
		$("button").click(function(){
			$.ajax({url: "contentfragment.json", dataType: "json", success: function(result){
				console.log(result);
				//$("#div1").html("Error! Data could not be fetched. Please try again!");
				//var obj = JSON.stringify(result.status);
				//var strresultParsed= JSON.parse(result);
				$("#div1").html(result.status);
			}});
		});
});