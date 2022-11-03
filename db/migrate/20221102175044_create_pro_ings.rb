class CreateProIngs < ActiveRecord::Migration[7.0]
  def change
    create_table :pro_ings do |t|
      t.integer :product_id
      t.integer :ingredient_id

      t.timestamps
    end
  end
end
