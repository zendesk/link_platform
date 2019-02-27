# frozen_string_literal: true

class CreateEligibilities < ActiveRecord::Migration[5.2]
  def change
    create_table :eligibilities, id: :uuid do |t|
      t.references :link_instance, foreign_key: true, type: :uuid
      t.references :service, foreign_key: true, type: :uuid
      t.string :eligibility

      t.timestamps
    end
  end
end
