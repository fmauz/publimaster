class Client < ActiveRecord::Base
  belongs_to :client_type
  belongs_to :address, dependent: :destroy
  belongs_to :segment
  belongs_to :employee

  accepts_nested_attributes_for :address
end
