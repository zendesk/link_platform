class AddLinkInstanceAssociations < ActiveRecord::Migration[5.2]
  def change
    add_column :locations, :link_instance_id, :string, null: false
    change_column :locations, :latitude, :float
    change_column :locations, :longitude, :float
  end
end
