import Router from 'koa-router';

import initController from '@/controller/init.controller';

const initRouter = new Router({ prefix: '/init' });

// 初始化数据库
initRouter.post('/database', initController.initDatabase);

// 初始化角色
initRouter.post('/role', initController.initRole);

// 初始化权限
initRouter.post('/auth', initController.initAuth);

// 初始化角色权限
initRouter.post('/role_auth', initController.initRoleAuth);

// 初始化时间表
initRouter.post('/day_data', initController.initDayData);

// 初始化时间表
initRouter.post('/admin_user', initController.initAdminUser);

export default initRouter;
