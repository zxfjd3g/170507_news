/**
 * 默认路由组件(各种新闻列表)
 */
import React, {Component} from 'react'
export default class NewsContainer extends Component {
  render () {
    return (
      <div>
        <a href="#/news_detail/1">新闻1</a><br/>
        <a href="#/news_detail/2">新闻2</a><br/>
      </div>
    )
  }
}