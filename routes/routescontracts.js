let express = require('express');
let router = express.Router();
let knex = require('../db/knex');

router.get('/contracts', function(req, res,next) {  
  knex('contracts')
  .orderBy('contract_id')
  .then((contracts)=>{
    // res.render('contracts',{
    //   contracts:contracts
    res.render('contractsView/contracts',{contracts});

  })
  .catch((err)=>{
    next(err);
  });
});

router.get('/contracts/:contract_id',(req,res, next)=>{
  knex('contracts').where('contract_id',req.params.contract_id).then((contracts)=>{
    if(!contracts) {
      return next();
    }
    res.render('contractsView/contracts',{contracts});

  })
  .catch((err)=>{
    next(err);
  })
});  

router.get('/newContract', function(req, res) {  
  res.render('contractsView/newContract',{ }); 
})
router.post('/newContract/add',(req, res, next)=>{
  knex('contracts').insert({ target_name : req.body.target_name,
     target_location : req.body.target_location, 
     target_photo : req.body.target_photo || "https://media0.giphy.com/media/3o72F0CRAJ2hguyHSM/giphy.gif",
      target_security: req.body.target_security, 
      client_name :req.body.client_name,
       budget : req.body.budget}, '*')
    .then((contracts)=>{
      res.render('contractsView/contracts',{contracts});
    })
    .catch((err)=>{
      next(err);
    })  
});

router.get('/editContract/:contract_id', function(req, res) {  
  knex('contracts').where('contract_id',req.params.contract_id).then((contracts)=>{
    if(!contracts) {
      return next();
    }
    
  res.render('contractsView/editContract',{contracts}); 
})
.catch((err)=>{
  next(err);
})
});  


router.post('/editContract/:contract_id',(req,res, next)=>{
  knex('contracts').where('contract_id',req.params.contract_id).then((contracts)=>{
    if(!contracts) {
      return next();
    }
     knex('contracts').update({ target_name : req.body.target_name,
       target_location : req.body.target_location, 
       target_photo : req.body.target_photo || "https://media0.giphy.com/media/3o72F0CRAJ2hguyHSM/giphy.gif",
        target_security: req.body.target_security, 
        client_name :req.body.client_name, budget : req.body.budget}, '*').where('contract_id',req.params.contract_id)
     .then((contracts)=>{
      res.render('contractsView/contracts',{contracts}); 
     })
  })
  .catch((err)=>{
    next(err);
  })
});  



router.post('/completeContract/:contract_id',(req, res, next)=>{
  let row;
  knex('contracts')
  .where('contract_id',req.params.contract_id)
  .then((contracts)=>{
    row = contracts;
    row.complete = true;
    return knex('contracts').del().where('contract_id',req.params.contract_id);
  })
  .then(()=>{
     
     delete row.contract_id;
     
     //res.send(row)

     res.render('contractsView/completeContract',{})
  })
  .catch((err)=>{
    next(err);
  });
});

router.get('/activeContracts', function(req, res,next) {  
  knex('contracts')
  .orderBy('contract_id')
  .then((contracts)=>{
    // res.render('contracts',{
    //   contracts:contracts
    res.render('contractsView/activeContracts',{contracts});

  })
  .catch((err)=>{
    next(err);
  });
})

router.get('/successContracts', function(req, res,next) {  
  knex('contracts')
  .orderBy('contract_id')
  .then((contracts)=>{
    // res.render('contracts',{
    //   contracts:contracts
    res.render('contractsView/successContracts',{contracts});

  })
  .catch((err)=>{
    next(err);
  });
})

 
  

  module.exports = router;