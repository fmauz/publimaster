class StatesController < ApplicationController
  def index
    render json: State.all, code: 200
  end
end