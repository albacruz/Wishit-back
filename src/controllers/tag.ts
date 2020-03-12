import * as models from '../models';

export class TagController {
  constructor() {}

  getAll(req, res, next) {
    try {
      models.tag.findAll().then(tags => {
        res.json(tags);
      });
    } catch (e) {
      next(e);
    }
  }

  get(req, res, next) {
    try {
      models.tag
        .findAll({
          where: {
            id: req.params.id
          }
        })
        .then(tags => {
          res.json(tags);
        });
    } catch (e) {
      next(e);
    }
  }

  add(req, res, next) {
    try {
      models.tag.create(req.body).then(tag => {
        res.json({ id: tag.id });
      })
      .catch(function (error) {
        console.log("Error: " + error);
      });
    } catch (e) {
      next(e);
    }
  }

  delete(req, res, next) {
    try {
      models.tag.destroy({ where: { id: req.params.id } }).then(() => {
        res.json({ id: req.params.id });
      });
    } catch (e) {
      next(e);
    }
  }

  update(req, res, next) {
    try {
      models.tag.update(req.body, { where: { id: req.params.id } }).then(() => {
        res.json({ id: req.params.id });
      });
    } catch (e) {
      next(e);
    }
  }
}
