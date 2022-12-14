class UsersController < ApplicationController
  skip_before_action :authorized, only: [:create]

  def show
    render json: current_user, status: :ok
  end

  def create
    user = User.create!(user_params)
    render json: user, status: :created
  end

  # def create
  #   user = User.create!(user_params)
  #   if user.valid?
  #   render json: user, status: :created
  #   else
  #     render json: {errors: user.errors.full_message}, status: :unprocessable_entity
  #   end
  #   end

  def user_params
    params.permit(:username, :email, :password)
  end

end

