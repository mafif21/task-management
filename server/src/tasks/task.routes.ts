import { Request, Response, Router } from 'express';

const taskRouter: Router = Router();

taskRouter.get('/', (req: Request, res: Response) => {
  res.send('hello world');
});

export default taskRouter;
