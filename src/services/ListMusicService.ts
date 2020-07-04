import MusicRepository from '../repositories/MusicRepository';

import Music from '../schemas/Music';

class ListMusicService {
  public async execute(): Promise<Music[]> {
    const musicRepository = new MusicRepository();
    const musics = await musicRepository.find();

    return musics;
  }
}

export default ListMusicService;
