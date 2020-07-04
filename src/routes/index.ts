import { Router } from 'express';

import musicRouter from './music.routes';

const routes = Router();

routes.use('/musics', musicRouter);

export default routes;
