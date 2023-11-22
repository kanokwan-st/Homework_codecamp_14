//เช็คว่า token ที่เข้ามาเป็นของจริงมั้ย
const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt'); //เช็คtoken, วันหมดอายุ, ...
const db = require('../../models');

const option = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), //เอาtokenมาจากไหน
    secretOrKey: process.env.SECRET_OR_KEY
};

const JWTStrategy = new Strategy(option, async (payload, done) => {
    const targetUser = await db.User.findOne({ where: { id: payload.id } }); //เช็คว่า idที่ส่งมา มีในdatabaseมั้ย

    if (targetUser) {
        done(null, targetUser);
    } else {
        done(null,false);
    }
});  

passport.use("jwt", JWTStrategy);