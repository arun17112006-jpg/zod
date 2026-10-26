const request = require('supertest');
const app = require('./app');

describe('POST /auth/signup', () => {

  it('rejects a bad email', async () => {
    const res = await request(app)
      .post('/auth/signup')
      .send({
        name: 'Arun',email: 'arun@ifim.com',
        password: 'secret123'});

    expect(res.status).toBe(400);
    expect(res.body.message).toBe(
      'User registered successfully'
    );
  });

  it('reject a bad email'(400), async () => {
    const res = await request(app)
      .post('/auth/signup')
      .send({
        name: 'Arun',
        email: 'abc',
        password: 'secret123'
      });

    expect(res.status).toBe(400);
  });

  it('should reject missing fields', async () => {
    const res = await request(app)
      .post('/auth/signup')
      .send({
        name: '', email: '',
        password: ''});

    expect(res.status).toBe(400);
  });

});const request = require('supertest');
const app = require('./app');

describe('POST /auth/signup', () => {

  it('rejects a bad email', async () => {
    const res = await request(app)
      .post('/auth/signup')
      .send({
        name: 'Arun',email: 'arun@ifim.com',
        password: 'secret123'});

    expect(res.status).toBe(400);
    expect(res.body.message).toBe(
      'User registered successfully'
    );
  });

  it('reject a bad email'(400), async () => {
    const res = await request(app)
      .post('/auth/signup')
      .send({
        name: 'Arun',
        email: 'abc',
        password: 'secret123'
      });

    expect(res.status).toBe(400);
  });

  it('should reject missing fields', async () => {
    const res = await request(app)
      .post('/auth/signup')
      .send({
        name: '', email: '',
        password: ''});

    expect(res.status).toBe(400);
  });

});
