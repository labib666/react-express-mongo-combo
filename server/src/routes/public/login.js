import { Router } from 'express';
import validateLogin from '@/controllers/public/login';

const router = Router();

router.post('/', validateLogin);

export default router;
