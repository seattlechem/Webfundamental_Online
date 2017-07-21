var reward = 0.01
for(var i=1; i<=30; i++){
	reward += (2*reward); 
	console.log(i + " day, reward = $" + reward);
}

console.log("How many days would it take the servant to make $10,000?");

var reward = 0.01
for(var i=1; i<=30; i++){
	reward += (2*reward);
	if(reward >= 10000){
		console.log(i + " day, reward = $" + reward);
		break;
	} 
	console.log(i + " day, reward = $" + reward);
}

console.log("How many days would it take the servant to make $1000000000");
var reward = 0.01
for(var i=1; i<=30; i++){
	reward += (2*reward);
	if(reward >= 1000000000){
		console.log(i + " day, reward = $" + reward);
		break;
	} 
	console.log(i + " day, reward = $" + reward);
}

console.log("How many days would it take the servant to make Infinity")
var reward = 0.01
for(var i=1; i<=30; i++){
	reward += (2*reward);
	if(reward >= Infinity){
		console.log(i + " day, reward = $" + reward);
		break;
	} 
	console.log(i + " day, reward = $" + reward);
}