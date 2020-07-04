import MusicRepository from '../repositories/MusicRepository';

import AppError from '../errors/AppError';

import Music from '../schemas/Music';

class GetMusicByIdService {
  public async execute(id: string): Promise<Music | undefined> {
    if (!id) {
      throw new AppError('Id must be provided', 400);
    }

    const musicRepository = new MusicRepository();
    const music = await musicRepository.findById(id);

    if (!music) throw new AppError('Music not found', 404);

    return music;
  }
}

export default GetMusicByIdService;
