class ClientSerializer < ActiveModel::Serializer
  attributes :id,
  			 :name, 
  			 :cpf_cnpj, 
  			 :responsible, 
  			 :director, 
  			 :accountant, 
  			 :client_group, 
  			 :observation

  has_one :segment
  has_one :address
  has_one :employee
end
