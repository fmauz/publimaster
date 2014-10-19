class StreetSuffixesController < ApplicationController
  def index
    render json: StreetSuffix.all, code: 200
  end
end