import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Table from '../Table/Table'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default class Zheader extends Component{
  render(){
    return(
      
<Layout>
  <Header className="header">
    <div className="logo" />
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['2']}
      style={{ lineHeight: '64px' }}
    >

      {
        ['首页','我的','设置'].map((item,index)=>{
          return(<Menu.Item key={index}>{item}</Menu.Item>)
      })
      }
      {/* <Menu.Item key="2">nav 2</Menu.Item> */}
    </Menu>
  </Header>
  <Layout>
    <Sider width={200} style={{ background: '#fff' }}>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
      >

        {
          [
            {
              key:'sub1',
              title:<span><Icon type="user" />subnav 1</span>,
              options:[1,2,3,4]
            },
            {
              key:'sub2',
              title:<span><Icon type="laptop" />subnav 2</span>,
              options:[5,6,7,8]
            },
            {
              key:'sub3',
              title:<span><Icon type="notification" />subnav 3</span>,
              options:[9,10,11,12]
            },
          ].map((item)=>{
            return(
            <SubMenu key={item.key} title={item.title}>
              {
                item.options.map((item,index)=>{
                  return( <Menu.Item key={index}>option{item}</Menu.Item>)
                })
              }  
            </SubMenu>
            )
          })
        }

        {/* <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="user" />
              subnav 1
                      </span>
          }
        >
          <Menu.Item key="1">option1</Menu.Item>
          <Menu.Item key="2">option2</Menu.Item>
          <Menu.Item key="3">option3</Menu.Item>
          <Menu.Item key="4">option4</Menu.Item>
        </SubMenu>
        */}
      </Menu>
    </Sider>
    <Layout style={{ padding: '0 24px 24px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Content
        style={{
          background: '#fff',
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <Table/>
      </Content>
    </Layout>
  </Layout>
</Layout>
    )
  }
}