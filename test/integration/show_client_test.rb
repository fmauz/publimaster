require 'test_helper'

class ShowClientTest < ActionDispatch::IntegrationTest
  setup do
  	@client = FactoryGirl.create( :client )
  end

  test "listing all clients" do
  	get "/clients/#{@client.id}"

  	assert_equal 200, response.status
  	assert_equal Mime::JSON, response.content_type
  end
end