import * as models from '../models';

export class PresentController {
  constructor() {}

  getAll(req, res, next) {
    try {
      models.present.findAll().then(presents => {
        res.json(presents);
      });
    } catch (e) {
      next(e);
    }
  }

  get(req, res, next) {
    try {
      models.present
        .findAll({
          where: {
            id: req.params.id
          }
        })
        .then(presents => {
          res.json(presents);
        });
    } catch (e) {
      next(e);
    }
  }

  add(req, res, next) {
    try {
      models.present.create(req.body).then(present => {
        res.json({ id: present.id });
      });
    } catch (e) {
      next(e);
    }
  }

  delete(req, res, next) {
    try {
      models.present.destroy({ where: { id: req.params.id } }).then(() => {
        res.json({ id: req.params.id });
      });
    } catch (e) {
      next(e);
    }
  }

  update(req, res, next) {
    try {
      models.present
        .update(req.body, { where: { id: req.params.id } })
        .then(() => {
          res.json({ id: req.params.id });
        });
    } catch (e) {
      next(e);
    }
  }
}
