import express from 'express';
import { authenticate } from '@/utils/passport';
import user from './api/user';

const router = express.Router();

router.get('/', (req, res) => res.status(200).json({
  message: 'Hello from the API',
}));

router.use(authenticate());

router.use('/user', user);

export default router;
