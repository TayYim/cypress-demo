# cypress-demo

## Cypress 工程搭建步骤

1. 在gitee上创建git 仓库
2. 克隆仓库到本地
   ```
   git clone git@gitee.com:xxx.git
   ```
3. 初始化js工程  
    ``` 
    npm init
    ```
4. 安装cypress 
   ```
    npm install cypress --save-dev
    ```
5. 添加.gitignore文件并添加以下内容
   ```
   node_modules
   cypress/videos/
   ```
6. 提交代码到远程仓库
    ```
    git add filename   
    git commit -m '描述commit的内容原因等'
    git push
    ```
7. Add following code to your package.json file
```
{
  "scripts": {
    "cypress:open": "cypress run"
  }
}
```

## 使用说明

可以使用如下命令打开cypress, 手动选择需要跑的用例
  ```
  npm run cypress:open
  ```
或者
  ```
  npx cypress open
  ```

使用如下命令自动运行 cypress
  ```
  npx cypress run
  ```
或者用如下命令只运行 3-demo下的测试
```
  npm run cypress:run
```

如果想要生成测试报告可以运行如下命令生成
```
 yarn cypress:run --reporter=spec
```
或者使用如下命令生成json格式的报告
```
yarn cypress:run --reporter=json --reporter-options "toConsole=true"
```