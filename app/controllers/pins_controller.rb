class PinsController < ApplicationController
  def index
    @pins = Pin.all
    respond_to do |format|
      format.html {}
      format.json { render json: @pins }
    end
  end

  def create
    @pin = Pin.new(pin_params)
    @pin.save 
  end

  def destroy
  end

  def show
    @pin = Pin.find(params[:id])
    respond_to do |format|
      format.json { render json: @pin }
    end
  end

  def edit
  end

  def new
  end

  def update
    @pin = Pin.find(params[:id])
    @pin.update_attributes(pin_params)
    respond_to do |format|
      format.json { render json: @pin }
    end
  end

  private

  
    def pin_params
      params.require(:pin).permit(:item_name, :transaction_type, :description)
    end
end
