

def generate_users(n)
  count_before = User.count
  n.times do
    create_user
  end
  puts "#{ User.count - count_before } Users created"
end

def create_user
  User.create(
    email: Faker::Internet.email,
    password: 'password'
  )
end

def generate_pins(n)
  count_before = Pin.count
  user_ids = User.pluck(:id)
  transaction_types = ['buy', 'sell']
  n.times do
    create_pin(user_ids.sample, transaction_types.sample)
  end
  puts "#{ Pin.count - count_before } Pins created"
end

def create_pin(user_id, transaction_type)
  Pin.create(
    item_name: Faker::Space.nebula,
    transaction_type: transaction_type,
    description: Faker::StarWars.quote,
    user_id: user_id
  )
end

generate_users(5)

generate_pins(15)
