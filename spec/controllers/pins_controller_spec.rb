require 'rails_helper'

RSpec.describe PinsController do

  describe 'get /pins.json' do
    context 'successful response' do
      before(:all){ create_list(:pin, 10) }
      let( :json ){ JSON.parse( response.body ) }

      it 'returns a valid JSON object' do
        get :index, format: :json
        expect(json).to be_a Array 
      end

      it 'the array contains hashes' do
        get :index, format: :json
        expect(json[0]).to be_a Hash 
      end

      it 'the correct number of items is returned' do
        get :index, format: :json
        expect(json.length).to eq(10) 
      end

    end
  end

   describe 'create /pins.json' do

   end

end
