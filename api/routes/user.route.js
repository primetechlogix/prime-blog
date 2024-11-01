import express from 'express'
import { test } from '../controllers/user.controller.js';

const router = express.Router();

//To test api working or not
//req we send in response we recieve
router.get('/test',test);

  //to use in main index.js file we export and import there
  export default router
