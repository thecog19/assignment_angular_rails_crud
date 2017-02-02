class PinsController < ApplicationController
  def index
    @pins = Pin.all
    respond_to do |format| 
      format.html {}
      format.json { render json: @pins }
    end
  end

  def create
  end

  def destroy
  end

  def show
  end

  def edit
  end

  def new
  end

  def update 
  end
end
