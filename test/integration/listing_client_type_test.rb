require 'test_helper'

class ListingClientTypeTest < ActionDispatch::IntegrationTest
  setup do
    FactoryGirl.create_list( :client_type, 2 )
  end

  test "listing all clients" do
    get '/client_types'

    assert_equal 200, response.status
    assert_equal Mime::JSON, response.content_type
    assert_equal ClientType.count, json( response.body )["client_types"].size
  end
end
