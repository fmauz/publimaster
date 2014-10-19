FactoryGirl.define do
	factory :client do
		name { Faker::Name.name }
		cpf "33333333333"
		client_type
		responsible { Faker::Name.name }
		director { Faker::Name.name }
		accountant { Faker::Name.name }
		client_group "Grupo do cliente"
		observation { Faker::Lorem.paragraph(2) }
		address
		segment
	end
end