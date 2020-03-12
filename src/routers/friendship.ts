import * as express from 'express';
import { FriendshipController } from '../controllers/friendship';

export const friendshipRouter = express.Router();

const friendshipController = new FriendshipController();

friendshipRouter.get('/', friendshipController.getAll);
friendshipRouter.get('/:id', friendshipController.get);
friendshipRouter.post('/', friendshipController.add);
friendshipRouter.delete('/:id', friendshipController.delete);
friendshipRouter.put('/:id', friendshipController.update);
