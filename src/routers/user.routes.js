import express from 'express';
const router = express.Router();

import { createUser, getUsers, updateUser } from '../controllers/user.controller.js'

router.post('/', createUser);

router.get('/', getUsers) ;

router.put('/:id', updateUser) ;

export default router;
