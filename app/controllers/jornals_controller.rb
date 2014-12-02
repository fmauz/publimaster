class JornalsController < ApplicationController
  def index
    @jornals = Jornal.all.paginate page: params[:page]
    set_header_pagination( @jornals )
    render json: @jornals  
  end

  def update
    @jornal = Jornal.find( params[:id] )
    @jornal.update( jornal_params )
    render json: @jornal
  end

  def create
    @jornal = Jornal.new( jornal_params )
    if @jornal.save
      render json: @jornal, status: 200
    else
      render json: @jornal.errors, status: 422
    end
  end

  def destroy
    @jornal = Jornal.find( params[:id] )
    @jornal.destroy
    render json: @jornal
  end

  def show
    @jornal = Jornal.find( params[:id] )
    render json: @jornal
  end

  def jornal_params
    params.require( :jornal ).permit( :name, :contact, :observation, :state_id )
  end
end