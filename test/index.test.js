/* eslint-disable no-undef */
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../server/src/app';

chai.use(chaiHttp);

describe('HOMEPAGE', () => {
  it('should respond with welcome title', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('should respond with error for wrong route', (done) => {
    chai.request(app)
      .get('/thisIsNotARoute')
      .end((err, res) => {
        expect(res).to.have.status(404);
        const { status, error } = res.body;
        expect(status).to.equal(404);
        expect(error).to.equal('Sorry, the page you tried cannot be found');
        done();
      });
  });
});

export {
  chai,
  expect,
  app,
};
