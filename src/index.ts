import * as mod from "./external";
export * from "./external"; // 把内容分开各自导出
export { mod as z }; // 把所有内容打包成一个对象导出
export default mod;
