class StateSerializer < ActiveModel::Serializer
  attributes :id, :name, :state_abbr

  has_many :cities
end
