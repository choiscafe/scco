class User < ApplicationRecord
  has_secure_password
  
  has_many :reviews
  has_many :products, through: :reviews

  validates :name, :username, :password, presence: true
  validates :username, uniqueness: true
end
