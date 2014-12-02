class DiarioOficialsController < ApplicationController
  def index
    @diario_oficials = DiarioOficial.all.paginate page: params[:page]
    set_header_pagination( @diario_oficials )
    render json: @diario_oficials
  end
end