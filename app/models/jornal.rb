class Jornal < ActiveRecord::Base
  belongs_to :state

  validates :name,
            :state,
            presence: true
end
