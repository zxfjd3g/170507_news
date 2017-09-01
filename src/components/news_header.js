/**
 * 头部组件
 */
import React, {Component} from 'react'
import {
  Row, // 行
  Col, // 列,
  Menu, //菜单
  Modal, // 确认框
  Icon, //图标
} from 'antd'
import logo from '../images/logo.png'

// 菜单项组件
const MenuItem = Menu.Item

export default class NewsHeader extends Component {

  state = {
    selectedKey: 'top'
  }

  clickMenu = ({key}) => {
    // 更新状态
    this.setState({selectedKey: key})
  }

  render () {
    const {selectedKey} = this.state
    return (
      <header>
        <Row>
          <Col span={1}></Col>
          <Col span={3}>
            <a href="#/" className="logo">
              <img src={logo} alt="logo"/>
              <span>ReactNews</span>
            </a>
          </Col>
          <Col span={19}>
            <Menu mode="horizontal" selectedKeys={[selectedKey]} onClick={this.clickMenu}>
              <MenuItem key="top">
                <Icon type="appstore"/>头条
              </MenuItem>
              <MenuItem key="shehui">
                <Icon type="appstore"/>社会
              </MenuItem>
              <MenuItem key="guonei">
                <Icon type="appstore"/>国内
              </MenuItem>
              <MenuItem key="guoji">
                <Icon type="appstore"/>国际
              </MenuItem>
              <MenuItem key="yule">
                <Icon type="appstore"/>娱乐
              </MenuItem>
              <MenuItem key="tiyu">
                <Icon type="appstore"/>体育
              </MenuItem>
              <MenuItem key="keji">
                <Icon type="appstore"/>科技
              </MenuItem>
              <MenuItem key="shishang">
                <Icon type="appstore"/>时尚
              </MenuItem>
            </Menu>
            <Modal></Modal>
          </Col>
          <Col span={1}></Col>
        </Row>
      </header>
    )
  }
}
