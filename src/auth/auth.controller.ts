import { Controller, Get, Post, Req, Res, Session, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import {google,Auth} from 'googleapis';
import { NaverAuthGuard } from './naver.guard';
import { KakaoAuthGuard } from './kakao.guard';
import { GoogleAuthGuard } from './google.guard';

@Controller('api/auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    @Get('/google')
    @UseGuards(GoogleAuthGuard)
    async googleAuth(@Req() req: any) {}
  
    @Get('/google/callback')
    @UseGuards(GoogleAuthGuard)
    googleAuthRedirect(@Req() req : any, @Session() session:any) {
        console.log("session",session)
      return req.user;
    }

    @Get('/kakao')
    @UseGuards(KakaoAuthGuard)
    async kakaoAuth(@Req() req: any) {}
  
    @Get('/kakao/callback')
    @UseGuards(KakaoAuthGuard)
    kakaoAuthRedirect(@Req() req : any,@Session() session:any) {
        console.log("session",session)
      return req.user;
    }

    @Get('/naver')
    @UseGuards(NaverAuthGuard)
    async naverAuth(@Req() req: any) {}
  
    @Get('/naver/callback')
    @UseGuards(NaverAuthGuard)
    naverAuthRedirect(@Req() req : any,@Session() session:any) {
        console.log("session",session)
      return req.user;
    }
}

