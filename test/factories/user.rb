FactoryGirl.define do
	factory :user do
		email { Faker::Internet.email }
		password "q1w2e3r4"
		password_confirmation "q1w2e3r4"
		role
	end
end