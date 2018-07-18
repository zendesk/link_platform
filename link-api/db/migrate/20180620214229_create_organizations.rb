class CreateOrganizations < ActiveRecord::Migration[5.2]
  def change
    create_table :organizations do |t|
      t.string :name, null: false
      t.string :alternate_name
      t.string :description, null: false
      t.string :email
      t.string :url
      t.string :tax_status
      t.string :tax_id
      t.date :year_incorporated
      t.string :legal_status

      t.timestamps
    end
  end
end
