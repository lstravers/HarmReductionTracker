class Client < ApplicationRecord
  belongs_to :user
  has_many :inventories
end
