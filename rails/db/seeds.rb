15.times do
  Goat.create(
    name: "#{Faker::Name.first_name} McGoat",
    bio: Faker::Lorem.paragraph,
    snack: Faker::Lorem.word,
    is_favorite: [true, false].sample
  )
end
