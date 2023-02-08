import { NestFactory } from '@nestjs/core';
import * as session from 'express-session';
import * as passport from 'passport';

import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.use(cookieParser);
  app.use(
    session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge : 1000 * 60 * 60 * 24 * 7,
    },
  }));
  // passport.serializeUser(function (user, done) {
  //   done(null, user); // 세션 저장소에 id를 저장
  // });
  
  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(3000);
}
bootstrap();