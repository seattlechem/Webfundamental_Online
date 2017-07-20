var x = prompt("Please enter hour");
var y = prompt("Please enter minute");
var hour = parseInt(x);
var minute = parseInt(y);
var period = prompt("Please enter either AM or PM");
var time;

if(period == "AM" && minute >=30){
 	hour = hour+1;
	time = "It's almost " + hour + " in the morning.";
	alert(time);
	console.log(time);
} 
else if (period == "AM" && minute <30){
	time = "It's just after " + hour + " in the morning.";
	alert(time);
	console.log(time);
}
else if (period == "PM" && minute >=30){
	hour = hour+1;
	time = "It's almost " + hour + " in the afternoon.";
	alert(time);
	console.log(time);
}
else if(period == "PM" && minute <30){
	time = "It's just after " + hour + " in the afternoon.";
}
else{
	alret("Please refresh the page and start again.");
}
