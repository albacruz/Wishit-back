import * as models from '../models';

export class UserPresentController {
  constructor() {}

  get(req, res, next) {
    try {
      models.user_present
        .findAll({
          where: {
            id_user: req.params.id_user
          }
        })
        .then(user_presents => {
          res.json(user_presents);
        });
    } catch (e) {
      next(e);
    }
  }

  add(req, res, next) {
    try {
      const presentValuation = {
        ...req.body,
        id_user: req.params.id_user,
        id_present: req.params.id_present,
        valuation_date: Date()
      };
      console.log(presentValuation);
      models.user_present.create(presentValuation).then(user_present => {
        res.json(user_present);
      });
    } catch (e) {
      next(e);
    }
  }

  deleteAll(req, res, next) {
    try {
      models.user_present
        .destroy({ where: { id_user: req.params.id_user } })
        .then(presents => {
          res.json(presents);
        });
    } catch (e) {
      next(e);
    }
  }

  delete(req, res, next) {
    try {
      models.user_present
        .destroy({
          where: {
            id_user: req.params.id_user,
            id_present: req.params.id_present
          }
        })
        .then(present => {
          res.json(present);
        });
    } catch (e) {
      next(e);
    }
  }

  update(req, res, next) {
    try {
      const presentValuation = {
        ...req.body,
        id_user: req.params.id_user,
        id_present: req.params.id_present,
        valuation_date: Date()
      };
      models.user_present
        .update(presentValuation, {
          where: {
            id_user: req.params.id_user,
            id_present: req.params.id_present
          }
        })
        .then(present => {
          res.json(present);
        });
    } catch (e) {
      next(e);
    }
  }
}
