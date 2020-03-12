import * as models from '../models';
import { Sequelize } from "sequelize";

export class TagsToUserController {
  constructor() {}

  getAll(req, res, next) {
    try {
      models.tag_to_user.findAll().then(tag_to_user => {
        res.json(tag_to_user);
      }).catch(function(err){
        console.log(err);
      });
    } catch (e) {
      next(e);
    }
  }

  get(req, res, next) {
    try {
      models.tag_to_user
        .findAll({ where: { id_tag: req.params.id_tag }})
        .then(tag_to_user => { res.json(tag_to_user);});
    } catch (e) {
      next(e);
    }
  }

  getUserTag(req, res, next) {
    try {
      models.tag_to_user
        .findAll({ where: { id_user: req.params.id_user }})
        .then(tag_to_user => { res.json(tag_to_user);});
    } catch (e) {
      next(e);
    }
  }

  getUserPrettyTags(req, res, next) {
    try {
      models.tag_to_user
        .findAll({
          where: { id_user: req.params.id_user },
          include: [
            {
              attributes:['tag'],
              model: models.tag,
              where: { id: Sequelize.col('tag_to_user.id_tag') }
            }
          ]
        })
        .then(tag_to_users => {
          const tags = [];
          tag_to_users.forEach(function(element) {
            tags.push(element.get('tag'));
          });
          res.json(tags);
        });
    } catch (e) {
      next(e);
    }
  }

  add(req, res, next) {
    try {
        models.tag_to_user.create(req.body).then(tag_to_user => {
            res.json(tag_to_user);
      }).catch(function(err){
        console.log(err);
      });
    } catch (e) {
      next(e);
    }
  }

  delete(req, res, next) {
    try {
      models.tag_to_user.destroy({ where: { id_user: req.params.id_user, id_tag: req.params.id_tag } }).then(() => {
        res.json({ id: req.params.id });
      });
    } catch (e) {
      next(e);
    }
  }

  update(req, res, next) {
    try {
      models.tag_to_user
        .update(req.body, { where: { id_user: req.params.id_user, id_tag: req.params.id_tag } })
        .then(() => {
          res.json({ id: req.params.id });
        });
    } catch (e) {
      next(e);
    }
  }
}
