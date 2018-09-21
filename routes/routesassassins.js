let express = require('express');
let router = express.Router();
let knex = require('../db/knex');

router.get('/assassins', function(req, res,next) {  
  knex('assassins')
  .orderBy('id')
  .then((assassins)=>{
    // res.render('assassins',{
    //   assassins:assassins
    res.render('assassins',{assassins});

  })
  .catch((err)=>{
    next(err);
  });
});

router.get('/assassins/:id',(req,res, next)=>{
  knex('assassins').where('id',req.params.id).then((assassins)=>{
    if(!assassins) {
      return next();
    }
    res.render('assassins',{assassins});
  })
  .catch((err)=>{
    next(err);
  })
});

router.get('/newAssassin', function(req, res) {  
      res.render('newAssassin',{ }); 
});


router.post('/newAssassin/add',(req, res, next)=>{
  knex('assassins').insert({photo:req.body.photo ||'https://media2.giphy.com/media/l4pSWRbxwp4Ss2xkQ/giphy.webp',
    full_name : req.body.full_name, 
    code_names : req.body.code_names, 
    weapon :req.body.weapon, 
    contact_info: req.body.contact_info, 
    age : req.body.age, 
    price: req.body.price, 
    rating: req.body.rating, 
    kills:req.body.kills}, '*')
    .then((assassins)=>{
      res.render('assassins',{assassins});
    })
    .catch((err)=>{
      next(err);
    })  
});

router.get('/EditAssassin/:id', function(req, res) {  
  knex('assassins').where('id',req.params.id).then((assassins)=>{
    if(!assassins) {
      return next();
    }
    
  res.render('EditAssassin',{assassins}); 
})
.catch((err)=>{
  next(err);
})
});  

router.post('/EditAssassin/:id',(req,res, next)=>{
  
  knex('assassins').where('id',req.params.id).then((assassins)=>{
    
  knex('assassins').update({photo:req.body.photo ||'https://media2.giphy.com/media/l4pSWRbxwp4Ss2xkQ/giphy.webp',
     full_name : req.body.full_name,
      code_names : req.body.code_names, 
      weapon :req.body.weapon, 
      contact_info: req.body.contact_info, 
      age : req.body.age,
       price: req.body.price, 
       rating: req.body.rating, 
       kills:req.body.kills}, '*').where('id',req.params.id).then((assassins)=>{
    res.render('assassins',{assassins});
  });
  })
  .catch((err)=>{
    next(err);
  })
});  




router.post('/delete/:id',(req, res, next)=>{
  let row;
  knex('assassins')
  .where('id',req.params.id)
  .then((assassins)=>{
    row = assassins;
    return knex('assassins').del().where('id',req.params.id);
  })
  .then(()=>{
     delete row.id;
     //res.render('assassins',{row});
     
    res.render('deleteAssassin',{})
  })
  .catch((err)=>{
    next(err);
  });
});  
 
  

  module.exports = router;