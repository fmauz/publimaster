class CreateClients < ActiveRecord::Migration
  def change
    create_table :clients do |t|
      t.string :name
      t.string :cpf_cnpj
      t.references :client_type, index: true
      t.string :responsible
      t.string :director
      t.string :accountant
      t.string :client_group
      t.text :observation
      t.references :address, index: true
      t.references :segment, index: true

      t.timestamps
    end
  end
end
