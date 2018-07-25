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

ActiveRecord::Schema.define(version: 2018_07_25_202902) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "link_instances", force: :cascade do |t|
    t.string "name", null: false
    t.string "subdomain", null: false
    t.string "email", null: false
    t.string "url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "locations", force: :cascade do |t|
    t.string "name"
    t.string "alternate_name"
    t.string "description"
    t.string "transportation"
    t.integer "latitude"
    t.integer "longitude"
    t.string "organization_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "organizations", force: :cascade do |t|
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
  end

  create_table "physical_addresses", force: :cascade do |t|
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
  end

end
