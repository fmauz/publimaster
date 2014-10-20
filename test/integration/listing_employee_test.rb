require 'test_helper'

class ListingEmployeeTest < ActionDispatch::IntegrationTest
  setup do
    FactoryGirl.create_list( :employee, 2 )
  end

  test "listing all employees" do
    get '/employees'

    assert_equal 200, response.status
    assert_equal Mime::JSON, response.content_type
    assert_equal Employee.count, json( response.body )["employees"].size
  end
end
