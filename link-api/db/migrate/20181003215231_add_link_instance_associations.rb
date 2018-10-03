class AddLinkInstanceAssociations < ActiveRecord::Migration[5.2]
  def change
    add_column :contacts, :link_instance_id, :string
  end
end
