class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :brand, :image, :price_size
  has_many :ingredients
  has_many :reviews
end
