# frozen_string_literal: true

class CreatePrograms < ActiveRecord::Migration[5.2]
  def change
    create_table :programs, id: :uuid do |t|
      t.references :organization, foreign_key: true, type: :uuid
      t.references :link_instance, foreign_key: true, type: :uuid
      t.string :name, null: false
      t.string :alternate_name

      t.timestamps
    end
  end
end
