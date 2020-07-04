import { Router } from 'express';

import MusicController from '../controllers/MusicController';

const musicRouter = Router();

musicRouter.get('/', MusicController.index);
musicRouter.post('/', MusicController.store);
musicRouter.get('/:id', MusicController.show);
musicRouter.put('/:id', MusicController.update);
musicRouter.delete('/:id', MusicController.destroy);

export default musicRouter;
