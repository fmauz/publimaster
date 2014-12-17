class Retranca < ActiveRecord::Base
  validates :name,
            presence: true
end
