var names=["mahak","mitali","urja","jyoti","harshit","Jim"];
function check(name){
	if(name[0]=="j"||name[0]=="J"){
	
		return 1;
	}
	else
		return 0;
}
for (var i = 0; i < names.length; i++){
	obj=check(names[i]);
	if(obj==1){
		console.log("Goodbye "+names[i]);
	}
	else
		console.log("hello "+names[i]);
}
//if we want to take input from console.
function check(name){
	if(name[0]=="j"||name[0]=="J"){
	
		return 1;
	}
	else
		return 0;
}
n=prompt("how many no, to be added in array??");
for (var i = 0; i <n; i++) {
var username=prompt("what is your name");
obj=check(username);
if(obj==1){
		console.log("Goodbye "+username);
	}
	else
		console.log("hello "+username);
}
