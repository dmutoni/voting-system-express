import express from 'express';
const router = express.Router();

import { createUser, getUsers, updateUser, deleteUser, findById } from '../controllers/user.controller.js'

router.post('/', createUser);

router.get('/', getUsers);

router.get('/:id', findById);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

export default router;
