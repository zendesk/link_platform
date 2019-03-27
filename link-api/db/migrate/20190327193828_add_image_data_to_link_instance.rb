class AddImageDataToLinkInstance < ActiveRecord::Migration[5.2]
  def change
    add_column :link_instances, :image_data, :text
  end
end
