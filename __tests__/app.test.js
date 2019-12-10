const request = require('supertest');
const app = require('../lib/app');

describe('createResponse', () => {
  it('creates a GET route at the path / that responds with hi', () => {
    return request(app)
      .get('/')
      .then(response => {
        expect(response.text).toEqual('hi');
        expect(response.status).toEqual(200);
      });
  });

  it('POSTs the requested text at the path /echo', () => {
    return request(app)
      .post('/echo')
      .send('I AM A ROBOT')
      .then(response => {
        expect(response.text).toEqual('I AM A ROBOT');
        expect(response.status).toEqual(200);
      });
  });

  it('POSTs the requested text at the path /echo', () => {
    return request(app)
      .post('/echo')
      .send('I AM A ROBOT')
      .then(response => {
        expect(response.text).toEqual('I AM A ROBOT');
        expect(response.status).toEqual(200);
      });
  });
});
