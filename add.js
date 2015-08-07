function add(input) {
	var	numbers = input.split(',');
  var sum = 0;
  numbers.forEach(function(number){
  	sum+=parseInt(number);
  });
  return sum;
}

console.log(add('1,2,3,4'));