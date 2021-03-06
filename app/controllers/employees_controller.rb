class EmployeesController < ApplicationController
  def index
    @employees = Employee.all

    unless params[:page].blank?
      @employees = @employees.paginate page: params[:page]
      set_header_pagination( @employees )
    end

    render json: @employees
  end

  def show
    @employee = Employee.find( params[:id] )
    render json: @employee
  end

  def update
    @employee = Employee.find( params[:id] )
    @employee.update( employee_params )
    render json: @employee
  end

  def create
    @employee = Employee.new( employee_params )
    if @employee.save
      render json: @employee, status: 200
    else
      render json: @employee.errors, status: 422
    end
  end

  def destroy
    @employee = Employee.find( params[:id] )
    @employee.destroy
    render json: @employee
  end

  def employee_params
    objParam = params.require( :employee ).permit( :name, :cpf, :position, :enrollment, :date_of_admission, :date_of_resignation, :salary, :transportation_voucher_code, :price_bus_passes, :observation,
    address: [ :id, :street_suffix_id, :street_address, :secondary_address, :building_number, :neighborhood, :city_id, :state_id, :zipcode,
      contact_phones: [ :id, :area_code, :phone_number, :extension, :is_fax, :_destroy ],
      contact_emails: [ :id, :email, :contact, :_destroy ]
      ], user: [ :email, :password, :password_confirmation, :role_id ])
      objParam.to_hash.rename_keys( { "address" => "address_attributes",
        "contact_phones" => "contact_phones_attributes",
        "contact_emails" => "contact_emails_attributes",
        "user" => "user_attributes" } )
      end
end
