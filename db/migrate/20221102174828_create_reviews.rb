class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.integer :score
      t.string :comments
      t.string :tips
      t.string :picture
      t.integer :product_id
      t.integer :user_id

      t.timestamps
    end
  end
end
