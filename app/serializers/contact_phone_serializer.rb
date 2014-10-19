class ContactPhoneSerializer < ActiveModel::Serializer
  attributes :id, :area_code, :phone_numer, :extension, :is_fax
end