import express, { RequestHandler } from 'express';
import request from 'supertest';

import { poweredBy, POWERED_BY } from '../src/index';

const newApp = (useFunction?: RequestHandler) => {
  const app = express();

  if (useFunction) {
    app.use(useFunction);
  }

  app.use('/', (_request, response) => {
    response.json({
      status: 'ok',
    });
  });
  return app;
};

describe('Custom `X-Powered-By`', () => {
  test('Default', async () => {
    const app = newApp();

    const response = await request(app).get('/');

    expect(response.headers[POWERED_BY]).toMatch('Express');
  });

  test('Change to `ASP.net`', async () => {
    const value = 'ASP.net';
    const app = newApp(poweredBy(value));

    const response = await request(app).get('/');

    expect(response.headers[POWERED_BY]).toMatch(value);
  });

  test('Delete `x-powered-by`', async () => {
    const app = newApp(poweredBy());

    const response = await request(app).get('/');

    expect(response.headers).not.toHaveProperty(POWERED_BY);
  });
});
