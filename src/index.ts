import Koa from "koa";
import sequelize, { connectMysql } from "../config/db";
import articleModel from "./model/article.model";
import { initTable } from "../utils";

const app = new Koa();

async function main() {
  app.use(async (ctx) => {
    ctx.body = "Hello World";
  });
  await connectMysql();
  console.log("所有模型均开始.");
  await initTable(articleModel);

  console.log("所有模型均已成功同步.");
  app.listen(3000);
}
main();
