test('root route', function () {
  visit('/');
  andThen(function () {
    var current_route = AddressBook.__container__.lookup('controller:application').currentRouteName;
    equal(current_route, 'index', 'Expected ****** got: ' + current_route);
  });
('contacts route', function () {
  visit('/contacts')
  andThen(function () {
    var current_route = AddressBook.__container__.lookup('controller:application').currentRouteName;
    equal(current_route, 'contacts', 'Expected contacts got:' + current_route);
    });
  });
})
