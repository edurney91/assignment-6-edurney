
//Assignment 6 Start

//user clicks on drop down
//user selects an option
//on select their choice is stored
//

var cities = new Array("nyc","sf","la","austin","sydney");

$("select option").forEach(function(){
	if($("cities").text() == "NYC"){
		$("body").attr("class","nyc");
	}
	else if ($("cities").text() == "LAX"){
		$("body").attr("class","la");
	}
	else{
		$("body").attr("class", "error");
	}
});
