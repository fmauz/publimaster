class ClientTypesController < ApplicationController
  def index
    render json: ClientType.all, code: 200
  end
end