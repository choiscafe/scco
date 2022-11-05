class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :brand, :image, :price_size
  has_many :ingredients
end
