import fs from 'fs';

import sequelize from '@/config/db';
import { chalkERROR, chalkSUCCESS } from '@/utils/chalkTip';
import { deleteAllForeignKeys, deleteAllIndexs } from '@/utils/index';

/** 加载所有model */
export const loadAllModel = () => {
  const modelDir = `${process.cwd()}/src/model`;
  fs.readdirSync(modelDir).forEach((file: string) => {
    if (file.indexOf('.model.ts') === -1) return;
    // eslint-disable-next-line
    require(`${modelDir}/${file}`).default;
  });
  console.log(chalkSUCCESS(`加载所有model成功~`));
};

/** 删除所有表 */
export const deleteAllTable = async () => {
  try {
    loadAllModel();
    await sequelize.drop();
    console.log(chalkSUCCESS('删除所有表成功！'));
  } catch (err) {
    console.log(chalkERROR('删除所有表失败！'));
  }
};

/**
 * 初始化数据库：
 * 1：重置所有
 * 2：校正现有数据库
 * 3：加载relation
 */
export const initDb = async (v) => {
  try {
    switch (v) {
      case 1:
        await deleteAllForeignKeys();
        await deleteAllIndexs();
        await deleteAllTable();
        loadAllModel();
        await sequelize.sync({ force: true }); // 将创建表,如果表已经存在,则将其首先删除
        console.log(chalkSUCCESS('初始化数据库所有表完成！'));
        break;
      case 2:
        loadAllModel();
        // eslint-disable-next-line global-require
        require('@/model/relation');
        await sequelize.sync({ alter: true }); // 这将检查数据库中表的当前状态(它具有哪些列,它们的数据类型等),然后在表中进行必要的更改以使其与模型匹配.
        console.log(chalkSUCCESS('校正数据库所有表完成！'));
        break;
      case 3:
        // loadAllModel();
        // eslint-disable-next-line global-require
        require('@/model/relation');
        break;
      default:
        console.log('请输入正确的参数');
    }
  } catch (err) {
    console.log(chalkERROR('初始化失败！'), err);
  }
};
