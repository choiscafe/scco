class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :admin, :password_digest
  has_many :reviews
end
