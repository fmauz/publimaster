class EmployeeSerializer < ActiveModel::Serializer
  attributes :id,
            :name,
            :cpf,
            :position,
            :enrollment,
            :date_of_admission,
            :date_of_resignation,
            :salary,
            :transportation_voucher_code,
            :price_bus_passes,
            :observation

  has_one :address
  has_one :user
end
