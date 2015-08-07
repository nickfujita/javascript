function outerFunction(outerParam){
	var localVar = 'first';

	function innerFunction(innerParam){
		return localVar+' '+outerParam+' '+innerParam;
	}
	return innerFunction;
}

var outsideVar = outerFunction('second');

console.log(outsideVar('third'));
