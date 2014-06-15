AddressBook.ContactsIndexController = Ember.ArrayController.extend({
actions: {
    addNewContact: function () {
      this.toggleProperty('addingNewContact');
    },
    saveNewContact: function () {
      var new_first_name = this.get('new_first_name');
      var new_last_name = this.get('new_last_name');
      var new_contact = this.store.createRecord('contact',{
        first_name: new_first_name,
        last_name: new_last_name
      });
    
      var self = this;
      new_contact.save().then(
        function ( {
        self.set('new_first_name', '');
        self.set('new_last_name', '');
        self.toggleProperty('addingNewContact');
        },
        function () { alert('Unable to save record'); });
      );
    },

    cancelNewContact: function () {
      this.set('new_first_name', '');
      this.set('new_last_name', '');
      this.toggleProperty('addingNewContact');
    },
    deleteContact: function (contact) {
      contact.destroyRecord();
    }

  }
});