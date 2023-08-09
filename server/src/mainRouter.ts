import { Router } from 'express';
import taskRouter from './tasks/task.routes';

const router: Router = Router();

router.use('/tasks', taskRouter);

export const MainRouter = router;
