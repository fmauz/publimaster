class SegmentsController < ApplicationController
  def index
    render json: Segment.all, status: 200
  end

  def create
    @segment = Segment.new( segment_params )
    if @segment.save
      render json: @segment, status: 200
    else
      render json: @segment.errors, status: 422
    end
  end

  def update
    @segment = Segment.find( params[:id] )
    @segment.update( segment_params )
    render json: @segment
  end

  def destroy
    @segment = Segment.find( params[:id] )
    @segment.destroy
    render json: @segment
  end

  def segment_params
    params.require(:segment).permit(:name)
  end
end