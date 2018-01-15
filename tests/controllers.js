const supertest = require('supertest');
const app = require('../app');

const server = app.listen();
const request = supertest.agent(server);

describe('GET /api/sample', () => {
  it('should be secure', (done) => {
    request
      .get('/api/docs')
      .set('Accept', 'application/json')
      .expect(401)
      .end((err) => {
        if (err) return done(err);

        return done();
      });
  });

  it('should show sample JSON', (done) => {
    request
      .get('/api/sample')
      .set('Accept', 'application/json')
      .expect(200, {
        success: true
      })
      .end((err) => {
        if (err) return done(err);

        return done();
      });
  });
});
