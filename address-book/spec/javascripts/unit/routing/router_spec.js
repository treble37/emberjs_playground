test('root route', function () {
  routesTo('/', 'index');
});

test('contacts_route', function () {
  routesTo('/contacts', 'contacts.index');
});
