class Product < ApplicationRecord
  has_many :reviews
  has_many :users, through: :reviews
  has_many :pro_ings
  has_many :ingredients, through: :pro_ings

  validates :name, :category, :brand, :image, presence: true
end
