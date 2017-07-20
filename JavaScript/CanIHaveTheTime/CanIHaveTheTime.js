var hour = Number(prompt("Please enter hour"));
var minute = Number(prompt("Please enter minute"));
var period = prompt("Please enter either AM or PM");
var time;

if(minute >= 30){
	if(period == "AM"){
		hour += 1;
		time = "It's almost " + hour + " in the morning.";
		alert(time);
	}
	else if(period == "PM"){
		hour = hour + 1;
		time = "It's almost " + hour + " in the afternoon.";
		alert(time);
	}
	else{
		alert("Please enter again.")
	}
}

else if(minute <30){
	if(period == "AM"){
		time = "It's almost " + hour + " in the morning.";
		alert(time);
	}
	else if(period == "PM"){
		time = "It's almost " + hour + " in the afternoon.";
		alert(time);
	}
	else{
		alert("Please enter again.")
	}
}


else {
		alert("Please enter again.")
}
