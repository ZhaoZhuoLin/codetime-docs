# AST及其应用.

> AST：Abstract Syntax Tree - 抽象语法树 (https://astexplorer.net/)

:::tip AST是什么？
devDependencies依赖的第三方库，归纳一下有：JavaScript转译、css预处理器、prettier、eslint等。这些模块在开发过程中有重要的作用，切都是建立在AST的基础上。
:::

## AST工作流程
- parse将code解析为AST
- transform：对AST中的各个节点做相关操作，如新增、删除、替换、追加等。
- generator：将AST转为代码

## AST树预览
![AST树预览](/image.png)

## AST的业务场景
- 有代码规范定制的时候
