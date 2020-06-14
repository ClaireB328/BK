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

@restaurant = Restaurant.create!(
user: @user, 
name: 'Ugly Baby', 
imgURL: 'https://media.timeout.com/images/105556144/380/285/image.jpg', 
location: 'Location: Carroll Gardens', 
description: 'Tucked away on a quiet stretch of Smith Street in Carroll Gardens is a Thai restaurant that will keep you coming back for more self-inflicted pain. Whether you’re ordering the “stay-away spicy Udon Thani’s duck salad” or the khao soi, the servers will warn you over and over to be careful of the spice. You’ll go against their advice and end up begging for more of the cooling cucumbers to ward off the heat.')

@restaurant = Restaurant.create!(
user: @user, 
name: 'A&A Bake and Doubles', 
imgURL: 'https://media.timeout.com/images/105538030/380/285/image.jpg', 
location: 'Location: Bedford-Stuyvesant', 
description: 'This small, stellar Caribbean joint in Bed-Stuy has three specialties: bake, doubles and—you guessed it—roti. The first is a handheld fried-dough bun stuffed with salt fish or fried sand shark and topped with a tangy-sweet tamarind sauce.')

@restaurant = Restaurant.create!(
user: @user, 
name: 'Paulie Gee’s Slice Shop', 
imgURL: 'https://media.timeout.com/images/105495365/380/285/image.jpg', 
location: 'Location: Greenpoint', 
description: 'Unlike its beloved original location, which offers only tableside pies, the year-old Paulie Gee’s Slice Shop is all about, yes, the classic New York slice—that is, those melty, cheesy, portable chews that fill us up at any time of day. The sleeper hit? The saucy Freddy Prince.')

@restaurant = Restaurant.create!(
user: @user, 
name: 'Maison Yaki', 
imgURL: 'https://media.timeout.com/images/105443860/380/285/image.jpg', 
location: 'Location: Prospect Heights', 
description: 'A French yakitori spot from lauded chef Greg Baxtrom offering playful dishes like cauliflower okonomiyaki, tempura-fried frog legs and Pocky-style dessert.')

@restaurant = Restaurant.create!(
user: @user, 
name: 'Hometown Bar-b-que', 
imgURL: 'https://media.timeout.com/images/105538007/380/285/image.jpg', 
location: 'Location: Red Hook', 
description: 'More than a decade in, Brooklyn’s  BBQ renaissance shows no signs of cooling down. Need a place to start? Hometown Bar-B-Que is—without a doubt—New York’s hottest smoke joint, a wood-paneled, 120-seat meat haven that’s inspired by self-taught honcho Billy Durney’s Kings County upbringing and travels through the South.')

@restaurant = Restaurant.create!(
user: @user, 
name: 'Lilia', 
imgURL: 'https://media.timeout.com/images/103248479/380/285/image.jpg', 
location: 'Location: Williamsburg', 
description: 'This airy Williamsburg parlor has perfected pasta—be it cappelletti with corn, Parmigiano and black pepper; agnolotti stuffed with sheep’s-milk cheese, saffron, dried tomato and honey; or the crowd favorite, mafaldine with pink peppercorn.') 

@restaurant = Restaurant.create!(
user: @user, 
name: 'Cafe at your Mother-in-Law', 
imgURL: 'https://media.timeout.com/images/103953766/380/285/image.jpg', 
location: 'Location: Brighton Beach', 
description: 'Cafe at your Mother-in-law is a way more enjoyable experience than actually dining with your partners parents. Try the wonders of Uzbek-Korean-Russian food through dishes like pelmeni and kuksu, a beef soup with pickled cucumbers and fresh dill.')


@restaurant = Restaurant.create!(
user: @user, 
name: 'Bunna Cafe', 
imgURL: 'https://media.timeout.com/images/105515731/380/285/image.jpg', 
location: 'East Williamsburg', 
description: 'At this vegetarian Ethiopian charmer, you’ll get a spread of traditional bites, including red lentils in berbere sauce, mashed split peas simmered with tomato, and a chickpea stuffing with kale. Cool the heat of the spicier flavors with a strip of injera.')

