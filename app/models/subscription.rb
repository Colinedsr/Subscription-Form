class Subscription < ApplicationRecord
  validates :name, :email, presence: true
  validates :phone, format: { with: /\A6\d{8}\z/, message: "phone must have 9 numbers" }
end
