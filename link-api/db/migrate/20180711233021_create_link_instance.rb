class CreateLinkInstance < ActiveRecord::Migration[5.2]
  def change
    create_table :link_instances do |t|
      t.string :name
      t.string :subdomain
      t.string :email
      t.string :url
      t.timestamps
    end
  end
end
