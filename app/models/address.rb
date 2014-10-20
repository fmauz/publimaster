class Address < ActiveRecord::Base
  belongs_to :city
  belongs_to :state
  belongs_to :street_suffix

  has_many :contact_emails, dependent: :destroy
  has_many :contact_phones, dependent: :destroy

  accepts_nested_attributes_for :contact_emails, allow_destroy: true
  accepts_nested_attributes_for :contact_phones, allow_destroy: true

end
