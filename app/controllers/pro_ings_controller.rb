class ProIngsController < ApplicationController
  skip_before_action :authorized, only: [:index]

  def index
    pro_ings = Pro_Ing.all
    render json: pro_ings, status: :ok
  end
end
