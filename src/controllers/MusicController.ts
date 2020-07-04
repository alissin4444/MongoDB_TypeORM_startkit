import { Request, Response } from 'express';

import ListMusicService from '../services/ListMusicService';
import CreateMusicService from '../services/CreateMusicService';
import GetMusicByIdService from '../services/GetMusicByIdService';
import DeleteMusicByIdService from '../services/DeleteMusicByIdService';
import UpdateMusicByIdService from '../services/UpdateMusicByIdService';

class MusicController {
  async index(req: Request, res: Response): Promise<Response> {
    const listMusicService = new ListMusicService();
    const musics = await listMusicService.execute();

    return res.json(musics);
  }

  async store(req: Request, res: Response): Promise<Response> {
    const { title, singer, url, type } = await req.body;

    const createMusicService = new CreateMusicService();
    const music = await createMusicService.execute({
      title,
      singer,
      url,
      type,
    });

    return res.status(201).json(music);
  }

  async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const getMusicByIdService = new GetMusicByIdService();
    const music = await getMusicByIdService.execute(id);

    return res.json(music);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { title, singer, url, type } = req.body;

    const getMusicByIdService = new GetMusicByIdService();
    await getMusicByIdService.execute(id);

    const updateMusicByIdService = new UpdateMusicByIdService();
    const music = await updateMusicByIdService.execute({
      id,
      title,
      singer,
      url,
      type,
    });

    return res.json(music);
  }

  async destroy(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const getMusicByIdService = new GetMusicByIdService();
    await getMusicByIdService.execute(id);

    const deleteMusicByIdService = new DeleteMusicByIdService();
    await deleteMusicByIdService.execute(id);

    return res.status(204).send();
  }
}

export default new MusicController();
