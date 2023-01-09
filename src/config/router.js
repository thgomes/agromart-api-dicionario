import indexRouter from '@/routes/index';
import csaRouter from '@/routes/csa';

export default function (app) {
  app.use('/', indexRouter);
  app.use('/csa', csaRouter);
}
