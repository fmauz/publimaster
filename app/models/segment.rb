class Segment < ActiveRecord::Base
  validates :name,
            presence: true
end
