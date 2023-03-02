import Watches from '../models/Watches.js';

class WatchesService {
  async get(query) {
    const { search, limit = 10, page = 1 } = query;

    const _query = {};

    if (search) _query.model = { $regex: search, $options: '1' };

    const count = await Watches.countDocuments(_query);
    const watches = await Watches.find(_query)
      .sort('model')
      .skip((page - 1) * limit)
      .limit(limit);

    return {
      watches,
      total: count,
      page,
      limit,
    };
  }

  async getById(id) {
    if (!id) throw new Error('You did not provide an ID');
    const watch = await Watches.findById(id);
    return watch;
  }

  async post(watch) {
    const createdWatch = await Watches.create(watch);
    return createdWatch;
  }
}

export default new WatchesService();
