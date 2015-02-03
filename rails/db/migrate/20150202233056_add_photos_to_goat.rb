class AddPhotosToGoat < ActiveRecord::Migration
  def change
    add_column :goats, :photo_url, :string, default: "img/default-goat.png"
  end
end
