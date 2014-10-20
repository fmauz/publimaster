class ClientsController < ApplicationController
  def index
  	render json: Client.all
  end

  def show
  	@client = Client.find( params[:id] )
  	render json: @client
  end

  def update
    @client = Client.find( params[:id] )
    @client.update( client_params )
    render json: @client
  end

  def client_params
    objParam = params.require( :client ).permit( :name, :cpf_cnpj, :responsible, :director, :accountant, :client_group, :observation, :segment_id, :employee_id, :client_type_id,
                                    address: [ :id, :street_suffix_id, :street_address, :secondary_address, :building_number, :neighborhood, :city_id, :state_id, :zipcode,
                                        contact_phones: [ :id, :area_code, :phone_number, :extension, :is_fax, :_destroy ],
                                        contact_emails: [ :id, :email, :contact, :_destroy ]
                                      ] )
    objParam.to_hash.rename_keys( { "address" => "address_attributes", 
                                    "contact_phones" => "contact_phones_attributes",
                                    "contact_emails" => "contact_emails_attributes" } )
  end
end