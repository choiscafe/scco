class Ingredient < ApplicationRecord
  has_many :pro_ings
  has_many :products, through: :pro_ings

  validates :name, :ewg_rating, presence: true
end
