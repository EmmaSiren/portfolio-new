import React, { useState } from 'react';
import NavTabs from './NavTabs';
import { Breadcrumb, Layout, Menu } from 'antd';
const { Header, Content, Sider } = Layout;

export default function Home() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  const renderPage = () => {
    if(currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if(currentPage === 'Portfolio') {
      return <Portfolio projects={projects}/>
    }
    if(currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page); 

  return (
    <Layout style={{ height: '100vh' }}>
      <Header className="header">
      <nav>
          <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        </nav>
        <div className="logo" />
        <Menu mode="horizontal" />
      </Header>
      <Layout>
        <Sider width={200} >
          <Menu mode="inline" style={{ height: '100%', borderRight: 0, background: 'gray'}} />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0'}}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content style={{ padding: 24, margin: 0, minHeight: 100, background: 'gray'}}>
            Content 
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}
