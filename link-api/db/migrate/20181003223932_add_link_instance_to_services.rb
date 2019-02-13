# frozen_string_literal: true

class AddLinkInstanceToServices < ActiveRecord::Migration[5.2]
  def change
    add_column :services, :link_instance_id, :string, null: false
  end
end
