class CreateJornals < ActiveRecord::Migration
  def change
    create_table :jornals do |t|
      t.string :name
      t.references :state, index: true
      t.string :contact
      t.text :observation

      t.timestamps
    end
  end
end
