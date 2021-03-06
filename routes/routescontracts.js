let express = require('express');
let router = express.Router();
let knex = require('../db/knex');

//rendering the contract page 
router.get('/contracts', function(req, res,next) {  
  knex('contracts')
  .orderBy('contract_id')
  .then((contracts)=>{
    // res.render('contracts',{
    //   contracts:contracts
    res.render('contractsView/contracts',{contracts});

  })
  .catch((err)=>{
    res.status(500).json({
      status: 'error',
      data: err
    });
  });
});

//rendering the contract by id
router.get('/one_contract/:contract_id',(req,res, next)=>{
  knex('contracts').where('contract_id',req.params.contract_id).then((contracts)=>{
    if(!contracts) {
      return next();
    }
    res.render('contractsView/one_contract',{contracts});

  })
  .catch((err)=>{
    next(err);
  })
});  

// rendering the new contract page
router.get('/newContract', function(req, res) {  
  res.render('contractsView/newContract',{ }); 
})

//update the new contract into the 
router.post('/newContract/add',(req, res, next)=>{
  knex('contracts').insert({ target_name : req.body.target_name,
     target_location : req.body.target_location, 
     target_photo : req.body.target_photo || "https://media0.giphy.com/media/3o72F0CRAJ2hguyHSM/giphy.gif",
      target_security: req.body.target_security, 
      client_name :req.body.client_name,
       budget : req.body.budget,
      complete:req.body.complete}, '*')
    .then(()=>{
      res.redirect(302,'/contracts');
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


router.patch('/editContract/:contract_id',(req,res, next)=>{
  knex('contracts').where('contract_id',req.params.contract_id).then((contracts)=>{
    if(!contracts) {
      return next();
    }
     knex('contracts').update({ target_name : req.body.target_name,
       target_location : req.body.target_location, 
       target_photo : req.body.target_photo || "https://media0.giphy.com/media/3o72F0CRAJ2hguyHSM/giphy.gif",
        target_security: req.body.target_security, 
        client_name :req.body.client_name, budget : req.body.budget, complete:req.body.complete}, '*').where('contract_id',req.params.contract_id)
     .then((contracts)=>{
      res.render('contractsView/contracts',{contracts}); 
     })
  })
  .catch((err)=>{
    next(err);
  })
});  



router.delete('/deleteContract/:contract_id',(req, res, next)=>{
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

     res.render('contractsView/deleteContract',{})
  })
  .catch((err)=>{
    next(err);
  });
});

router.get('/completeContract/:contract_id',(req, res, next)=>{
  
  // knex('contracts')
  // .where('contract_id',req.params.contract_id)
  // .then((contracts)=>{
  //   if(!contracts) {
  //     return next();
  //   }
  
    knex('contracts').update({complete:true}).where('contract_id',req.params.contract_id)
    .then((contracts)=>{
     
     res.render('contractsView/completeContract',{contracts})
    })
  // })
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

router.get('/budget', function(req, res,next) {  
  knex('contracts')
  .orderBy('budget')
  .then((contracts)=>{  
   
    res.render('contractsView/contracts',{contracts});

  })
  .catch((err)=>{
    next(err);
  });
});

router.get('/target_security', function(req, res,next) {  
  knex('contracts')
  .orderBy('target_security')
  .then((contracts)=>{  
   
    res.render('contractsView/contracts',{contracts});

  })
  .catch((err)=>{
    next(err);
  });
});

router.get('/assignContract/:contract_id',(req,res, next)=>{
  
  knex('contracts')
  .leftJoin('assassins','assassins.full_name','contracts.assigned_person')
  .where('contract_id',req.params.contract_id)
  .then((contracts)=>{
    if(!contracts) {
      return next();
    }

    res.render('contractsView/assignContract',{contracts});

  })
  .catch((err)=>{
    next(err);
  })
});  

router.post('/assignContract/:contract_id/add',(req, res, next)=>{
  knex('contracts')
  .where('contract_id',req.params.contract_id)
  .then((contracts)=>{
    if(!contracts) {
      return next();
    }
    console.log(contracts);
  knex('contracts')
  .insert({ assigned_person:req.body.assigned_person}, '*')
    .then(()=>{
      res.render('contractsView/assignContract',{contracts});
    })
  })
    .catch((err)=>{
      next(err);
    })  
});

// router.post('/search',(req,res, next)=>{
//   console.log(req.body.keyword);
//   knex('contracts').where('target_name',req.body.target_name).then((contracts)=>{
//     if(!contracts) {
//       return next();
//     }
//     res.render('contractsView/contracts',{contracts});

//   })
//   .catch((err)=>{
//     next(err);
//   })
// });  

  

  module.exports = router;