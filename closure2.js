function user(firstName,lastName){
	var fullName = firstName+' '+lastName;
	var getFullName = function(){
		return fullName;
	};
	return getFullName;
}

var func = user('a','b');
console.log(func());