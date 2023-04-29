import express from 'express';

const Router = express.Router();

import { createUser } from '../model/User.model.js';

Router.all('', (req, res, next) => {
  console.log('from user router');

  next();
});

Router.post('/', async (req, res) => {
  console.log(req.body);
  try {
    const result = await createUser(req.body);

    if (result?._id) {
      return res.json({
        status: 'success',
        message: 'New user has been created successfully!',
      });
    }
    res.json({
      status: 'error',
      message: 'Unable to create new user!',
    });
  } catch (error) {
    let msg = 'Error, unable to create new user';
    console.log(error.message);
    if (error.message.includes('E11000 duplicate key error collection')) {
      msg = 'This email has already been used by another user.';
    }
    res.json({
      status: 'error',
      message: msg,
    });
  }
});

export default Router;
