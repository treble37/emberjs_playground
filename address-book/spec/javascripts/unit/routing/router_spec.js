test('root route', function () {
  routesTo('/', 'index');
});

test('contacts_route', function () {
  routesTo('/contacts', 'contacts.index');
});

test('individual contact', function () {
  routesTo('/contacts/1', 'contacts.show');
});
