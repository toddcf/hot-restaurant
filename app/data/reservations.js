
var reservations = [{
	name: 'John Doe',
	phone: '123-456-7890',
	email: 'john@doe',
	id: 'johnny'
},{
	name: 'James Smith',
	phone: '123-456-7890',
	email: 'James@SMith',
	id: 'johnny'
},{
	name: 'Jason Borne',
	phone: '123-456-7890',
	email: 'Jason@BOrne',
	id: 'johnny'
},{
	name: 'Michael Jackson',
	phone: '123-456-7890',
	email: 'Michael@Jackson',
	id: 'johnny'
}];

module.exports = function(app) {
	// Creates new reservation - connection HTML straight to Express
	app.post('/reserve', function(req, res) {
		var newreservation = res.body; 
		console.log("This is the new reservation : " + newreservation);
		reservations.push(newreservation);
	});

};