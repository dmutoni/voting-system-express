import express from 'express';
const router = express.Router();

import { createUser } from '../controllers/user.controller.js'

router.post('/', createUser);

export default router;
