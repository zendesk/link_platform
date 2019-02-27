# frozen_string_literal: true

class CreateLinkInstanceSettings < ActiveRecord::Migration[5.2]
  def change
    create_table :link_instance_settings, id: :uuid do |t|
      t.references :link_instance, foreign_key: true, type: :uuid
      t.string  :name, null: false
      t.string  :value
      t.timestamps
    end

    add_index :link_instance_settings, %i[link_instance_id name], unique: true
  end
end
