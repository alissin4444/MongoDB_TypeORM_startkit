import ICreateMusicDTO from '../dtos/ICreateMusicDTO';
import IUpdateMusicDTO from '../dtos/IUpdateMusicDTO';
import Music from '../schemas/Music';

export default interface IMusicRepository {
  find(): Promise<Music[]>;
  create(data: ICreateMusicDTO): Promise<Music>;
  findById(id: string): Promise<Music | undefined>;
  deleteById(id: string): Promise<void>;
  updateById(data: IUpdateMusicDTO): Promise<Music | undefined>;
}
