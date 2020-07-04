import { getMongoRepository, MongoRepository } from 'typeorm';

import IMusicRepository from './IMusicRepository';
import ICreateMusicDTO from '../dtos/ICreateMusicDTO';
import IUpdateMusicDTO from '../dtos/IUpdateMusicDTO';

import Music from '../schemas/Music';

class MusicRepository implements IMusicRepository {
  private ormRepository: MongoRepository<Music>;

  constructor() {
    this.ormRepository = getMongoRepository(Music);
  }

  public async find(): Promise<Music[]> {
    const musics = await this.ormRepository.find();

    return musics;
  }

  public async create({
    title,
    singer,
    url,
    type,
  }: ICreateMusicDTO): Promise<Music> {
    const music = await this.ormRepository.create({
      title,
      singer,
      url,
      type,
    });

    await this.ormRepository.save(music);

    return music;
  }

  public async findById(id: string): Promise<Music | undefined> {
    const music = await this.ormRepository.findOne(id);

    return music;
  }

  public async updateById(data: IUpdateMusicDTO): Promise<Music | undefined> {
    const { title, singer, type, url, id } = data;

    const music = await this.findById(id);

    if (music) {
      music.title = title;
      music.singer = singer;
      music.type = type;
      music.url = url;

      await this.ormRepository.save(music);
    }

    return music;
  }

  public async deleteById(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}

export default MusicRepository;
