# AI for Robotics Research

From papers to experiments, from ideas to evidence.

Languages: [English](README.md) | 简体中文

## 这个仓库是什么

这是一个面向机器人科研的精简型 playbook，帮助研究者用 AI 工具支持读论文、找方向、形成假设、设计实验、分析失败、整理证据和写作。

它关注科研过程本身：问题如何形成，实验如何设计，证据如何记录，结论如何控制边界。

## 这个仓库不是什么

这个仓库不是：

- 原始聊天记录合集。
- 私人实验室笔记。
- 未发表实验结果或内部研究想法的存放处。
- 最新论文综述或排行榜。
- 机器人控制、训练或部署代码库。
- 存放密钥、私有数据集、专有代码或机密实验室信息的地方。

所有示例都应当是合成的或已经脱敏的。

## 适合谁

这个仓库适合机器人方向的研究生、科研工程师、早期研究者和实验室团队，尤其适合把 AI 工具用于科研训练、同时保留人工判断的人。

## 推荐使用路径

1. 先读 [docs/01-research-workflow.md](docs/01-research-workflow.md)，理解从论文到实验、从想法到证据的完整流程。
2. 用 [docs/04-templates.md](docs/04-templates.md) 建立 paper card、literature matrix、idea bank 和 experiment ledger。
3. 用 [docs/03-prompt-library.md](docs/03-prompt-library.md) 让 AI 帮你批判想法、拆实验、分析失败，并压缩不成熟的点子。
4. 按 [docs/06-grad-student-playbook.md](docs/06-grad-student-playbook.md) 训练早期研究生需要的基本科研能力。
5. 读 [docs/07-research-taste.md](docs/07-research-taste.md)，把科研品味当作可以训练的判断力。

## 核心科研流程

1. 明确研究方向和约束。
2. 扫描前沿，但不把 AI 输出当权威。
3. 用结构化笔记读论文。
4. 建立小型文献地图。
5. 找出可验证的研究 gap。
6. 形成可证伪假设。
7. 设计最小实验和公平 baseline。
8. 复现实验或验证已有方法。
9. 分析失败，再谈进展。
10. 用证据支撑 claim。
11. 写论文和准备 rebuttal。

## 仓库结构

```text
.
|-- .gitignore
|-- README.md
|-- README.zh-CN.md
|-- LICENSE
|-- AGENTS.md
|-- docs/
|   |-- 01-research-workflow.md
|   |-- 02-robotics-frontiers.md
|   |-- 03-prompt-library.md
|   |-- 04-templates.md
|   |-- 05-sanitization.md
|   |-- 06-grad-student-playbook.md
|   `-- 07-research-taste.md
`-- examples/
    `-- sanitized-examples.md
```

## 脱敏原则

公开内容前，请删除或泛化：

- 姓名、邮箱、机构、实验室标识、会议细节和个人评论。
- 会暴露私有上下文的原始 prompt 或聊天记录。
- 未发表假设、失败细节、实验结果和内部比较。
- 数据路径、机器人编号、内部系统名、API key、凭据和访问 token。
- 暴露人员、地点、浏览器标签、终端、文件名或私有 dashboard 的截图。

不确定时，把例子改写成合成示例，只保留可复用的科研流程。

## License 说明

本仓库使用 MIT License。你可以复用和修改，但贡献内容必须保持公开安全，不应包含私人、受限或机密材料。
