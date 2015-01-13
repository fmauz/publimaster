class StreetSuffix < ActiveRecord::Base
  validates :name,
            presence: true
end
