class ChangeDefaultGoatImage < ActiveRecord::Migration
  def change
    change_column :goats, :photo_url, :string, default: "https://s3.amazonaws.com/goat-space-production/img/default-goat.png"
  end
end
