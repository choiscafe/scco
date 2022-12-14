class SessionsController < ApplicationController
  skip_before_action :authorized

  def index
    reviews = Review.all
    if reviews&.authenticate(params[:email])
      session[:user_id] = user.id
      render json: reviews, status: :ok
    else
      render json: { error: "Invalid" }
    end
  end

  def create
    user = User.find_by(email:params[:email])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :ok
    else
      render json: { errors: "Invalid username or password" }
    end
  end

  def destroy
    session.delete(:user_id)
    head :no_content
  end

end
