class CreateEligibilities < ActiveRecord::Migration[5.2]
  def change
    create_table :eligibilities do |t|
      t.string :link_instance_id, null: false
      t.string :service_id
      t.string :eligibility

      t.timestamps
    end
  end
end
