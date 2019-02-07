# frozen_string_literal: true

class AddLinkInstanceToOrganizations < ActiveRecord::Migration[5.2]
  def change
    add_column :organizations, :link_instance_id, :string, null: false
  end
end
