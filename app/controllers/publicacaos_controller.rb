class PublicacaosController < ApplicationController
  def index
    @publicacaos = Publicacao.paginate page: params[:page]
    set_header_pagination( @publicacaos )
    render json: @publicacaos
  end

  def show
    @publicacao = Publicacao.find( params[:id] )
    render json: @publicacao
  end

  def update
    @publicacao = Publicacao.find( params[:id] )
    @publicacao.update( client_params )
    render json: @client
  end

  def create
    @publicacao = Publicacao.new( publicacao_params )
    if @publicacao.save
      render json: @publicacao, status: 200
    else
      render json: @publicacao.errors, status: 422
    end
  end

  def destroy
    @publicacao = Publicacao.find( params[:id] )
    @publicacao.destroy
    render json: @publicacao
  end

  def publicacao_params
    objParam = params.require( :publicacao )#.permit( )
  end
end
