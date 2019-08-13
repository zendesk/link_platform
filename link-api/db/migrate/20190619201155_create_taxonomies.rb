class CreateTaxonomies < ActiveRecord::Migration[5.2]
  def change
    create_table :taxonomies, id: :uuid do |t|
      t.references :link_instance, foreign_key: true, type: :uuid
      t.string :name, null: false
      t.string :parent_id
      t.string :parent_name
      t.string :vocabulary

      t.timestamps
    end
  end
end
