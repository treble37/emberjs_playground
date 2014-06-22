module('Email address integration');

test('Showing associated email addresses', function () {
	visit('/contacts/1');
	andThen(function () {
		var emails = find('.email_address');
		ok(emails.length == 2, "Expected two emails got: " + emails.length);
		equal(emails[0].innerText, 'dave@crack.com', 'Expected dave@crack.com got: ' + emails[0].innerText);
	});
});