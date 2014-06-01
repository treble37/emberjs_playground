module('Contacts Model', {
  setup: function () {},
  teardown: function () {
    AddressBook.reset();
  }
});

test('attributes', function () {
  respondsTo('Contact', 'first_name', 'string');
  respondsTo('Contact', 'last_name', 'string');
});
