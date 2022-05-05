import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    return { msg: 'Sign Up' };
  }

  signin() {
    return { msg: 'Sign In' };
  }
}
