class AddLinkInstanceToServiceAtLocation < ActiveRecord::Migration[5.2]
  def change
    add_column :service_at_locations, :link_instance_id, :string, null: false
  end
end