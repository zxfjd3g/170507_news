# 1. day01
## 1). 项目介绍
    双端自适应SPA
    react+antd+es6+webpack+babel
    模块化 / 组件化 / 工程化
## 2). 项目技术选型
    数据展现/交互/组件: react, react-router, antd
    前后台交互: axios, json, postman, API接口
    模块化: es6, babel
    工程化: webpack, create-react-app, eslint
## 3). API接口
    理解: url,请求方式, 请求参数格式, 响应数据格式
    接口文档
    对接口, 测接口, 调接口, 联调
    前后台分离, mock数据
    使用postman测试接口: 添加接口记录/导入接口记录/访问测试
## 4). 搭建项目
    使用react脚手架下载模板项目
    下载依赖的其它模块: react-router axios antd
    实现antd按需打包
    搭建SPA的整体结构
## 5). antd组件
    Row, Col: 行列布局
    Menu, MenuItem
    Icon
    Button
    Tabs, TabPane
    Form, ForItem
      export default Form.create()(Xxx)
      getFieldDector('username')(<Input>)
    Input
    message
## 6) ajax请求, 前后台交互
    使用axios提交异步请求
    在请求返回后, 根据响应数据的情况来做不同界面更新
    
# 2. day02
## 1). 自定义组件
    news_container组件: app组件的默认子路由
    news_block组件: 文本新闻列表, type/count
    news_image_block组件: 图片新闻列表, type/count/cardTitle/cardWidth/imageWidth
    news_products组件: 将静态页面转换为组件
## 2) antd组件
    Row/Col
    Card
    Tabs/TabPane
    Carousel
## 3) 双端自适应
    使用一个媒体查询的react插件(识别设备的宽度, 返回不同的界面): react-responsive
    
    
# 3. day03
    news_detail
      news_comments
    user_center
    