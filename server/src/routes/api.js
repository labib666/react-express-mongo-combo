import express from 'express';
import { authenticate } from '../utils/passport';

const router = express.Router();

router.get('/', (req, res) => res.status(200).json({
  message: 'Hello from the API',
}));

router.use(authenticate());

router.get('/user', (req, res) => res.status(200).json({
  message: 'Hello user',
  user: req.user,
}));

export default router;
