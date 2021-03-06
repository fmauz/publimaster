class ClientSerializer < ActiveModel::Serializer
  attributes :id,
  			 :name, 
  			 :cpf_cnpj, 
  			 :responsible, 
  			 :director, 
  			 :accountant, 
  			 :client_group, 
  			 :observation,
         :client_type_id,
         :segment_id,
         :employee_id

  has_one :client_type
  has_one :segment
  has_one :address
  has_one :employee
end
