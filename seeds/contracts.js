
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contracts').del()
    .then(function () {
      // Inserts seed entries
      return knex('contracts').insert([
        
          {
            "target_name": "Butch Coolidge",
            "target_location": "Los Angeles",
            "target_photo": "https://goo.gl/LCquZj",
            "target_security": 3,
            "client_name": "Marcellus Wallace",
            "budget": 40,
            "complete": true
          },
          {
            "target_name": "The Jaguar",
            "target_location": "Russian Embassy",
            "target_photo": "https://goo.gl/6JWsiv",
            "target_security": 9,
            "client_name": "Concerto",
            "budget": 70,
            "complete":false
          },
          {
            "target_name": "Norman Stansfield",
            "target_location": "Manhattan",
            "target_photo": "http://digitalspyuk.cdnds.net/17/01/640x320/landscape-1483538046-shocked-joey.gif",
            "target_security": 7,
            "client_name": "Mathilda",
            "budget": 35,
            "complete":false
          },
          {
            "target_name": "Santino D'Antonio",
            "target_location": "Continental Hotel",
            "target_photo": "https://goo.gl/fUPkYy",
            "target_security": 10,
            "client_name": "Winston",
            "budget": 25,
            "complete": true
          },
          {
            "target_name": "Sonny Valerio",
            "target_location": "Queens",
            "target_photo": "https://media.giphy.com/media/gNdXvqNxaxxnO/giphy.gif",
            "target_security": 4,
            "client_name": "Ray Vargo",
            "budget": 10,
            'complete': true
          }
        
      ]);
    });
};
