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
## 1). 自定义组件
    news_detail组件: 显示新闻详情相关新闻列表
    news_comments组件: 新闻的评论列表/提交评论和收藏文章的功能
    user_center组件: 显示用户的收藏文章列表与评论列表和设置头像
## 2) antd组件
    Row/Col
    Form/FormItem/Input/Button
    BackTop
    Card
    Tabs/TabPane
    Modal
    Upload
## 3) rest api
### 理解rest api  / restful api
  * api接口的分类
    * restful: rest风格
    * restless: 非rest风格
  * rest接口
    * https://api.github.com/users/zxfjd3g
    * https://api.github.com/users/zxfjd3g/repos
    * 不用带行为参数, 参数是路径的一个节点
    * 请求的行为由请求方式来决定
      * get: 查询(读, 获取数据)  R read
      * post: 添加(保存), C create
      * delete: 删除, D delete
      * put: 更新, U update
  * 非rest接口
    * http://xxx.com/api/getUser
    * http://newsapi.gugujiankong.com/Handler.ashx?action=login&username=zxfjd3g&password=123123
    * 路径或参数中包含了行为数据
    * 一般只用2种请求方式:
      * get
      * post
## 模拟实现rest接口
  * 使用json-server库
  * 使用:
    * 下载 json-server
    * 创建一个数据库文件: src/mock/db.json
      {
        "users": [
          {"id": 1, "name": "Tom", age: 12},
          {"id": 2, "name": "Tom2", age: 13}
        ]
        "comment": {
          "id": 1, "username": "Tom", content: 'xxxx'
        }
      }
    * 启动服务器: json-server --watch src/mock/db.json
       http://localhost:3000/users
       http://localhost:3000/users/2
       http://localhost:3000/comment
  * postman/编码测试访问rest接口
    * axios
    * axios.get(): get请求, 查询
    * axios.post(): post请求, 保存
    * axios.put(): put请求, 更新
    * axios.delete(): delete请求, 删除
    
# 4. day04
  实现移动端的编码
  MobileApp
  MobileHeader
  MobileContainer(MobileNewsBlock)/MobileNewsDetail/MobileUserCenter
    