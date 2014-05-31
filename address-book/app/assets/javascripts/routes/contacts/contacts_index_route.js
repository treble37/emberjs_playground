AddressBook.ContactsIndexRoute = Ember.Route.extend({
  model: function () {
    return this.store.findAll('contact'); // Note that contact is singular:w
  }
});
