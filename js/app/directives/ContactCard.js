

var ContactCard = {
    template: [
        '<div>',
        '<h4>Contact Card</h4>',
        '<label>Name:</label>',
        '{{ cont.name }}',
        '<label>Email:</label>',
        '{{ cont.email }}',
        '<label>Phone:</label>',
        '{{ cont.phone }}',
        '</div>'
    ].join(''),
	controller: 'ContactController as cont',
	bindings: {
    	name: '=',
		email: '=',
		phone: '='
	}
}

angular
	.module('app')
	.component('contactCard', ContactCard);