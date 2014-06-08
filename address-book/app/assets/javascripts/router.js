// For more information see: http://emberjs.com/guides/routing/

AddressBook.Router.map(function() {
  this.resource('contacts', function() {
    this.route('show', {path: '/:contact_id'});
  });
});
