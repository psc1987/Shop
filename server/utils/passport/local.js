const LocalStrategy = require('passport-local').Strategy;

const { users } = require('../../models');

module.exports = new LocalStrategy({
    usernameField: 'uid',
    passwordField: 'password',
    passReqToCallback: true
}, function(req, userid, password, done) {
    if (!userid || !password) return done(null, false); // 둘중 하나라도 비어있다면 세션 생성x

    users.findOne({
        where: { uid: userid }, // id를 디비에서 조회
        raw: true
    }).then(result => {
        if (!result) { done(null, false) } else {
            if (result.password == password) { // 그 후 패스워드를 검사
                done(null, {
                    uid: result['uid'],
                    id: result['id'],
                    status: result['status']
                });
            } else {
                done(null, false)
            }
        }
    });
});