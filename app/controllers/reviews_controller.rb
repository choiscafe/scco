class ReviewsController < ApplicationController
  skip_before_action :authorized, only: [:index, :show]

  def index
    reviews = Review.all
    render json: reviews, status: :ok
  end

  def show
    review = Review.find_by(id: params[:id])
    if review
      render json: review, status: :ok
    else
      render json: { error: "Review not found" }, status: :not_found
    end
  end

  def create
    review = Review.create!(review_params)
    render json: review, status: :created
  end

  def update
    review = Review.find_by(id: params[:id])
    if review
      review.update(review_params)
      if review.valid?
        render json: review, status: :ok
      else
        render json: { errors: review.errors.full_messages }, status: :unprocessable_entity
      end
    else
      render json: { error: "Review not found" }, status: :not_found
    end 
  end

  def destroy
    review = Review.find_by(id: params[:id])
    if review
      review.destroy
      render json: {}, status: :ok
    else
      render json: { error: "Review not found" }, status: :not_found
    end
  end

  private

    def review_params
      params.permit(:score, :comments, :tips, :picture, :product_id, :user_id)
    end
end
