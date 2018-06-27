class CreateOrganizations < ActiveRecord::Migration[5.2]
  def change
    create_table :organizations do |t|
      t.string :name
      t.string :alternate_name
      t.string :description
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
