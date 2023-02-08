import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-naver";
import axios from "axios";

@Injectable()
export class NaverStrategy extends PassportStrategy(Strategy,'naver'){
    constructor(){
        super({
            clientID: process.env.NAVER_CLIENT_ID,
            clientSecret: process.env.NAVER_SECRET,
            callbackURL: '/api/auth/naver/callback',
        });
    }
    async validate(accessToken: string, refreshToken: string, profile: any, done: any){

        const { id, username, displayName, _json } = profile;
        const user = {
            provider: 'naver',
            providerId: id,
            name: displayName,
            email: _json.email,
            picture: _json.profile_image,
        }
        // return user;
        return done(null, user)
    }
}