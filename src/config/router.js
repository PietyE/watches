import Router from 'express';
import { Endpoints } from '../constants/endpoints.js';
import WatchesController from '../controllers/WatchesController.js';

const router = new Router();

router.get(Endpoints.WATCHES, WatchesController.get);
router.get(`${Endpoints.WATCHES}/${Endpoints.ID}`, WatchesController.getById);
router.post(Endpoints.WATCHES, WatchesController.post);

export default router;
