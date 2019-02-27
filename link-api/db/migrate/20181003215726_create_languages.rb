# frozen_string_literal: true

class CreateLanguages < ActiveRecord::Migration[5.2]
  def change
    create_table :languages, id: :uuid do |t|
      t.references :link_instance, foreign_key: true, type: :uuid
      t.references :service, foreign_key: true, type: :uuid
      t.references :location, foreign_key: true, type: :uuid
      t.string :language

      t.timestamps
    end
  end
end
