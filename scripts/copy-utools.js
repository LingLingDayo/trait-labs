import fs from 'fs';
import path from 'path';

const srcDir = path.resolve('utools');
const destDir = path.resolve('dist');

if (fs.existsSync(srcDir)) {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  
  // 将 utools 目录下的内容复制到 dist 目录
  fs.cpSync(srcDir, destDir, { recursive: true });
  console.log('uTools 插件文件已成功同步到 dist 目录');
} else {
  console.error('错误：找不到 utools 目录');
  process.exit(1);
}
