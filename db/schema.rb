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

ActiveRecord::Schema.define(version: 20141217183131) do

  create_table "addresses", force: true do |t|
    t.string   "street_address"
    t.string   "secondary_address"
    t.string   "building_number"
    t.string   "neighborhood"
    t.integer  "city_id"
    t.integer  "state_id"
    t.integer  "street_suffix_id"
    t.string   "zipcode"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "addresses", ["city_id"], name: "index_addresses_on_city_id", using: :btree
  add_index "addresses", ["state_id"], name: "index_addresses_on_state_id", using: :btree
  add_index "addresses", ["street_suffix_id"], name: "index_addresses_on_street_suffix_id", using: :btree

  create_table "cities", force: true do |t|
    t.string   "name"
    t.integer  "state_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "cities", ["state_id"], name: "index_cities_on_state_id", using: :btree

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

  create_table "contact_emails", force: true do |t|
    t.string   "email"
    t.string   "contact"
    t.integer  "address_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "contact_emails", ["address_id"], name: "index_contact_emails_on_address_id", using: :btree

  create_table "contact_phones", force: true do |t|
    t.string   "area_code"
    t.string   "phone_number"
    t.string   "extension"
    t.boolean  "is_fax"
    t.integer  "address_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "contact_phones", ["address_id"], name: "index_contact_phones_on_address_id", using: :btree

  create_table "diario_oficials", force: true do |t|
    t.string   "name"
    t.text     "observation"
    t.integer  "state_id"
    t.string   "contact"
    t.string   "schedule"
    t.string   "source"
    t.string   "body"
    t.string   "lead"
    t.float    "column",       limit: 24
    t.float    "height",       limit: 24
    t.float    "width",        limit: 24
    t.integer  "column_count"
    t.float    "column_width", limit: 24
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "diario_oficials", ["state_id"], name: "index_diario_oficials_on_state_id", using: :btree

  create_table "employees", force: true do |t|
    t.string   "name"
    t.string   "cpf"
    t.integer  "address_id"
    t.string   "position"
    t.string   "enrollment"
    t.date     "date_of_admission"
    t.date     "date_of_resignation"
    t.decimal  "salary",                      precision: 8, scale: 2
    t.string   "transportation_voucher_code"
    t.decimal  "price_bus_passes",            precision: 8, scale: 2
    t.integer  "user_id"
    t.text     "observation"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "employees", ["address_id"], name: "index_employees_on_address_id", using: :btree
  add_index "employees", ["user_id"], name: "index_employees_on_user_id", using: :btree

  create_table "jornals", force: true do |t|
    t.string   "name"
    t.integer  "state_id"
    t.string   "contact"
    t.text     "observation"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "jornals", ["state_id"], name: "index_jornals_on_state_id", using: :btree

  create_table "materials", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "retrancas", force: true do |t|
    t.string   "name"
    t.string   "source"
    t.string   "body"
    t.string   "lead"
    t.float    "column",       limit: 24
    t.float    "width",        limit: 24
    t.float    "height",       limit: 24
    t.integer  "column_count"
    t.integer  "column_width"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "roles", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "segments", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "states", force: true do |t|
    t.string   "name"
    t.string   "state_abbr"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "street_suffixes", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: true do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.integer  "role_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  add_index "users", ["role_id"], name: "index_users_on_role_id", using: :btree

end
