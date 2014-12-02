class JornalsController < ApplicationController
  def index
    @jornals = Jornal.all.paginate page: params[:page]
    set_header_pagination( @jornals )
    render json: @jornals  
  end

  def create
    @jornal = Jornal.new( jornal_params )
    if @jornal.save
      render json: @jornal, status: 200
    else
      render json: @jornal.errors, status: 422
    end
  end

  def jornal_params
    params.require( :jornal ).permit( :name, :contact, :observation, :state_id )
  end
end