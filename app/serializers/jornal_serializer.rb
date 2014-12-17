class JornalSerializer < ActiveModel::Serializer
  attributes :id,
             :name, 
             :contact,
             :state_id, 
             :observation


  has_one :state
end
