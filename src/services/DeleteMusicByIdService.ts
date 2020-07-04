import MusicRepository from '../repositories/MusicRepository';

class DeleteMusicByIdService {
  public async execute(id: string): Promise<void> {
    const musicRepository = new MusicRepository();
    await musicRepository.deleteById(id);
  }
}

export default DeleteMusicByIdService;
