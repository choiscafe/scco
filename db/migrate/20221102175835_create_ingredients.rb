class CreateIngredients < ActiveRecord::Migration[7.0]
  def change
    create_table :ingredients do |t|
      t.string :name
      t.integer :ewg_rating
      t.boolean :toxic
      t.boolean :irritant
      t.string :skin_type
      t.string :functional

      t.timestamps
    end
  end
end
