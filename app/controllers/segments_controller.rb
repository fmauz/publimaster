class SegmentsController < ApplicationController
  def index
    render json: Segment.all, code: 200
  end
end