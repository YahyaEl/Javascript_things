var three_multiple= function(number){
	if(number%3==0){
		return true;
	}
}
var five_multiple= function(number){
	if(number%5==0){
		return true;
	}
}

var result=0;

for(var i=1000;i>1;i--){
	if(three_multiple(i) || five_multiple(i)){
		result+=i;
	}
}

console.log(result);
