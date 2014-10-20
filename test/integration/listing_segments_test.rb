require 'test_helper'

class ListingSegmentsTest < ActionDispatch::IntegrationTest
  setup do
    FactoryGirl.create_list( :segment, 2 )
  end

  test "listing all segments" do
    get '/segments'

    assert_equal 200, response.status
    assert_equal Mime::JSON, response.content_type
    assert_equal Segment.count, json( response.body )["segments"].size
  end
end
