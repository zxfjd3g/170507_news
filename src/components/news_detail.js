/**
 * 新闻详情路由组件
 */
import React, {Component} from 'react'
export default class NewsDetail extends Component {
  render () {
    return (
      <div>新闻详情id: {this.props.params.id}</div>
    )
  }
}