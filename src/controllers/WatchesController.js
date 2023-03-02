import WatchesService from '../services/WatchesService.js';

class WatchesController {
  async get(req, res) {
    try {
      const { watches, total, page, limit } = await WatchesService.get(
        req.query,
      );

      return res.json({
        data: watches,
        total,
        page,
        limit,
      });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getById(req, res) {
    try {
      const watch = await WatchesService.getById(req.params.id);
      res.json(watch);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  async post(req, res) {
    try {
      const watch = await WatchesService.post(req.body);
      res.status(201).json(watch);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new WatchesController();
