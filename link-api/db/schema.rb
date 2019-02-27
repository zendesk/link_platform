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

ActiveRecord::Schema.define(version: 2018_10_24_231927) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "pgcrypto"
  enable_extension "plpgsql"

  create_table "admins", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.string "provider", default: "email", null: false
    t.string "uid", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.boolean "allow_password_change", default: false
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.string "link_instance_id", null: false
    t.string "name", default: "", null: false
    t.string "nickname"
    t.string "image"
    t.string "email", default: "", null: false
    t.json "tokens"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["confirmation_token"], name: "index_admins_on_confirmation_token", unique: true
    t.index ["link_instance_id", "email"], name: "index_admins_on_link_instance_id_and_email", unique: true
    t.index ["reset_password_token"], name: "index_admins_on_reset_password_token", unique: true
    t.index ["uid", "provider"], name: "index_admins_on_uid_and_provider", unique: true
  end

  create_table "contacts", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "organization_id"
    t.uuid "service_id"
    t.uuid "service_at_location_id"
    t.uuid "link_instance_id"
    t.string "name"
    t.string "title"
    t.string "department"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["link_instance_id"], name: "index_contacts_on_link_instance_id"
    t.index ["organization_id"], name: "index_contacts_on_organization_id"
    t.index ["service_at_location_id"], name: "index_contacts_on_service_at_location_id"
    t.index ["service_id"], name: "index_contacts_on_service_id"
  end

  create_table "eligibilities", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "link_instance_id"
    t.uuid "service_id"
    t.string "eligibility"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["link_instance_id"], name: "index_eligibilities_on_link_instance_id"
    t.index ["service_id"], name: "index_eligibilities_on_service_id"
  end

  create_table "holiday_schedules", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "link_instance_id"
    t.uuid "service_id"
    t.uuid "location_id"
    t.uuid "service_at_location_id"
    t.boolean "closed", null: false
    t.time "opens_at"
    t.time "closes_at"
    t.date "start_date", null: false
    t.date "end_date", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["link_instance_id"], name: "index_holiday_schedules_on_link_instance_id"
    t.index ["location_id"], name: "index_holiday_schedules_on_location_id"
    t.index ["service_at_location_id"], name: "index_holiday_schedules_on_service_at_location_id"
    t.index ["service_id"], name: "index_holiday_schedules_on_service_id"
  end

  create_table "languages", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "link_instance_id"
    t.uuid "service_id"
    t.uuid "location_id"
    t.string "language"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["link_instance_id"], name: "index_languages_on_link_instance_id"
    t.index ["location_id"], name: "index_languages_on_location_id"
    t.index ["service_id"], name: "index_languages_on_service_id"
  end

  create_table "link_instance_settings", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "link_instance_id"
    t.string "name", null: false
    t.string "value"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["link_instance_id", "name"], name: "index_link_instance_settings_on_link_instance_id_and_name", unique: true
    t.index ["link_instance_id"], name: "index_link_instance_settings_on_link_instance_id"
  end

  create_table "link_instances", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "owner_id"
    t.string "name", null: false
    t.string "subdomain", null: false
    t.string "email", null: false
    t.string "url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["owner_id"], name: "index_link_instances_on_owner_id"
  end

  create_table "locations", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "organization_id"
    t.uuid "link_instance_id"
    t.string "name"
    t.string "alternate_name"
    t.string "description"
    t.string "transportation"
    t.float "latitude"
    t.float "longitude"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["link_instance_id"], name: "index_locations_on_link_instance_id"
    t.index ["organization_id"], name: "index_locations_on_organization_id"
  end

  create_table "organizations", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "link_instance_id"
    t.string "name", null: false
    t.string "alternate_name"
    t.string "description", null: false
    t.string "email"
    t.string "url"
    t.string "tax_status"
    t.string "tax_id"
    t.date "year_incorporated"
    t.string "legal_status"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["link_instance_id"], name: "index_organizations_on_link_instance_id"
  end

  create_table "phones", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "link_instance_id"
    t.uuid "location_id"
    t.uuid "service_id"
    t.uuid "organization_id"
    t.uuid "contact_id"
    t.uuid "service_at_location_id"
    t.string "number", null: false
    t.integer "extension"
    t.string "phone_type"
    t.string "language"
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["contact_id"], name: "index_phones_on_contact_id"
    t.index ["link_instance_id"], name: "index_phones_on_link_instance_id"
    t.index ["location_id"], name: "index_phones_on_location_id"
    t.index ["organization_id"], name: "index_phones_on_organization_id"
    t.index ["service_at_location_id"], name: "index_phones_on_service_at_location_id"
    t.index ["service_id"], name: "index_phones_on_service_id"
  end

  create_table "physical_addresses", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "location_id"
    t.uuid "link_instance_id"
    t.string "attention"
    t.string "address_1", null: false
    t.string "city", null: false
    t.string "region"
    t.string "state_province", null: false
    t.string "postal_code", null: false
    t.string "country", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["link_instance_id"], name: "index_physical_addresses_on_link_instance_id"
    t.index ["location_id"], name: "index_physical_addresses_on_location_id"
  end

  create_table "postal_addresses", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "link_instance_id"
    t.string "location_id"
    t.string "attention"
    t.string "address_1", null: false
    t.string "city", null: false
    t.string "region"
    t.string "state_province", null: false
    t.string "postal_code", null: false
    t.string "country", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["link_instance_id"], name: "index_postal_addresses_on_link_instance_id"
  end

  create_table "programs", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "organization_id"
    t.uuid "link_instance_id"
    t.string "name", null: false
    t.string "alternate_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["link_instance_id"], name: "index_programs_on_link_instance_id"
    t.index ["organization_id"], name: "index_programs_on_organization_id"
  end

  create_table "regular_schedules", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "link_instance_id"
    t.uuid "service_id"
    t.uuid "location_id"
    t.uuid "service_at_location_id"
    t.integer "weekday", null: false
    t.datetime "opens_at"
    t.datetime "closes_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["link_instance_id"], name: "index_regular_schedules_on_link_instance_id"
    t.index ["location_id"], name: "index_regular_schedules_on_location_id"
    t.index ["service_at_location_id"], name: "index_regular_schedules_on_service_at_location_id"
    t.index ["service_id"], name: "index_regular_schedules_on_service_id"
  end

  create_table "service_at_locations", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "service_id"
    t.uuid "location_id"
    t.uuid "link_instance_id"
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["link_instance_id"], name: "index_service_at_locations_on_link_instance_id"
    t.index ["location_id"], name: "index_service_at_locations_on_location_id"
    t.index ["service_id"], name: "index_service_at_locations_on_service_id"
  end

  create_table "services", id: :uuid, default: -> { "gen_random_uuid()" }, force: :cascade do |t|
    t.uuid "organization_id"
    t.uuid "program_id"
    t.uuid "link_instance_id"
    t.string "name", null: false
    t.string "alternate_name"
    t.string "description"
    t.string "url"
    t.string "email"
    t.string "status", null: false
    t.string "interpretation_services"
    t.string "application_services"
    t.string "wait_time"
    t.string "fees"
    t.string "accreditations"
    t.string "licenses"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["link_instance_id"], name: "index_services_on_link_instance_id"
    t.index ["organization_id"], name: "index_services_on_organization_id"
    t.index ["program_id"], name: "index_services_on_program_id"
  end

  add_foreign_key "contacts", "link_instances"
  add_foreign_key "contacts", "organizations"
  add_foreign_key "contacts", "service_at_locations"
  add_foreign_key "contacts", "services"
  add_foreign_key "eligibilities", "link_instances"
  add_foreign_key "eligibilities", "services"
  add_foreign_key "holiday_schedules", "link_instances"
  add_foreign_key "holiday_schedules", "locations"
  add_foreign_key "holiday_schedules", "service_at_locations"
  add_foreign_key "holiday_schedules", "services"
  add_foreign_key "languages", "link_instances"
  add_foreign_key "languages", "locations"
  add_foreign_key "languages", "services"
  add_foreign_key "link_instance_settings", "link_instances"
  add_foreign_key "link_instances", "admins", column: "owner_id"
  add_foreign_key "locations", "link_instances"
  add_foreign_key "locations", "organizations"
  add_foreign_key "organizations", "link_instances"
  add_foreign_key "phones", "contacts"
  add_foreign_key "phones", "link_instances"
  add_foreign_key "phones", "locations"
  add_foreign_key "phones", "organizations"
  add_foreign_key "phones", "service_at_locations"
  add_foreign_key "phones", "services"
  add_foreign_key "physical_addresses", "link_instances"
  add_foreign_key "physical_addresses", "locations"
  add_foreign_key "postal_addresses", "link_instances"
  add_foreign_key "programs", "link_instances"
  add_foreign_key "programs", "organizations"
  add_foreign_key "regular_schedules", "link_instances"
  add_foreign_key "regular_schedules", "locations"
  add_foreign_key "regular_schedules", "service_at_locations"
  add_foreign_key "regular_schedules", "services"
  add_foreign_key "service_at_locations", "link_instances"
  add_foreign_key "service_at_locations", "locations"
  add_foreign_key "service_at_locations", "services"
  add_foreign_key "services", "link_instances"
  add_foreign_key "services", "organizations"
  add_foreign_key "services", "programs"
end
