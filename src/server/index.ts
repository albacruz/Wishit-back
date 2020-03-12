import * as express from 'express';
import { userRouter } from '../routers/user';
import { presentRouter } from '../routers/present';
import { friendshipRouter } from '../routers/friendship';
import { tagRouter } from '../routers/tag';
import { loginRouter } from '../routers/login';

const app = express();
app.use(express.json({ limit: '5mb' }));

// enable corse for all origins
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Expose-Headers', 'x-total-count');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
  res.header('Access-Control-Allow-Headers', 'Content-Type,authorization');

  next();
});

// adding routes
app.use('/users', userRouter);
app.use('/presents', presentRouter);
app.use('/friendships', friendshipRouter);
app.use('/tags', tagRouter);
app.use('/login', loginRouter);

const db = require('../models');

app.listen(3000, () => {
  console.log('Listening on port 3000!');
  db.sequelize.sync();
});
