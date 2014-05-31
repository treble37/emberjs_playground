module('Contacts integration', {
  setup: function () {
    AddressBook.ApplicationAdapter = DS.FixtureAdapter;
    AddressBook.Contact.FIXTURES = [
      {
      id: 1,
      first_name: 'Dave',
      last_name: 'Crack'
      },
      {
        id: 2,
        first_name: 'Dustin',
        last_name: 'Hoffman'
      }
    ]
  },
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

test('Renders contacts', function () {
  visit('/contacts');
  andThen(function () {
    var contacts_length = find('.contacts_list li').length;
    equal(contacts_length, 2, "Expected contacts to contain 2 items, got: " + contacts_length);
  });
})
