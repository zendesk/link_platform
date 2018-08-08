class CreateLinkInstances < ActiveRecord::Migration[5.2]
  def change
    create_table :link_instances do |t|
      t.string :name, null: false
      t.string :subdomain, null: false
      t.string :email, null: false
      t.string :url
      t.timestamps
    end
  end
end
