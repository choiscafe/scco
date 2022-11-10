class IngredientsController < ApplicationController
  skip_before_action :authorized, only: [:index]

  def index
    ingredients = Ingredient.all
    render json: ingredients, status: :ok
  end
end
