Goat.create(
  name: "Frostie",
  bio:"That Frostie was a sickly little kid goat was something that we knew
       from the very day he came into our world. Unable to stand, let alone
       walk, severely dehydrated and riddled with lice, Frostie’s lot was not
       good, but no one told him that. He wanted to live, and that was just
       what we promised him we would help him do. Right from day one he began
       to rally. He had a delightful and infectious sense of joie de vivre as
       he scooted about at first in his little mobility cart with that
       ‘hey look at me’ smile, then his brave ‘hey look no wheels’ tenacious
       first steps skipped hearts into flutter mode across the globe.",
  snack: "Snowcones",
  photo_url: "img/seeded-goat-profile-pics/frosty.jpg",
  is_favorite: true
)

fav_goats = [
  { name: "Liz Vandergoat",
    bio: "Quite a quirky goat.",
    snack: "That's my Jam (Ben & Jerry's)",
    photo_url: "img/seeded-goat-profile-pics/liz.jpg"
  },
  { name: "Eunice",
    bio: "A sweetheart.",
    snack: "Sugar cookies",
    photo_url: "img/seeded-goat-profile-pics/eunice.jpg"
  },
  { name: "Billy",
    bio: "Don't mess with Billy!",
    snack: "Tacks and Nails",
    photo_url: "img/seeded-goat-profile-pics/billy.jpg"
  },
  { name: "Oreo",
    bio: "This silly little goat actually hates oreos.",
    snack: "Nilla Wafers",
    photo_url: "img/seeded-goat-profile-pics/oreo.jpg"
  },
  { name: "Cupcake",
    bio: "Too sweet to eat",
    snack: "Cupcakes (duh!)",
    photo_url: "img/seeded-goat-profile-pics/cupcake.jpg"
  },
  { name: "Goatye",
    bio: "Somegoat that I used to know",
    snack: "Drinks human tears",
    photo_url: "img/seeded-goat-profile-pics/goatye.jpg"
  },
  { name: "Vincent van Goat",
    bio: "Crazy mo-fo who paints pretty pictures with shit tons of paint.",
    snack: "Bread",
    photo_url: "img/seeded-goat-profile-pics/vincent.jpg"
  },
  { name: "Frito",
    bio: "So much fun",
    snack: "Crinkely bags",
    photo_url: "img/seeded-goat-profile-pics/frito.jpg"
  }
]

fav_goats.each do |goat|
  Goat.create(
    name: goat[:name],
    bio: goat[:bio],
    snack: goat[:snack],
    photo_url: goat[:photo_url],
    is_favorite: true
  )
end

10.times do
  Goat.create(
    name: "#{Faker::Name.first_name} McGoat",
    bio: "A #{["funny", "silly", "sweet", "serious"].sample} goat.
          #{Faker::Lorem.paragraph}",
    snack: "#{["Your", "Random"].sample}
            #{["Jeans", "Tin Cans", "Trash", "Babies"].sample}",
    is_favorite: false
  )
end
