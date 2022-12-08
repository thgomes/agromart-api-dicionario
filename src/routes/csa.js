import { Router } from 'express';

import * as csaController from '@/controllers/csa';

const router = Router();

router.route('/')
  .get(csaController.getCsas)
  .post(csaController.createCsa);

  router.route('/:id')
  .get(csaController.getcsaById)

export default router;
