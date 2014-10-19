class AddressSerializer < ActiveModel::Serializer
  attributes :id,
  			 :street_suffix,
  			 :address,
  			 :secondary_address,
  			 :building_number,
  			 :neighborhood,
  			 :zipcode

  has_one :street_suffix
  has_one :city
  has_one :state

  has_many :contact_phones
  has_many :contact_emails
end
