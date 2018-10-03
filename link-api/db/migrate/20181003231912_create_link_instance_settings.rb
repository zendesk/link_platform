class CreateLinkInstanceSettings < ActiveRecord::Migration[5.2]
  def change
    create_table :link_instance_settings do |t|
      t.string :link_instance_id, null: false
      t.string  :name, null: false
      t.string  :value
      t.timestamps
    end

    add_index :link_instance_settings, [ :link_instance_id, :name ], :unique => true
  end
end
