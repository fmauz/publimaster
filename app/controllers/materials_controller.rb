class MaterialsController < ApplicationController
  def index
    @materials = Material.all.paginate page: params[:page]
    set_header_pagination( @materials )
    render json: @materials
  end

  def create
    @material = Material.new( material_params )
    if @material.save
      render json: @material, status: 200
    else
      render json: @material.errors, status: 422
    end
  end

  def update
    @material = Material.find( params[:id] )
    @material.update( material_params )
    render json: @material
  end

  def destroy
    @material = Material.find( params[:id] ) 
    @material.destroy
    render json: @material
  end

  def material_params
    params.require(:material).permit(:name)
  end
end