# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Restaurants.destroy_all
Reviews.destroy_all
Users.destroy_all

Users.create!(username: 'clairecodes', email: 'claire@claire.com', password: '123456')

Reviews.create!(text: 'Leave your review here')

Restaurants.create!(name: 'Ugly Baby', imgURL: 'https://media.timeout.com/images/105556144/380/285/image.jpg', location: 'Carroll Gardens', description: 'Tucked away on a quiet stretch of Smith Street in Carroll Gardens is a Thai restaurant that will keep you coming back for more self-inflicted pain. Whether you’re ordering the “stay-away spicy Udon Thani’s duck salad” or the khao soi, the servers will warn you over and over to be careful of the spice. You’ll go against their advice and end up begging for more of the cooling cucumbers to ward off the heat.')

# Restaurant.create!(name: '', imgURL: '', location: '', description: '')
# Restaurant.create!(name: '', imgURL: '', location: '', description: '')
# Restaurant.create!(name: '', imgURL: '', location: '', description: '')
# Restaurant.create!(name: '', imgURL: '', location: '', description: '')
# Restaurant.create!(name: '', imgURL: '', location: '', description: '')
# Restaurant.create!(name: '', imgURL: '', location: '', description: '')
# Restaurant.create!(name: '', imgURL: '', location: '', description: '')
# Restaurant.create!(name: '', imgURL: '', location: '', description: '')
# Restaurant.create!(name: '', imgURL: '', location: '', description: '')
# Restaurant.create!(name: '', imgURL: '', location: '', description: '')
# Restaurant.create!(name: '', imgURL: '', location: '', description: '')
# Restaurant.create!(name: '', imgURL: '', location: '', description: '')
# Restaurant.create!(name: '', imgURL: '', location: '', description: '')
# Restaurant.create!(name: '', imgURL: '', location: '', description: '')


