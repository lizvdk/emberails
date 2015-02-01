class CreateGoats < ActiveRecord::Migration
  def change
    create_table :goats do |t|
      t.string :name
      t.text :bio
      t.string :snack
      t.boolean :is_favorite

      t.timestamps null: false
    end
  end
end
