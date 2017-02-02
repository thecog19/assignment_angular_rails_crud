
class Pin < ApplicationRecord
  validates :item_name, length: { minimum: 3, maximum: 256 }
  validates :description, length: { minimum: 12, maximum: 256 }
  validates :transaction_type, presence: true
end
