class CreatePins < ActiveRecord::Migration[5.0]
  def change
    create_table :pins do |t|
      t.string :item_name
      t.string :transaction_type
      t.string :description
      t.integer :user_id

      t.timestamps
    end
  end
end
