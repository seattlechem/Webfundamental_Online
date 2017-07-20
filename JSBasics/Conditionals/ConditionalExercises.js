var age = Number(prompt("Enter your age"));

//if age is negative, print an error message
if(age<0){
	console.log("Error");
}

//if age is 21, print "happy 21st birthday!!"
else if(age === 21){
	console.log("Happy 21st birthday!!");
}

//if age is odd, print "your age is odd!"
else if(age % 2 !== 0){
	console.log("Your age is odd!");
}
else if(age % Math.sqrt(age) === 0){
	console.log("Your age is a perfect square!");
}

else{
	console.log("Your age does not belong to any group.");
}

//Super Bonus: if age is a perfect square, print "pefect square!"