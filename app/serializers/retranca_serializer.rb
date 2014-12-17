class RetrancaSerializer < ActiveModel::Serializer
  attributes :id,
             :name,
             :source,
             :body,
             :lead,
             :column,
             :width,
             :height,
             :column_count,
             :column_width
end
