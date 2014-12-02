class JornalsController < ApplicationController
  def index
    @jornals = Jornal.all.paginate page: params[:page]
    set_header_pagination( @jornals )
    render json: @jornals  
  end
end