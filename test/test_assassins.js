process.env.NODE_ENV = 'test';
const request = require('supertest');
const expect = require('chai').expect;
const app = require('../server');
const knex = require('../db/knex');

    beforeEach(function(done) {
      knex.migrate.rollback()
      .then(function() {
        knex.migrate.latest()
        .then(function() {
          knex.seed.run()
          .then(function() {
            done();
          });
        });
      });
    });
  
    
describe('GET /assassins', () => {
	it('should return list of assassins', done => {
		request(app)
			.get('/assassins')
			.expect('Content-Type', /text/)
            .expect(200, done);
	});
});
describe('GET /one_assassin/3', () => {
    it('should return one assassin', done => {
        request(app)
            .get('/one_assassin/3')
            .expect('Content-Type', `application/json; charset=utf-8`)
            .expect(200)
            // .expect((res)=>{
            //   return res.text.include('Jason Bourne')
            // })
			.end((err,res)=>{
                //res.body.should.be.a('object');
                res.body.should.have.propert('full_name');
                res.body.full_name.should.equal('Jason Bourne');
                res.body.explicit.should.equal(false);
                done();
            });
	});
});

describe('POST /newAssassin/add', () => {
    it('should add a new assassin into the table',done=>{
        request(app)
            .post('/newAssassin/add')
            .send({full_name:'boose'})
			//.expect('Content-Type', /text/)
            .expect(302, done);
    })
});

describe('PATCH /editAssassins/:id', () => {
    it('should return updated assassin ',done=>{
        request(app)
			.get('/assassins')
			.expect('Content-Type', /text/)
            .expect(200, done);
    })
});

// xdescribe('DELETE /sloths/:id', () => {
// });

