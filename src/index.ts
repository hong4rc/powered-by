import {
  NextFunction, Request, RequestHandler, Response,
} from 'express';

export const POWERED_BY = 'x-powered-by';

export const poweredBy = (value?: string): RequestHandler => (
  _request: Request, response: Response, next: NextFunction,
) => {
  if (value && typeof value === 'string') {
    response.setHeader(POWERED_BY, value);
  } else {
    response.removeHeader(POWERED_BY);
  }
  next();
};
