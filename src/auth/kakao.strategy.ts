import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-kakao";
import axios from "axios";
const REST_API_KEY = process.env.KAKAO_REST_ID;
const REDIRECT_URI = process.env.KAKAO_REDIRECT_URI;
@Injectable()
export class KakaoStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
            clientID: process.env.KAKAO_REST_ID,
            callbackURL: '/api/auth/kakao/callback',
        });
    }
    async validate(accessToken: string, refreshToken: string, profile: any, done: Function){

        // console.log(accessToken);
        // console.log(refreshToken);
        const { id, username, displayName, _json } = profile;
        // console.log(profile)
        const user = {
            provider: 'kakao',
            providerId: id,
            name: displayName,
            email: _json.kakao_account.email,
            picture: _json.properties.profile_image,
        };
        try{
            console.log(user)
           return  done(null, user);
        }catch(err){
            console.log(err)
            // done(err, false);
        }
        return user;
    }
}