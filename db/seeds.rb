# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
User.create(name: "Cho", username: "Cho", password: "Cho")
Product.create(name: "Calm + Restore Triple Oat Hydrating Face Serum for Sensitive Skin", category: "serum", brand: "Aveeno", image: "https://m.media-amazon.com/images/I/71uEPq-7ivL._SL1500_.jpg", price: 19.67)
Review.create(score: 4, comments: "i have very sensitive dry skin and i absolutely love this there’s really isn’t a sent to it just smells like oats which i like.", tips: "The product is very suitable for sensitive skin", picture: "https://myskincareregimehome.files.wordpress.com/2022/06/wp-1656361796370.jpg", product_id: 1, user_id: 1)
Ingredient.create(name: "Water", ewg_rating: 1, toxic: false, irritant: false, skin_type: "", functional: "")
Ingredient.create(name: "Glycerin",ewg_rating: 1, toxic: false, irritant: false, skin_type: "", functional: "")
Ingredient.create(name: "Butylene Glycol",ewg_rating: 1, toxic: false, irritant: false, skin_type: "Good for Dry Skin", functional: "")
Ingredient.create(name:  "Bis-PEG-18 Methyl Ether Dimethyl Silane",ewg_rating: 3, toxic: false, irritant: false, skin_type: "", functional: "")
Ingredient.create(name: "Isodecyl Neopentanoate",ewg_rating: 1, toxic: false, irritant: false, skin_type: "", functional: "")
Ingredient.create(name: "Pentaerythrityl Tetraethylhexanoate",ewg_rating: 1, toxic: false, irritant: false, skin_type: "", functional: "")
Ingredient.create(name: "Ethylhexylglycerin",ewg_rating: 2, toxic: false, irritant: false, skin_type: "", functional: "")
Ingredient.create(name: "Phenoxyethanol",ewg_rating: 4, toxic: false, irritant: false, skin_type: "", functional: "")
Ingredient.create(name: "Ammonium Acryloyldimethyltaurate/VP Copolymer",ewg_rating: 4, toxic: false, irritant: false, skin_type: "", functional: "")
Ingredient.create(name: "Chlorphenesin",ewg_rating: 3, toxic: false, irritant: false, skin_type: "", functional: "")
Ingredient.create(name: "Dimethicone",ewg_rating: 2, toxic: false, irritant: false, skin_type: "", functional: "")
Ingredient.create(name: "Succinoglycan",ewg_rating: 1, toxic: false, irritant: false, skin_type: "", functional: "")
Ingredient.create(name: "Chrysanthemum Parthenium (Feverfew) Flower/Leaf/Stem Juice",ewg_rating: 1, toxic: false, irritant: false, skin_type: "", functional: "")
Ingredient.create(name: "Avena Sativa (Oat) Kernel Flour",ewg_rating: 1, toxic: false, irritant: false, skin_type: "", functional: "")
Ingredient.create(name: "Avena Sativa (Oat) Kernel Oil",ewg_rating: 1, toxic: false, irritant: false, skin_type: "", functional: "")
Ingredient.create(name: "Acrylates/C10-30 Alkyl Acrylate Crosspolymer",ewg_rating: 1, toxic: false, irritant: false, skin_type: "", functional: "")
Ingredient.create(name: "Dimethiconol",ewg_rating: 1, toxic: false, irritant: false, skin_type: "", functional: "")
Ingredient.create(name: "Sodium Hydroxide",ewg_rating: 4, toxic: false, irritant: false, skin_type: "", functional: "")
Ingredient.create(name: "Avena Sativa (Oat) Kernel Extract", ewg_rating: 1, toxic: false, irritant: false, skin_type: "", functional: "")
ProIng.create(product_id:1, ingredient_id:1)
ProIng.create(product_id:1, ingredient_id:2)
ProIng.create(product_id:1, ingredient_id:3)
ProIng.create(product_id:1, ingredient_id:4)
ProIng.create(product_id:1, ingredient_id:5)
ProIng.create(product_id:1, ingredient_id:6)
ProIng.create(product_id:1, ingredient_id:7)
ProIng.create(product_id:1, ingredient_id:8)
ProIng.create(product_id:1, ingredient_id:9)
ProIng.create(product_id:1, ingredient_id:10)
ProIng.create(product_id:1, ingredient_id:11)
ProIng.create(product_id:1, ingredient_id:12)
ProIng.create(product_id:1, ingredient_id:13)
ProIng.create(product_id:1, ingredient_id:14)
ProIng.create(product_id:1, ingredient_id:15)
ProIng.create(product_id:1, ingredient_id:16)
ProIng.create(product_id:1, ingredient_id:17)
ProIng.create(product_id:1, ingredient_id:18)
ProIng.create(product_id:1, ingredient_id:19)