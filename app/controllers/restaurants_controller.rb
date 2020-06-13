class RestaurantsController < ApplicationController
  before_action :authorize_request, only: [:create, :update, :destroy]
  before_action :set_restaurant, only: [:update, :destroy]

  # GET /restaurants
  def index
    @restaurants = Restaurant.all

    render json: @restaurants, include: { reviews: { include: { user: { only: :name }}}}
  end

  # GET /restaurants/1
  def show
    @restaurant = Restaurant.find(params[:id])
    render json: @restaurant, include: :reviews
  end

  # POST /restaurants
  def create
    @restaurant = Restaurant.new(restaurant_params)
    @restaurant.user = @current_user

    if @restaurant.save
      render json: @restaurant, include: { reviews: { include: { user: { only: :name }}}}, status: :created
    else
      render json: @restaurant.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /restaurants/1
  def update
    if @restaurant.update(restaurant_params)
      render json: @restaurant, include: { reviews: { include: { user: { only: :name }}}}
    else
      render json: @restaurant.errors, status: :unprocessable_entity
    end
  end

  # DELETE /restaurants/1
  def destroy
    @restaurant.destroy
  end

  def new_review
    @review = Review.find(params[:review_id])
    @restaurant = Restaurant.find(params[:id])

    @restaurant.reviews << @review
    render json: @restaurant, include: :reviews
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_restaurant
      @restaurant = @current_user.restaurants.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def restaurant_params
      params.require(:restaurant).permit(:name, :imgURL, :location, :description)
    end
end
