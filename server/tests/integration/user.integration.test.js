const request = require('supertest');
const app = require('../../src/index');
const testDB = require('../setupTestDB');
const User = require('../../src/models/User');

beforeAll(async () => {
  await testDB.connect();
});

afterAll(async () => {
  await testDB.closeDatabase();
});

afterEach(async () => {
  await testDB.clearDatabase();
});

describe('User API - integration', () => {
  it('creates a user (POST /api/users)', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({ name: 'David', email: 'd@example.com' });

    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);

    const user = await User.findOne({ email: 'd@example.com' });
    expect(user).not.toBeNull();
    expect(user.name).toBe('David');
  });

  it('returns 401 for login when user not found', async () => {
    const res = await request(app).post('/api/auth/login').send({ email: 'not@there.com' });
    expect(res.status).toBe(401);
    expect(res.body.success).toBe(false);
  });
});
