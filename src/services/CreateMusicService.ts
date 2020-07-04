import MusicRepository from '../repositories/MusicRepository';

import Music from '../schemas/Music';

import ICreateMusicDTO from '../dtos/ICreateMusicDTO';

class CreateMusicService {
  public async execute({
    title,
    singer,
    url,
    type,
  }: ICreateMusicDTO): Promise<Music> {
    const musicRepository = new MusicRepository();
    const music = await musicRepository.create({
      title,
      singer,
      url,
      type,
    });

    return music;
  }
}

export default CreateMusicService;
