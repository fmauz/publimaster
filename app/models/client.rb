class Client < ActiveRecord::Base
  belongs_to :client_type
  belongs_to :address, dependent: :destroy
  belongs_to :segment
  belongs_to :employee

  accepts_nested_attributes_for :address

  validates :name,
            :cpf_cnpj,
            :client_type,
            :address,
            :segment,
            :employee,
            presence: true
end
