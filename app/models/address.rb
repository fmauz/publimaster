class Address < ActiveRecord::Base
  belongs_to :city
  belongs_to :state

  has_many :contact_emails
  has_many :contact_phones
end
