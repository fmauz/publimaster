FactoryGirl.define do
	factory :contact_phone do
		address
		area_code { Faker::PhoneNumber.area_code }
		phone_numer { Faker::PhoneNumber.phone_number }
		extension { Faker::PhoneNumber.extension }
		fax true
	end
end