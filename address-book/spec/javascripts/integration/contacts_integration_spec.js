module('Contacts integration', {
  setup: function () {
  },
  teardown: function () {
  }
});

test('Contacts index page', function () {
  visit('/contacts');
  andThen(function () {
    var header_text = find('.contacts_heading').text();
    equal(header_text, "Now in the Contacts Index", 'Expected "Now in the Contacts Index", got: ' + header_text );
  });
});

test('Renders contacts', function () {
  visit('/contacts');
  andThen(function () {
    var contacts_length = find('.contacts_list li').length;
    equal(contacts_length, 2, "Expected contacts to contain 2 items, got: " + contacts_length);
  });
}) 

test('Renders only one contact', function () {
  visit('/contacts/1');
  andThen(function () {
    var contact = find('#contact h1').text();
    var expected_result = 'Details for Contact 1';
    equal(contact, expected_result, 'Expected: ' + expected_result + ' got: ' + contact);
  });
});

test('Visiting a contact via the index screen', function () {
  visit('/contacts').click('ul li:last a');
  andThen(function () {
    var contact = find('#contact h1').text();
    var expected_result = 'Details for Contact 2';
    equal(contact, expected_result, 'Expected: ' + expected_result + ' got: ' + contact);
  });
});