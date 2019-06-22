import express from 'express';
import login from './public/login';
import signup from './public/signup';

const router = express.Router();

router.get('/', (req, res) => res.status(200).json({
  message: 'Hello from the Public route',
}));

router.use('/login', login);
router.use('/signup', signup);

export default router;
