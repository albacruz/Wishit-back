import * as express from 'express';
import { TagController } from '../controllers/tag';

export const tagRouter = express.Router();

const tagController = new TagController();

tagRouter.get('/', tagController.getAll);
tagRouter.get('/:id', tagController.get);
tagRouter.post('/', tagController.add);
tagRouter.delete('/:id', tagController.delete);
tagRouter.put('/:id', tagController.update);
