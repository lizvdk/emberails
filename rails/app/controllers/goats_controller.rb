class GoatsController < ApplicationController
  before_action :set_goat, only: [:show, :update, :destroy]

  # GET /goats
  # GET /goats.json
  def index
    @goats = Goat.all

    render json: @goats
  end

  # GET /goats/1
  # GET /goats/1.json
  def show
    render json: @goat
  end

  # POST /goats
  # POST /goats.json
  def create
    @goat = Goat.new(goat_params)

    if @goat.save
      render json: @goat, status: :created, location: @goat
    else
      render json: @goat.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /goats/1
  # PATCH/PUT /goats/1.json
  def update
    @goat = Goat.find(params[:id])

    if @goat.update(goat_params)
      head :no_content
    else
      render json: @goat.errors, status: :unprocessable_entity
    end
  end

  # DELETE /goats/1
  # DELETE /goats/1.json
  def destroy
    @goat.destroy

    head :no_content
  end

  private

    def set_goat
      @goat = Goat.find(params[:id])
    end

    def goat_params
      params.require(:goat).permit(:name, :bio, :snack, :is_favorite)
    end
end