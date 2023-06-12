import { BaseException } from './base.exception';

export class AuthFailedException extends BaseException {
  constructor(message: string) {
    super('AUTH_FAILED', message);
  }
}
