import * as models from '../models';

export class FriendshipController {
  constructor() {}

  getAll(req, res, next) {
    try {
      models.friendship.findAll().then(friendships => {
        res.json(friendships);
      });
    } catch (e) {
      next(e);
    }
  }

  get(req, res, next) {
    try {
      models.friendship
        .findAll({
          where: {
            id: req.params.id
          }
        })
        .then(friendships => {
          res.json(friendships);
        });
    } catch (e) {
      next(e);
    }
  }

  add(req, res, next) {
    try {
      models.friendship.create(req.body).then(friendship => {
        res.json({ id: friendship.id });
      });
    } catch (e) {
      next(e);
    }
  }

  delete(req, res, next) {
    try {
      models.friendship.destroy({ where: { id: req.params.id } }).then(() => {
        res.json({ id: req.params.id });
      });
    } catch (e) {
      next(e);
    }
  }

  update(req, res, next) {
    try {
      models.friendship
        .update(req.body, { where: { id: req.params.id } })
        .then(() => {
          res.json({ id: req.params.id });
        });
    } catch (e) {
      next(e);
    }
  }
}
