# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20141019175346) do

  create_table "addresses", force: true do |t|
    t.string   "street_suffix"
    t.string   "address"
    t.string   "secondary_address"
    t.string   "building_number"
    t.string   "neighborhood"
    t.integer  "city_id"
    t.integer  "state_id"
    t.string   "zipcode"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "addresses", ["city_id"], name: "index_addresses_on_city_id", using: :btree
  add_index "addresses", ["state_id"], name: "index_addresses_on_state_id", using: :btree

  create_table "client_types", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "clients", force: true do |t|
    t.string   "name"
    t.string   "cpf_cnpj"
    t.string   "responsible"
    t.string   "director"
    t.string   "accountant"
    t.string   "client_group"
    t.text     "observation"
    t.integer  "client_type_id"
    t.integer  "address_id"
    t.integer  "segment_id"
    t.integer  "employee_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "clients", ["address_id"], name: "index_clients_on_address_id", using: :btree
  add_index "clients", ["client_type_id"], name: "index_clients_on_client_type_id", using: :btree
  add_index "clients", ["employee_id"], name: "index_clients_on_employee_id", using: :btree
  add_index "clients", ["segment_id"], name: "index_clients_on_segment_id", using: :btree

end
