
var user1 = {
	id: 1,
	name: 'nick',
	idName: function(){
		var id = 'inner';
		console.log(id+this.name);
	}
};

user1.idName();

//skjdlbflkjsbgj