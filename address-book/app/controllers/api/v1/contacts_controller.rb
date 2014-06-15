class Api::V1::ContactsController < ApplicationController
  before_action :set_contact, only: [:show, :create]

  def index
    render json: @contacts = Contact.all
  end
  
  def show
    render json: @contact
  end

  def create
    @contact = Contact.new(get_contact_params)
    if @contact.save
      render json: @contact
    else
      render json: @contact.errors, status: :unprocessable_entity
    end
  end

  def destroy
    if @contact.destroy
      render json: nil
    else
      render json: @contact.errors, status: :unprocessable_entity
    end
  end

  private

  def set_contact
    @contact = Contact.find(params[:id])
  end

  def get_contact_params
    params.require(:contact).permit([:first_name, :last_name])
  end

end