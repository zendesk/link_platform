class CreateServices < ActiveRecord::Migration[5.2]
  def change
    create_table :services do |t|
      t.string :organization_id, null: false
      t.string :program_id
      t.string :name, null: false
      t.string :alternate_name
      t.string :description
      t.string :url
      t.string :email
      t.string :status, null: false
      t.string :interpretation_services
      t.string :application_services
      t.string :wait_time
      t.string :fees
      t.string :accreditations
      t.string :licenses

      t.timestamps
    end
  end
end
