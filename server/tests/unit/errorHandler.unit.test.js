const { globalErrorHandler } = require('../../src/middleware/errorHandler');

describe('globalErrorHandler', () => {
  it('responds with error JSON', () => {
    const err = new Error('boom');
    err.status = 418;
    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    globalErrorHandler(err, req, res, () => {});

    expect(res.status).toHaveBeenCalledWith(418);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({ success: false, message: 'boom' }));
  });
});