@restaurant = Restaurant.create!(
user: @user, 
name: 'Llama Inn', 
imgURL: 'https://media.timeout.com/images/105538010/380/285/image.jpg', 
location: 'Location: Williamsburg', 
description: 'Erik Ramirez cut his teeth at fine dining establishments like Eleven Madison Park. But in 2015 he went off on his own, circling back to his roots of Peru. Today, Ramirez has expanded with Llamita and Llama San, but his first remains the Goldie Locks-esque perfect middle between high-end and fast-casual locations.')

@restaurant = Restaurant.create!(
user: @user, 
name: 'Oxomoco', 
imgURL: 'https://media.timeout.com/images/105323479/380/285/image.jpg', 
location: 'Location: Greenpoint', 
description: 'Created by the Speedy Romeo team, the recently Michelin-starred Oxomoco focuses on wood-fired dishes; favorites include a beet “chorizo" taco,  masa-fried cauliflower with black mole, pepitas, and butternut squash crema and chicken al pastor with grilled pineapple. The restaurant exudes a faint campfire smell that spreads throughout the all-white dining room, accented only by the green ivy hanging from the skylights. Be mesmerized by the glow emanating off the illuminated bar, lined with beautiful bottles of mezcal and tequila, ready to be shaken or stirred into cocktails.')

@restaurant = Restaurant.create!(
user: @user, 
name: 'Harts', 
imgURL: 'https://media.timeout.com/images/105284250/380/285/image.jpg', 
location: 'Location: Bedford-Stuyvesant', 
description: 'Chef Nick Perkins, a veteran of Andrew Tarlow’s Williamsburg empire of Diner and Marlow & Sons, brings some serious chops to this Bed-Stuy beauty. In the 30-seat dining room (marble-topped bar, cushioned banquettes) designed by Perkins’s brother, Russell, the toque turns out Mediterranean-focused plates that are always elevated but never fussy.')

@restaurant = Restaurant.create!(
user: @user, 
name: 'Oasis', 
imgURL: 'https://media.timeout.com/images/105539934/380/285/image.jpg', 
location: 'Location: Williamsburg', 
description: 'Oasis is our no-fail, no-frills, trusty best friend for falafel platters and pita sandwiches. Beyond just damn good falafel, we really appreciate the bounty of pickled veggies that dont feel like an afterthought or filler.')

@restaurant = Restaurant.create!(
user: @user, 
name: 'Claro', 
imgURL: 'https://media.timeout.com/images/105232849/380/285/image.jpg', 
location: 'Location: Gowanus', 
description: 'Everyone loves a good taco, but at Claro, your notion of Mexican food is greatly expanded. The aguachile is not exactly your run-of-the-meal ceviche: scallops marinate in a bath of bright citrus and also have an unexpected hit of heat. The tortillas are house made and make a perfect vehicle for the complex moles that feel tradition yet modern.')

@restaurant = Restaurant.create!(
user: @user, 
name: 'L&B Spumoni Gardens', 
imgURL: 'https://media.timeout.com/images/103481138/380/285/image.jpg', 
location: 'Location: Gravesend', 
description: 'Sure, table service is available, but when it comes to L&B, we suggest ordering your grandma-style pie at the to-go counter and sitting outside. There are two rules here: Fight for that Parmesan shaker, and no matter how stuffed you are, you must finish your meal with spumoni, a tricolor ice cream.')

@restaurant = Restaurant.create!(
user: @user, 
name: 'Tanoreen', 
imgURL: 'https://media.timeout.com/images/103408795/380/285/image.jpg', 
location: 'Location: Bay Ridge', 
description: 'The unique Middle Eastern cuisine at Tanoreen is certainly worth the trip to Bay Ridge. Chef-owner Rawia Bishara is known almost as much for her hospitality as her stellar cooking. The menu is extensive, but the mhammara is the must order: walnuts, pomegranate molasses, red bell peppers and spices pureed into a rich dip that goes well on almost anything..')

Review.create!(user: @user, restaurant: @restaurant, text: 'Leave your review here...')

