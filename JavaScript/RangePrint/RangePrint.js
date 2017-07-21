function printRange(start, end, skip){
	for(var i = start; i<end; i+=skip){
		console.log(i);
	}
}

function printRange(start, end){
	for(var i = start; i<end; i+=1){
		console.log(i);
	}
}

function printRange(end){
	for(var i = 0; i<end; i+=1){
		console.log(i);
	}
}

printRange(10);