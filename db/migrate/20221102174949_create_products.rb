class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name
      t.string :category
      t.string :brand
      t.string :image
      t.string :price_size

      t.timestamps
    end
  end
end
