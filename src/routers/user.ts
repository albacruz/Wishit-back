import * as express from 'express';
import { UserController } from '../controllers/user';
import { TagsToUserController } from '../controllers/tag_to_user';
import { UserPresentController } from '../controllers/user_present';

export const userRouter = express.Router();

const userController = new UserController();
const tagsToUserController = new TagsToUserController();
const userPresentController = new UserPresentController();

userRouter.get('/', userController.getAll);
userRouter.get('/:id', userController.get);
userRouter.post('/', userController.add);
userRouter.delete('/:id', userController.delete);
userRouter.put('/:id', userController.update);

//Tags asigned to users
userRouter.get('/tags', tagsToUserController.getAll);
userRouter.get('/tags/:id_tag', tagsToUserController.get);
userRouter.get('/:id_user/tags', tagsToUserController.getUserTag);
userRouter.get('/:id_user/prettytags', tagsToUserController.getUserPrettyTags);
userRouter.post('/tags', tagsToUserController.add);
userRouter.delete('/:id_user/tags/:id_tag', tagsToUserController.delete);
userRouter.put('/:id_user/tags/:id_tag', tagsToUserController.update);

// Valoraciones de usuarios sobre regalos
userRouter.get('/:id_user/presents', userPresentController.get);
userRouter.post('/:id_user/presents/:id_present', userPresentController.add);
userRouter.delete('/:id_user/presents', userPresentController.deleteAll);
userRouter.delete('/:id_user/presents/:id_present', userPresentController.delete);
userRouter.put('/:id_user/presents/:id_present', userPresentController.update);