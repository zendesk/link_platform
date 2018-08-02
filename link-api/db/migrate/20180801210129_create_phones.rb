class CreatePhones < ActiveRecord::Migration[5.2]
  def change
    create_table :phones do |t|
      t.string :location_id
      t.string :service_id
      t.string :organization_id
      t.string :contact_id
      t.string :service_at_location_id
      t.string :number
      t.integer :extension
      t.string :type
      t.string :language
      t.string :description

      t.timestamps
    end
  end
end
