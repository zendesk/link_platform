# frozen_string_literal: true

class AddLinkInstanceToContacts < ActiveRecord::Migration[5.2]
  def change
    add_column :contacts, :link_instance_id, :string, null: false
  end
end
