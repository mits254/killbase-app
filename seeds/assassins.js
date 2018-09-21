
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('assassins').del()
    .then(function () {
      // Inserts seed entries
      return knex('assassins').insert([
        
          { "photo":"../photo1.png",
            "full_name": "Alexander Duggan",
            "code_names": "The Jackal",
            "weapon": "Sniper rifle",
            "contact_info": "jackal@gmail.com",
            "age": 31,
            "price": 45,
            "rating": 7.5,
            "kills": 28
          },
          { 
            "photo": "https://media.giphy.com/media/26ufg0PzQM4OVJADm/giphy.gif",
            "full_name": "Anton Chigurh",
            "code_names": "Old Man",
            "weapon": "Pneumatic bolt gun",
            "contact_info": "pneujackcity@gmail.com",
            "age": 52,
            "price": 40,
            "rating": 9,
            "kills": 72
          },
          {
            "photo": "http://bedfordandbowery.com/wp-content/uploads/2015/06/Untitled.png",
            "full_name": "",
            "code_names": "Ghost Dog",
            "weapon": "Pistol",
            "contact_info": "ghostdog@gmail.com",
            "age": 28,
            "price": 20,
            "rating": 6.5,
            "kills": 35
          },
          { 
            "photo":"https://ladygeekgirl.files.wordpress.com/2014/03/ahs-coven-papa-legba1.jpg",
            "full_name": "Jason Bourne",
            "code_names": "",
            "weapon": "Parkour",
            "contact_info": "jb@gmail.com",
            "age": 27,
            "price": 25,
            "rating": 7,
            "kills": 48
          },
          {
            "photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7UruGQk5H9HsZTBpTKJI18v6v4tR1x4FjiiVeHsNKPV6mERtGrQ",
            "full_name": "John Wick",
            "code_names": "Baba Yaga",
            "weapon": "Lots of guns",
            "contact_info": "babayaga@gmail.com",
            "age": 35,
            "price": 50,
            "rating": 9.5,
            "kills": 433
          },
          { 
            "photo": "https://thumbs.gfycat.com/CriminalImpassionedCoqui-small.gif",
            "full_name": "Jules Winnfield",
            "code_names": "",
            "weapon": "Pistol",
            "contact_info": "bmf@gmail.com",
            "age": 26,
            "price": 15,
            "rating": 6.5,
            "kills": 13
          },
          { 
            "photo": "https://cstpdx.com/sites/clinton/files/tim%20curry.jpg",
            "full_name": "Leon",
            "code_names": "The Professional",
            "weapon": "Everything",
            "contact_info": "leon@gmail.com",
            "age": 41,
            "price": 30,
            "rating": 8.5,
            "kills": 87
          },
          { "photo":"http://www.uuannapolis.org/wp-content/uploads/2015/12/vampire_4.jpg",
            "full_name": "Nikita Mears",
            "code_names": "Nikita",
            "weapon": "Silenced pistols",
            "contact_info": "nikita@gmail.com",
            "age": 28,
            "price": 30,
            "rating": 7,
            "kills": 32
          },
          {
            "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVBcxjtDmY3QAxPLnneBxvrfY8Ye2X5PfGp9tVqa4wtYyxUei3tA",
            "full_name": "Nikita Mears",
            "code_names": "La Femme Nikita",
            "weapon": "Silenced pistols",
            "contact_info": "nikita@gmail.com",
            "age": 28,
            "price": 30,
            "rating": 7,
            "kills": 32
          },
          { 
            "photo": "https://imgix.bustle.com/uploads/image/2017/10/20/4703b9c5-6568-4266-9359-e526ebca22e8-3355b9fceeb03f7e60008b36c0556449-scary-movies-horror-movies.jpg",
            "full_name": "Pickle Rick",
            "code_names": "Solenya",
            "weapon": "Lasers and office supplies",
            "contact_info": "rsanchez@gmail.com",
            "age": 60,
            "price": 0,
            "rating": 8,
            "kills": 24
          }
        
      ]);
    });
};
