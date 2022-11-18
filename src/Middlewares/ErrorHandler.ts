import { NextFunction, Request, Response } from 'express';
import ThrowException from './exceptions/ThrowException';

class ErrorHandler {
  public static handle(
    error: Error,
    _req: Request,
    res: Response,
    _next: NextFunction,
  ) {
    const { status = 500, message } = error as ThrowException;
    return res.status(status).json({ message });
  }
}

export default ErrorHandler;