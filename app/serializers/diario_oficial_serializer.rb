class DiarioOficialSerializer < ActiveModel::Serializer
  attributes :id,
             :name, 
             :contact,
             :state_id, 
             :observation,
             :schedule,
             :source,
             :body,
             :lead,
             :column,
             :width,
             :height,
             :column_count,
             :column_width


  has_one :state
end
