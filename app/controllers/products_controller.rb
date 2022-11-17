class ProductsController < ApplicationController
  skip_before_action :authorized, only: [:index, :show] 

  def index
    products = Product.all
    render json: products, status: :ok
  end

  def show
    product = Product.find_by(id: params[:id])
    if product
    render json: product, status: :ok
    else
      render json: { error: "Review not found" }, status: :not_found
    end
  end

end
