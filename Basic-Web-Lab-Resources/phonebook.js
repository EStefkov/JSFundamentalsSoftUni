/* TODO: 
	create phonebook array
	add methods for adding in the phonebook and getting it
	export the methods
*/
let Contact = require('./models/Contact');

let contacts = [
	{
		name: 'Peter',
		number: '+359 2 234 2342'
	},
	{
		name: 'Gosho',
		number: '+359 233 22342'
	},
	{
		name: 'Velin',
		number: '+359 2 23665 234'
	}
];

function getAll(){
	return contacts.slice();
}

function addContact(name,number){
	let contact = new Contact(name,number);
	contacts.push(contact);
}
module.exports = {
	getAll,
	addContact
}