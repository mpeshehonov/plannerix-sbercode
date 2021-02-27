import React from 'react';
import {Layout} from 'antd';
import Header from '../Header';
import './styles.scss';

const PageLayout = ({children}) => {
  return (
    <Layout className="layout">
      <Header />
      <Layout>
        <Layout.Content className="layout-content">
          <div className="site-layout-content">{children}</div>
        </Layout.Content>
      </Layout>
      <Layout.Footer style={{textAlign: 'center'}}>
        SberCode x Plannerix ©2021.
      </Layout.Footer>
    </Layout>
  );
};

export default PageLayout;
