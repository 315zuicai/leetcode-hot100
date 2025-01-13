import * as fs from 'fs';
import * as path from 'path';

// 递归获取所有 .ts 文件
function getAllTsFiles(dirPath: string): string[] {
    const files: string[] = [];

    const items = fs.readdirSync(dirPath);

    for (const item of items) {
        const fullPath = path.join(dirPath, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            files.push(...getAllTsFiles(fullPath));
        } else if (path.extname(item) === '.ts') {
            files.push(fullPath);
        }
    }

    return files;
}

// 将 ts 文件转换为 markdown
function convertTsToMarkdown(filePath: string): string {
    const content = fs.readFileSync(filePath, 'utf-8');
    const fileName = path.basename(filePath);

    let markdown = `# ${fileName}\n\n`;
    markdown += '```typescript\n';
    markdown += content;
    markdown += '\n```\n';

    return markdown;
}

// 主函数
function main() {
    const srcDir = path.join(process.cwd(), 'src');

    // 确保 src 目录存在
    if (!fs.existsSync(srcDir)) {
        console.error('src directory not found!');
        process.exit(1);
    }

    // 创建输出目录
    const outputDir = path.join(process.cwd(), 'markdown-output');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }

    // 获取所有 ts 文件并转换
    const tsFiles = getAllTsFiles(srcDir);

    for (const file of tsFiles) {
        const markdown = convertTsToMarkdown(file);
        const relativePath = path.relative(srcDir, file);
        const outputPath = path.join(outputDir, `${relativePath}.md`);

        // 确保输出文件的目录存在
        const outputFileDir = path.dirname(outputPath);
        if (!fs.existsSync(outputFileDir)) {
            fs.mkdirSync(outputFileDir, { recursive: true });
        }

        fs.writeFileSync(outputPath, markdown);
        console.log(`Converted ${file} to ${outputPath}`);
    }
}

main(); 