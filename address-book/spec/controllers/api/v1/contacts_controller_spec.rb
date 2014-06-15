require 'spec_helper'

describe Api::V1::ContactsController do
  describe 'GET methods' do
    it 'index' do
      @contacts = FactoryGirl.create_list(:contact, 2)
      get :index
      assigns(:contacts).length.should == 2
      assigns(:contacts)[0].class.should == Contact
    end
    it 'show' do
      @contact = FactoryGirl.create(:contact)
      get :show, id: @contact.id
      assigns(:contact).first_name.should == 'MyString'
    end
  end
  describe 'POST methods' do
    it 'creates a new contact' do
      @contact = FactoryGirl.attributes_for(:contact)
      expect{post :create, contact: @contact}.to change(Contact, :count).by(1)
    end
  end

  describe 'DELETE method' do
    it 'deletes a contact' do
      @contact = FactoryGirl.create(:contact)
      expect{delete :destroy, id: @contact.id}.to change(Contact, :count).by(-1)
    end
  end
end