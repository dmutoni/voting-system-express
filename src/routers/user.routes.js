import express from 'express';
const router = express.Router({
    mergeParams: true
});

import {
    protect,
    authorize
} from '../middlewares/auth.middleware.js';

import {
    createUser,
    getUsers,
    updateUser,
    deleteUser,
    findById,
    vote
} from '../controllers/user.controller.js'

router.post("/", [protect, authorize('Standard')],createUser);

router.route('/').get(getUsers);

router.route('/:id').post(vote);

router.route('/:id').get(findById);

router.route('/:id').put(updateUser);

router.route('/:id').delete(deleteUser);

export default router;