require 'test_helper'

class ListingClientsTest < ActionDispatch::IntegrationTest
  setup do
  	FactoryGirl.create_list( :client, 2 )
  end

  test "listing all clients" do
  	get '/clients'

  	assert_equal 200, response.status
  	assert_equal Mime::JSON, response.content_type
  	assert_equal Client.count, json( response.body ).size
  end
end
