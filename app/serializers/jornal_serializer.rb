class JornalSerializer < ActiveModel::Serializer
  attributes :id,
         :name, 
         :contact 
         :observation

  has_one :state
end
