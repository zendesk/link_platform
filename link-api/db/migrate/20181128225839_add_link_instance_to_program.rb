# frozen_string_literal: true

class AddLinkInstanceToProgram < ActiveRecord::Migration[5.2]
  def change
    add_column :programs, :link_instance_id, :string
  end
end
