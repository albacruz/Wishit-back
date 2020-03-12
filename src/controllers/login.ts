import * as models from '../models';

export class LoginController {
  constructor() {}

  login(req, res, next) {
    try {
      console.log("Hola");
      models.user
        .findOne({
          where: {
            nickname: req.body.nickname
          },
          attributes: ['id', 'nickname', 'biography', 'password', 'birth_date', 'image']
        })
        .then(user => {
            //user.get();
            if (user.get('password') === req.body.password) {
              // Generamos Token
              res.json({ ok: true, token: 'token', user });
            }else {
              res.json({ ok: false });
            }
        }).catch(function(err){
          console.log(err);
          //res.json({ ok: false });
        });
      
    
    } catch (e) {
      next(e);
    }
    //res.json({ ok: false });
  }
}
