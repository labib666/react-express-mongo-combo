import express from 'express';
import apiRouter from './api';
import publicRouter from './public';

const router = express.Router();

router.get('/', (req, res) => res.status(200).json({
  message: 'Hello from the Server',
}));

router.use('/api', apiRouter);
router.use('/public', publicRouter);

export default router;
