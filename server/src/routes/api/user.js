import express from 'express';
import { getUser, logout } from '@/controllers/api/user';

const router = express.Router();

router.get('/', getUser);
router.post('/logout', logout);

export default router;
