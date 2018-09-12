class CreateSettings < ActiveRecord::Migration[5.2]
  def change
    create_table :settings do |t|
      t.string :theme_color
      t.string :button_color
      t.string :feedback_email, null: false
      t.string :link_instance_id, null: false

      t.timestamps
    end
  end
end
