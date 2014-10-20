class StreetSuffixesController < ApplicationController
  def index
    render json: StreetSuffix.all, status: 200
  end
end