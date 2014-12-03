class DiarioOficialsController < ApplicationController
  def index
    @diario_oficials = DiarioOficial.all.paginate page: params[:page]
    set_header_pagination( @diario_oficials )
    render json: @diario_oficials
  end

  def create
    @diario_oficial = DiarioOficial.new( diario_oficial_params )
    if @diario_oficial.save
      render json: @diario_oficial, status: 200
    else
      render json: @diario_oficial.errors, status: 422
    end
  end

  def update
    @diario_oficial = DiarioOficial.find( params[:id] )
    @diario_oficial.update( diario_oficial_params )
    render json: @diario_oficial
  end

  def destroy
    @diario_oficial = DiarioOficial.find( params[:id] )
    @diario_oficial.destroy
    render json: @diario_oficial
  end

  def diario_oficial_params
    params.require(:diario_oficial).permit(:name, :contact, :observation, :state_id,
                                           :schedule, :body, :lead, :column, :width,
                                           :height, :source, :column_count, :column_width)
  end
end