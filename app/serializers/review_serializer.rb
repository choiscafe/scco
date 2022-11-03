class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :score, :comments, :tips, :picture, :product_id, :user_id
end
