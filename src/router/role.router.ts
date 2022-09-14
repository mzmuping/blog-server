import Router from 'koa-router';

import roleController from '@/controller/role.controller';
import { verifyProp } from '@/middleware/role.middleware';

const roleRouter = new Router({ prefix: '/role' });

// DONE 角色列表（分页）
roleRouter.get('/list', roleController.getList);

// DONE 所有角色列表（不分页）
roleRouter.get('/all_list', roleController.getAllList);

// DONE 获取所有角色（树型）
roleRouter.get('/get_tree_role', roleController.getTreeRole);

// DONE 获取除了父级以外的所有角色（树型）
roleRouter.get('/get_tree_child_role', roleController.getTreeChildRole);

// DONE 批量删除子角色
roleRouter.post(
  '/batch_delete_child_roles',
  verifyProp,
  roleController.batchDeleteChildRoles
);

// DONE 批量新增子角色
roleRouter.put(
  '/batch_add_child_roles',
  verifyProp,
  roleController.batchAddChildRoles
);

// DONE 创建角色
roleRouter.post('/create', verifyProp, roleController.create);

// DONE 更新角色
roleRouter.put('/update/:id', verifyProp, roleController.update);

// DONE 查找角色
roleRouter.get('/find/:id', roleController.find);

// DONE 删除角色（会删除底下关联的所有子角色）
roleRouter.delete('/delete/:id', roleController.delete);

// DONE 获取该角色的子角色（只找一层）
roleRouter.get('/get_child_role/:id', roleController.getChildRole);

// DONE 获取该角色的子角色（递归查找所有）
roleRouter.get('/get_all_child_role/:id', roleController.getAllChildRole);

// DONE 获取某个用户的角色
roleRouter.get('/get_user_role/:user_id', roleController.getUserRole);

// DONE 获取我的角色
roleRouter.get('/get_my_role', roleController.getMyRole);

// DONE 获取某个角色的权限
roleRouter.get('/get_role_auth/:id', roleController.getRoleAuth);

// 修改某个角色的权限
roleRouter.put('/update_role_auth/:id', roleController.updateRoleAuth);

export default roleRouter;
