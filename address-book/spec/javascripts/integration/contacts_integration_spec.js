module('Contacts integration', {
  setup: function () {},
  teardown: function () {
    AddressBook.reset();
  }
});

test('Contacts index page', function () {
  visit('/contacts');
  andThen(function () {
    var header_text = find('.contacts_heading').text();
    equal(header_text, "Now in the Contacts Index", 'Expected "Now in the Contacts Index", got: ' + header_text );
  });
});
