class SegmentsController < ApplicationController
  def index
    render json: Segment.all, status: 200
  end
end