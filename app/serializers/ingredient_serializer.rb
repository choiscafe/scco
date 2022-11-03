class IngredientSerializer < ActiveModel::Serializer
  attributes :id, :name, :ewg_rating, :toxic, :irritant, :skin_type, :functional
end
