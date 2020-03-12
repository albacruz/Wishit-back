import * as express from 'express';
import { LoginController } from '../controllers/login';

export const loginRouter = express.Router();
const loginController = new LoginController();

loginRouter.post('/', loginController.login);
