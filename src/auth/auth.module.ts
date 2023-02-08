import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { GoogleStrategy } from './google.strategy';
import { KakaoStrategy } from './kakao.strategy';
import { NaverStrategy } from './naver.strategy';
import { SessionSerializer } from './session.serializer';

@Module({
  imports: [PassportModule.register({session:true})],
  controllers: [AuthController],
  providers: [ AuthService,GoogleStrategy,KakaoStrategy,NaverStrategy,SessionSerializer],
})
export class AuthModule {}
