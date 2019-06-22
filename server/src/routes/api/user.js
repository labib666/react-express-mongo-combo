import express from 'express';
import { getUser, getUserId } from '@/controllers/v1/user';

const router = express.Router();

router.get('/', getUser);
router.get('/id', getUserId);

export default router;
