require 'rails_helper'

RSpec.describe PinsController do

  describe 'GET /pins.json' do
    context 'successful response' do
      before(:each){ create_list(:pin, 10) }
      let( :json ){ JSON.parse( response.body ) }

      it 'the correct number of items is returned' do
        get :index, format: :json
        expect(json.length).to eq(10)
      end

      it 'returns a valid JSON object' do
        get :index, format: :json
        expect(json).to be_a Array
      end

      it 'the array contains hashes' do
        get :index, format: :json
        expect(json[0]).to be_a Hash
      end

    end
  end

  describe 'POST /pins.json' do
    context 'valid data' do
      it 'creates a new pin' do
        valid_pin_data = { item_name: 'cheese',
                           description: 'the best thing ever',
                           transaction_type: 'buy' }
        expect {
          post :create, pin: valid_pin_data
        }.to change { Pin.count }.by(1)
      end
    end

    context 'invalid data' do
      it 'does not create a new pin' do
        invalid_pin_data = { item_name: 'x',
                             description: 'too short',
                             transaction_type: 'buy' }
        expect {
          post :create, pin: invalid_pin_data
        }.to change { Pin.count }.by(0)
      end
    end
  end

  describe 'SHOW /pins/:id.json' do
    context 'valid pin id' do
      it 'returns pin with corresponding id' do
        create(:pin, id: 3)
        response = get :show, format: :json, id: 3
        expect(JSON.parse(response.body)['id']).to eq(3)
      end
    end
  end

end
