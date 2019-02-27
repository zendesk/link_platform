# frozen_string_literal: true

class CreateLinkInstances < ActiveRecord::Migration[5.2]
  def change
    create_table :link_instances, id: :uuid do |t|
      t.references :owner, foreign_key: { to_table: :admins }, type: :uuid
      t.string :name, null: false
      t.string :subdomain, null: false
      t.string :email, null: false
      t.string :url

      t.timestamps
    end
  end
end
