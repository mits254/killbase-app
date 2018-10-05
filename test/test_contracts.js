// process.env.NODE_ENV = 'test';
// const request = require('supertest');
// const expect = require('chai').expect;
// const app = require('../server');
// const knex = require('../db/knex');

// beforeEach(function(done) {
//     knex.migrate.rollback()
//     .then(function() {
//       knex.migrate.latest()
//       .then(function() {
//         return knex.seed.run()
//         .then(function() {
//           done();
//         });
//       });
//     });
//   });

//   afterEach(function(done) {
//     knex.migrate.rollback()
//     .then(function() {
//       done();
//     });
//   });

// describe('GET /contracts', () => {
// 	it('should return list of contracts', done => {
// 		request(app)
// 			.get('/contracts')
// 			.expect('Content-Type', /text/)
// 			.expect(200, done);
// 	});
// });
// describe('GET /one_contract/:contract_id', () => {
//     it('should return one contract', done => {
//         request(app)
//             .get('/one_contract/:contract_id')
// 			.expect('Content-Type', `application/json; charset=utf-8`)
// 			.end(done);
// 	});
// });

// describe('POST /newContract/add', () => {
//     it('should return new contract', done => {
//         request(app)
//             .get('/contracts')
// 			.expect('Content-Type', `application/json; charset=utf-8`)
// 			.end(done);
// 	});
// });

// xdescribe('PUT /sloths/:id', () => {
// });

// xdescribe('DELETE /sloths/:id', () => {
// });