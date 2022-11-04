class ProductsController < ApplicationController
  skip_before_action :authorized, only: [:index]

  def index
    products = Product.all
    render json: products, status: :ok
  end
end
