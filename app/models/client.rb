class Client < ActiveRecord::Base
  belongs_to :client_type
  belongs_to :address
  belongs_to :segment
end