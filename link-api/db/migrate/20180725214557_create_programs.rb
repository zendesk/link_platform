# frozen_string_literal: true

class CreatePrograms < ActiveRecord::Migration[5.2]
  def change
    create_table :programs do |t|
      t.string :organization_id, null: false
      t.string :name, null: false
      t.string :alternate_name

      t.timestamps
    end
  end
end
