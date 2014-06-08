class Api::V1::ContactsController < ApplicationController
  before_action :set_contact, only: [:show]

  def index
    render json: @contacts = Contact.all
  end
  def show
    render json: @contact
  end

  private

  def set_contact
    @contact = Contact.find(params[:id])
  end

end