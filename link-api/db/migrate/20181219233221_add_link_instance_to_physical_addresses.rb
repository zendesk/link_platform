class AddLinkInstanceToPhysicalAddresses < ActiveRecord::Migration[5.2]
  def change
    add_column :physical_addresses, :link_instance_id, :string, null: false
  end
end
