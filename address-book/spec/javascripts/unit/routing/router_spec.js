test('root route', function () {
  visit('/');
  andThen(function () {
    var current_route = AddressBook.__container__.lookup('controller:application').currentRouteName;
    equal(current_route, '', 'Expected ****** got: ' + current_route);
  });
})
