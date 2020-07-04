import MusicRepository from '../repositories/MusicRepository';

import Music from '../schemas/Music';

import IUpdateMusicDTO from '../dtos/IUpdateMusicDTO';

class UpdateMusicByIdService {
  public async execute(data: IUpdateMusicDTO): Promise<Music | undefined> {
    const { id, url, type, title, singer } = data;

    const musicRepository = new MusicRepository();
    const music = await musicRepository.updateById({
      id,
      singer,
      title,
      type,
      url,
    });

    return music;
  }
}

export default UpdateMusicByIdService;
