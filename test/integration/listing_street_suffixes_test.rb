require 'test_helper'

class ListingStreetSuffixesTest < ActionDispatch::IntegrationTest
  setup do
    FactoryGirl.create_list( :street_suffix, 2 )
  end

  test "listing all street suffixes" do
    get '/street_suffixes'

    assert_equal 200, response.status
    assert_equal Mime::JSON, response.content_type
    assert_equal StreetSuffix.count, json( response.body )["street_suffixes"].size
  end
end
