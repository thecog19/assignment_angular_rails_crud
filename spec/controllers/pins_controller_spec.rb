require 'rails_helper'

describe PinsController do

  describe 'get /pins.json' do
    context 'successful response' do
      it 'returns a valid JSON object' do
        create(:pin) # Factory girl

      end

    end
  end

end
