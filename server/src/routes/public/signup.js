import { Router } from 'express';
import validateSignUp from '@/controllers/public/signup';

const router = Router();

/* Post request for signup */
router.post('/', validateSignUp);

export default router;
