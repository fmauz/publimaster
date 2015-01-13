class UserSerializer < ActiveModel::Serializer
  attributes :id,
             :email,
             :role_id

  has_one :role
end
