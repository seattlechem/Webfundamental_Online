$("button").on("click", function(){
	var w = $("#firstName").val();
	var x = $("#lastName").val();
	var y = $("#emailAddress").val();
	var z = $("#contactNo").val();

	$('#listTable').find('tbody:last').append("<tr><td>"+w+"</td><td>" + x + "</td><td>" + y + "</td><td>"+z+"</td></tr>");

});

