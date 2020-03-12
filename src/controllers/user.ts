import * as models from '../models';

export class UserController {
  constructor() {}

  getAll(req, res, next) {
    try {
      models.user.findAll({attributes: ['id','nickname', 'birth_date', 'biography', 'image']}).then(users => {
        res.json(users);
      }).catch(function(err){
        console.log(err);
      });
    } catch (e) {
      next(e);
    }
  }

  get(req, res, next) {
    try {
      models.user
        .findAll({
          where: {
            id: req.params.id
          }
        })
        .then(users => {
          res.json(users);
        });
    } catch (e) {
      next(e);
    }
  }

  add(req, res, next) {
    try {
      models.user.create(req.body).then(user => {
        res.json({ id: user.id });
      })
      .catch(function(err){
        console.log(err);
      });
    } catch (e) {
      next(e);
    }
  }

  delete(req, res, next) {
    try {
      models.user.destroy({ where: { id: req.params.id } }).then(() => {
        res.json({ id: req.params.id });
      });
    } catch (e) {
      next(e);
    }
  }

  update(req, res, next) {
    try {
      models.user
        .update(req.body, { where: { id: req.params.id } })
        .then(() => {
          res.json({ id: req.params.id });
        });
    } catch (e) {
      next(e);
    }
  }
}
