class ClientTypesController < ApplicationController
  def index
    render json: ClientType.all, status: 200
  end
end