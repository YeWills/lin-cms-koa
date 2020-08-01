import { MusicModel } from '../model/music';
import { NotFound } from 'lin-mizar';
class Music {
  static async getMusicList () {
    const res = await MusicModel.findAll();
    return res;
  }
  static async editMusic (id, v) {
    const music = await MusicModel.findByPk(id);
    if (!music) {
      throw new NotFound();
    }
    const tempmusic = await music.update({ ...v });
    return tempmusic;
  }
  static async addMusic (v) {
    const add = await MusicModel.create(v);
    return add;
  }
  static async deleteMusicById (id) {
    const del = MusicModel.destroy({
      where: { id }
    });
    return del;
  }
}
export { Music as MusicDao };