import * as express from 'express';
import { PresentController } from '../controllers/present';

export const presentRouter = express.Router();

const presentController = new PresentController();

presentRouter.get('/', presentController.getAll);
presentRouter.get('/:id', presentController.get);
presentRouter.post('/', presentController.add);
presentRouter.delete('/:id', presentController.delete);
presentRouter.put('/:id', presentController.update);
