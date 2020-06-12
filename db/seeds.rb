# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Review.destroy_all
Restaurant.destroy_all
User.destroy_all

@user = User.create!(username: 'clairecodes', email: 'claire@claire.com', password: '123456')

@restaurant = Restaurant.create!(user: @user, name: 'Ugly Baby', imgURL: 'https://media.timeout.com/images/105556144/380/285/image.jpg', location: 'Location: Carroll Gardens', description: 'Tucked away on a quiet stretch of Smith Street in Carroll Gardens is a Thai restaurant that will keep you coming back for more self-inflicted pain. Whether you’re ordering the “stay-away spicy Udon Thani’s duck salad” or the khao soi, the servers will warn you over and over to be careful of the spice. You’ll go against their advice and end up begging for more of the cooling cucumbers to ward off the heat.')

@restaurant = Restaurant.create!(user: @user, name: 'Ugly Baby', imgURL: 'https://media.timeout.com/images/105556144/380/285/image.jpg', location: 'Carroll Gardens', description: 'Tucked away on a quiet stretch of Smith Street in Carroll Gardens is a Thai restaurant that will keep you coming back for more self-inflicted pain. Whether you’re ordering the “stay-away spicy Udon Thani’s duck salad” or the khao soi, the servers will warn you over and over to be careful of the spice. You’ll go against their advice and end up begging for more of the cooling cucumbers to ward off the heat.')

Review.create!(user: @user, restaurant: @restaurant, text: 'Leave your review here...')


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


