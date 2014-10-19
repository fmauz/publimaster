FactoryGirl.define do
	factory :employee do
		name { Faker::Name.name }
		cpf "33333333333"
		address
		position "Director"
		enrollment "1234"
		date_of_admission { 5.years.ago }
		date_of_resignation { 5.days.ago }
		salary 1500.00
		transportation_voucher_code "001122"
		price_bus_passes 235
		user
		observation { Faker::Lorem.paragraph(2) }
	end
end